import {ref, computed} from 'vue';
import {converter} from 'nums-to-words-ru-lang';

export const useNumsConverter = () => {
  const converterModel = ref('');
  const convertedWords = computed(
      () => converter.convert(Number(converterModel.value)),
  );

  return {
    converter,
    converterModel,
    convertedWords,
  };
};
