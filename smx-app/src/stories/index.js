import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Item from './Item';


storiesOf('Button', module)
  .add('with text', () => (
    <button onClick={action('clicked')}>Hello Button</button>
  ))
  .add('with some emoji', () => (
    <button onClick={action('clicked')}>�� �� �� ��</button>
  ));

const words = "storybook";
storiesOf('Item', module)
    .add('show Item', () =>(
        <Item />
));