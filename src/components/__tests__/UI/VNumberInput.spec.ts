import {describe, test, expect} from 'vitest';
import {render} from '@testing-library/vue';
import VNumberInput from '~components/UI/VNumberInput.vue';
import faker from '@faker-js/faker';

describe('Test VNumberInput component', () => {
  test('Render and v-model match test', () => {
    const fakeModel = faker.datatype.string(10);

    const renderObj = render(VNumberInput, {
      props: {
        modelValue: fakeModel,
      },
    });

    const inputEl = <HTMLInputElement>renderObj.getByTestId('input-el');

    expect(inputEl.value).toMatch(fakeModel);
  });
});
