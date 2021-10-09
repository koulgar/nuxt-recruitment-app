export { default as PInfoBox } from '../../components/p-info-box.vue'
export { default as SharedPButton } from '../../components/shared/p-button.vue'
export { default as SharedPCard } from '../../components/shared/p-card.vue'
export { default as SharedPLogo } from '../../components/shared/p-logo.vue'
export { default as SharedPSvg } from '../../components/shared/p-svg.vue'
export { default as PListingCard } from '../../components/p-listing-card/index.vue'
export { default as PListingCardContent } from '../../components/p-listing-card/listing-card-content.vue'
export { default as SharedPHeader } from '../../components/shared/p-header/index.vue'
export { default as SharedPHeaderMenuItem } from '../../components/shared/p-header/menu-item.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
