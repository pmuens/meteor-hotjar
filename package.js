Package.describe({
  name: 'goltfisch:hotjar',
  summary: 'Hotjar-Library for Meteor',
  version: '0.1.0'
});

Package.onUse(function (api) {
  api.addFiles('client/hotjar.js', 'client');
});
