import React from 'react';
import { storiesOf } from '@storybook/react';

import Header from '../Header';

storiesOf('Header', module)
  .add('Primary', () => (
    <Header title="Primary Title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." primary />
  ))
  .add('Secondary', () => (
    <Header title="Secondary Title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." secondary />
  ))
  .add('Tertiary', () => (
    <Header title="Tertiary Title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." tertiary />
  ))
  .add('No Description', () => (
    <Header title="Tertiary Title" tertiary />
  ));
