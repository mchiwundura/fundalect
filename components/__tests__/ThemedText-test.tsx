import * as React from 'react';
import {render} from '@testing-library/react-native';

import { ThemedText } from '../ThemedText';

it(`renders correctly and matches snapshot`,
   () => {
  const tree = render(<ThemedText>Snapshot test!</ThemedText>).toJSON();

  expect(tree).toMatchSnapshot();
}
);
