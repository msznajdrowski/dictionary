import data from "../data/words_dictionary.json";

const getWordsList = (): string[] => Object.keys(data);

export { getWordsList };
