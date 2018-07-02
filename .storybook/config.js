import { configure } from '@kadira/storybook';
import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import aphroditeInterface from 'react-with-styles-interface-aphrodite';
import DefaultTheme from '../src/themes/DefaultTheme';
import registerInterfaceWithDefaultTheme from '../scripts/utils/registerInterfaceWithDefaultTheme';

/* Register react with styles interface */
registerInterfaceWithDefaultTheme(aphroditeInterface);

function loadStories() {
  require('../stories/ExampleSlider');
}

configure(loadStories, module);
