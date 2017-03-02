const easeCluster = require('./lib/ease-cluster');

easeCluster((id) => {
  console.log(`Started worker ${id}`);
});
