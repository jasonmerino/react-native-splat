import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import TextInput from './TextInput';


it('renders correctly', () => {
  const tree = renderer.create(
    <TextInput />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
