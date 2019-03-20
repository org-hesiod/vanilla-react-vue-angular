import { configure } from '@storybook/angular';

// automatically import all files ending in *.stories.js
const req = require.context('../../../source/angular', true, /.stories.ts$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
