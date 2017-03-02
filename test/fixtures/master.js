'use strict';

const easeCluster = require('../../lib/easeCluster');

easeCluster({
  lifetime: 0,
  workers: 2,
  master: () => {
    console.log('master');
  },
  start: () => {
    console.log('worker');
    process.exit();
  }
});
