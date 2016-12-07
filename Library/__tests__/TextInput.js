import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import TextInput from '../TextInput';


it('renders correctly', () => {
  const tree = renderer.create(
    <TextInput />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
