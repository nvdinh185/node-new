const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
  next();
});

//app.use(express.static(__dirname + '/www'));

main = (isHttp) => {

  app.use('/db', require('./routes/resource'));

  if (isHttp) {
    const httpServer = require('http').createServer(app);
    const portHttp = process.env.PORT || isHttp;

    httpServer.listen(portHttp, () => {
      console.log("Server HTTP is started with PORT: "+ portHttp);
    });
  }
}

const isHttp = 8080;

main(isHttp);