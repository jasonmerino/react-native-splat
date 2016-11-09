import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Scene from './Scene';


it('renders correctly', () => {
  const tree = renderer.create(
    <Scene />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
