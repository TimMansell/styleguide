import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withA11y } from '@storybook/addon-a11y';

addDecorator(
    withInfo({
        inline: true, 
        header: false
    })
);

addDecorator(withA11y);

function loadStories() {
    const req = require.context('../components', true, /\.stories\.js$/);
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);