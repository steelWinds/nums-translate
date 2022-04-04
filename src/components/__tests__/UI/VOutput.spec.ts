import {describe, test, expect} from 'vitest';
import {render} from '@testing-library/vue';
import VOutput from '~components/UI/VOutput.vue';
import faker from '@faker-js/faker';

describe('Test template of component', () => {
  test('Render and make fake slot', () => {
    const fakeText = faker.datatype.uuid();

    const renderObj = render(VOutput, {
      slots: {
        'slot:text': fakeText,
      },
    });

    expect(renderObj.getByText(fakeText)).toBeTruthy();
  });
});
