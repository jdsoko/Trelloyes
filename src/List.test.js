import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';
import { exportAllDeclaration } from '@babel/types';



it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
    const tree = renderer
    var cardIds = [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ]
    .create(<List
        key='1'
        header='First list'
        cards={cardIds.map(id => store.allCards[id])}
      />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});