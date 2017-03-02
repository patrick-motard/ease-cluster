'use strict';

const easeCluster = require('../../lib/easeCluster');

easeCluster({
  workers: 3,
  lifetime: 0,
  grace: 250,
  start: () => {
    console.log('ah ha ha ha');

    process.on('SIGTERM', function() {
      console.log('stayin alive');
    });
  }
});
