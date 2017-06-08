const app = require('./src/server/server');

app.listen(app.get('port'), () => {
  console.log(`Express server listening on port 10000`);
});