'use strict';
const easeCluster = require('../../lib/easeCluster');

easeCluster(3, () => {
  console.log('worker');

  process.on('SIGTERM', function() {
    console.log('exiting');
    process.exit();
  });
});
