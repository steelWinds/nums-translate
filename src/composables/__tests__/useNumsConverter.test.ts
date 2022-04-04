import {describe, test, expect} from 'vitest';
import faker from '@faker-js/faker';
import {useNumsConverter} from '~composables/useNumsConverter';

describe('Test useNumsConverter', () => {
  const {converterModel, convertedWords, converter} = useNumsConverter();

  test('Testing computed fn with model variable', () => {
    const fakeNumber = faker.datatype.number(10000);
    const convertedFakeWords = converter.convert(fakeNumber);

    converterModel.value = String(fakeNumber);

    expect(convertedWords.value).toMatch(convertedFakeWords);
  });
});
