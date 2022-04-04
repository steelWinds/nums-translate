import type {IConverter} from 'nums-to-words-ru-lang/types/interfaces';
import {ref, computed} from 'vue';
import Converter from 'nums-to-words-ru-lang';

export const useNumsConverter = () => {
  const converter: IConverter = new Converter();
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
