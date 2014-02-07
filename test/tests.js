var fs = require('fs'),
    should = require('should');

describe('building the url', function(){
	var expected = JSON.parse(fs.readFileSync('test/expected/request.json'));
	var actual = JSON.parse(fs.readFileSync('test/actual/request.json'));

    it('should append the credentials properly', function(){
    	actual.headers.authorization.should.eql(expected.headers.authorization);
    });

    it('should set the host correctly', function(){
    	actual.headers.host.should.eql(expected.headers.host);
    });

    it('should use the correct url', function(){
    	actual.url.should.eql(expected.url);
    });
});

describe('post body', function(){
	var expected = fs.readFileSync('test/expected/requestBody.form').toString();
	var actual = fs.readFileSync('test/actual/requestBody.form').toString();

    it('should build the post body correctly', function(){
    	actual.should.eql(expected);
    });
});