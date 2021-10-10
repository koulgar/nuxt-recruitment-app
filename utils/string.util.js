export const onlyOneConsecutiveSpace = value => {
  const formattedValue = value.replace(/\s\s+/g, ' ');
  return formattedValue;
};

export const formatToTitleCase = value => {
  const wordList = value.split(' ');
  const capitalizedWords = wordList.map(word => {
    const lowerCaseWord = word.toLocaleLowerCase('tr-TR');
    const capitalFirstLetter = lowerCaseWord
      .charAt(0)
      .toLocaleUpperCase('tr-TR');
    const wordExceptFirstLetter = lowerCaseWord.slice(1);
    return capitalFirstLetter + wordExceptFirstLetter;
  });
  const titleCaseSentence = capitalizedWords.join(' ');
  return titleCaseSentence;
};

export const onlyAlphabetical = value => {
  const formattedValue = value.replace(/[^a-zşıüöçğA-ZŞİÜÖĞÇ ]+/, '');
  return formattedValue;
};
