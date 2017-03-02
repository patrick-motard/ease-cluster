'use strict';

const easeCluster = require('../../lib/easeCluster');

easeCluster({
  lifetime: 0,
  start: () => {
    console.log('worker');
    process.exit();
  }
});
