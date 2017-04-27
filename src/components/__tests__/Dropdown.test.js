import React from 'react';
import renderer from 'react-test-renderer';
import { List, Map } from 'immutable';
import Dropdown from '../UI/Dropdown/Dropdown';

// ============================================

test('Renders Dropdown menu', () => {
  const tree = renderer.create(
    <Dropdown options={List([
      Map({
        value: 1,
        label: 'First item'
      }),
      Map({
        value: 2,
        label: 'Second item'
      }),
    ])} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Toggle Dropdown menu', () => {
  const tree = renderer.create(
    <Dropdown options={List([
      Map({
        value: 1,
        label: 'First item'
      }),
      Map({
        value: 2,
        label: 'Second item'
      }),
    ])} />
  ).toJSON();
  tree.props.onClick();
  expect(tree).toMatchSnapshot();
});
