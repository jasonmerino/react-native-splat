import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Button from '../Button';

it('renders correctly', () => {
  const tree = renderer.create(
    <Button>Button Test</Button>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders loading state correctly', () => {
  const tree = renderer.create(
    <Button isLoading>Button Test</Button>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
