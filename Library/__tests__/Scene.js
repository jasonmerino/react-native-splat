
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Scene from '../Scene';

jest.mock('react-native-keyboard-spacer');

it('renders correctly', () => {
  const tree = renderer.create(
    <Scene />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
