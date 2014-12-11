Package.describe({
  name: 'liyu:jquery-transition-events',
  summary: 'jquery transition events plugin packed for meteor',
  version: '1.0.0',
  git: 'https://github.com/liyu1981/meteor-jquery-transition-events'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('jquery', 'client');
  api.imply('jquery', 'client');
  api.addFiles(['transition-events/lib/transition-events.js'], 'client');
});
