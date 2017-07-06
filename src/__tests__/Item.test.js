import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
//npm install --save-dev react-test-renderer
// npm test -- --coverage
import Item from '../components/Item';

it('has the correct title', () => {
  const component = renderer.create(
    <Item name="Soy un objeto" />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
