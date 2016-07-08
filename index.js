var fs         = require('fs'),
    es         = require('event-stream'),
    JSONStream = require('JSONStream');

console.log('Inicia genaración de archivo...');

var getStream = function () {
    var jsonData = 'users.json',
        stream   = fs.createReadStream(jsonData, {encoding: 'utf8'}),
        parser   = JSONStream.parse('*');

    return stream.pipe(parser);
};

 getStream()
  .pipe(es.mapSync(function (data) {
    var data = data.username + ',' + data.email + ',' + data.gender + ',' + data.location + ',' + data.createdAt  + '\r\n';
    fs.appendFile('file.csv', data, function (err) {
      if (err) throw err;
      console.log('Data:' + data);
    });
  }));
