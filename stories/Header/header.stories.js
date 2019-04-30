import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

import Header from '../../components/Header';

addDecorator(withA11y)

storiesOf('Header', module)
  .add('Primary', () => (
    <Header title="Title" text="Lorem Ipsum" primary />
  ))
  .add('Secondary', () => (
    <Header title="Title" text="Lorem Ipsum" secondary />
  ))
  .add('Tertiary', () => (
    <Header title="Title" text="Lorem Ipsum" tertiary />
  ));