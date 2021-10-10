import pInput from './p-input.vue';
import { shallowMount } from '@vue/test-utils';
import * as strUtils from '@/utils/string.util';

jest
  .spyOn(strUtils, 'onlyOneConsecutiveSpace')
  .mockImplementation(value => value);
jest.spyOn(strUtils, 'formatToTitleCase').mockImplementation(value => value);
jest.spyOn(strUtils, 'onlyAlphabetical').mockImplementation(value => value);

beforeEach(() => {
  jest.clearAllMocks();
});
describe('p-input.vue', () => {
  const mountWithProps = additionalProps => {
    return shallowMount(pInput, {
      propsData: {
        ...additionalProps,
      },
    });
  };
  it('updates modelValue by emitting', () => {
    const wrapper = mountWithProps();
    wrapper.vm.updateValue('test');
    expect(wrapper.emitted('input')).toStrictEqual([['test']]);
  });

  it('inputHandler formats and updates value', () => {
    const mockFormatValue = jest.spyOn(pInput.methods, 'formatValue');
    const mockUpdateValue = jest.spyOn(pInput.methods, 'updateValue');
    const value = 'test';
    const event = { target: { value } };
    const wrapper = mountWithProps();
    wrapper.vm.inputHandler(event);
    expect(mockFormatValue).toHaveBeenCalledWith(value);
    expect(mockUpdateValue).toHaveBeenCalledWith(value);
  });

  it('blurHandler formats and emits value without trimming', () => {
    const mockValue = 'test   ';
    const mockUpdateValue = jest.spyOn(pInput.methods, 'updateValue');
    const wrapper = mountWithProps({ trim: false, value: mockValue });
    wrapper.setData({ isFocused: true });
    wrapper.vm.blurHandler();
    expect(wrapper.vm.isFocused).toBeFalsy();
    expect(mockUpdateValue).toHaveBeenCalledWith(wrapper.vm.value);
  });

  it('blurHandler formats and emits value with trimming', () => {
    const mockValue = 'test   ';
    const mockUpdateValue = jest.spyOn(pInput.methods, 'updateValue');
    const wrapper = mountWithProps({ trim: true, value: mockValue });
    wrapper.setData({ isFocused: true });
    wrapper.vm.blurHandler();
    expect(wrapper.vm.isFocused).toBeFalsy();
    expect(mockUpdateValue).toHaveBeenCalledWith(wrapper.vm.value.trim());
  });

  it('focusHandler sets focus status', () => {
    const wrapper = mountWithProps();
    wrapper.vm.focusHandler();
    expect(wrapper.vm.isFocused).toBeTruthy();
  });
  it('inputHandler formats target value', () => {
    const inputValue = 'test test test';
    const wrapper = mountWithProps({
      trim: true,
      titleCase: true,
      onlyAlphabetical: true,
    });
    const inputEl = wrapper.find('input');
    inputEl.element.value = inputValue;
    inputEl.trigger('input');
    expect(strUtils.onlyOneConsecutiveSpace).toHaveBeenCalled();
    expect(strUtils.formatToTitleCase).toHaveBeenCalled();
    expect(strUtils.onlyAlphabetical).toHaveBeenCalled();
    expect(wrapper.emitted('input')).toStrictEqual([[inputValue]]);
  });
  it('inputHandler does not formats target value', () => {
    const inputValue = 'test test test';
    const wrapper = mountWithProps({
      trim: false,
      titleCase: false,
      onlyAlphabetical: false,
    });
    const inputEl = wrapper.find('input');
    inputEl.element.value = inputValue;
    inputEl.trigger('input');
    expect(strUtils.onlyOneConsecutiveSpace).not.toHaveBeenCalled();
    expect(strUtils.formatToTitleCase).not.toHaveBeenCalled();
    expect(strUtils.onlyAlphabetical).not.toHaveBeenCalled();
    expect(wrapper.emitted('input')).toStrictEqual([[inputValue]]);
  });
});
