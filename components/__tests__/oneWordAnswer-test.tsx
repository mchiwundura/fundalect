import * as React from 'react';
import renderer from 'react-test-renderer';

import { OneWordAnswer } from '../question_type/oneWordAnswer'
import { ThemedText } from '../ThemedText';

it(`renders correctly`, () => {
  const tree = renderer.create(<OneWordAnswer/>).toJSON();

  expect(tree).toMatchSnapshot(); 
}); 