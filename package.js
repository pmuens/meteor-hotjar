Package.describe({
  name: 'goltfisch:hotjar',
  summary: 'Hotjar-Library for Meteor',
  version: '0.1.1',
  git: 'https://github.com/goltfisch/meteor-hotjar.git'
});

Package.onUse(function (api) {
  api.addFiles('client/hotjar.js', 'client');
});
