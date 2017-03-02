'use strict';
const easeCluster = require('../../lib/easeCluster');

easeCluster({
  workers: 3,
  lifetime: 0,
  start: () => {
    console.log('worker');
    process.exit();
  }
});
