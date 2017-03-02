'use strict';

const easeCluster = require('../../lib/easeCluster');

easeCluster({
  workers: 3,
  lifetime: 500,
  start: () => {
    console.log('worker');
    process.exit();
  }
});
