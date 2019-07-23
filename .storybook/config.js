import { configure } from "@storybook/angular";

const req = require.context("../src", true, /.stories.ts$/);

const loadStories = () => {
  req.keys().forEach(filename => req(filename));
};

configure(loadStories, module);
