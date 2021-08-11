const getAnagram = (words) => {
    let anagrams = {};
    let result = [];

    words.forEach((word) => {
      const sorted = word.split('').sort().join('');

      if (anagrams[sorted]) {
        return anagrams[sorted].push(word);
      }
      anagrams[sorted] = [word];
    });

    for (let i in anagrams) {
        result.push(anagrams[i]);
    }

    return result;
}

const words = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'];
const getResult = getAnagram(words);
console.log(getResult);