var http = require("http"),
    fs = require("fs"),
	server = {},
	bodyFile = fs.createWriteStream('test/actual/requestBody.form'),
	requestFile = fs.openSync('test/actual/request.json', 'w');

module.exports = function(grunt){
	grunt.registerTask('start-server', function(){
		server = http.createServer(function(request, response) {			
			fs.writeSync(requestFile, JSON.stringify({ headers: request.headers, url: request.url }));
		    request.pipe(bodyFile);

		    response.writeHead(200, {"Content-Type": "text/plain"});
		    response.write('<html><p>some response</p></html>');
		    response.end();
		}).listen(8888);
	});
};