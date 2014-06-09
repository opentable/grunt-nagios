var request = require('request');

module.exports = function(grunt){
  var makeRequest = function(options, done) {
    var requestUrl = (options.nohttps ? 'http' : 'https') + '://' + options.server + '/nagios/cgi-bin/cmd.cgi';
    grunt.verbose.writeln('Nagios url: ' + requestUrl);

    var form = {
      cmd_typ: options.command, 
      cmd_mod: 2,
      btnSubmit: 'Commit'
    };

    form[options.grouptype] = options.group;

    request({
      uri: requestUrl,
      method: "POST",
      auth: {
          user: options.user,
          pass: options.password
      },
      form: form
    }, function(error, response, body) {
      if (error) {
        grunt.fail.fatal(error);
      }

      grunt.log.ok(response.statusCode);
      grunt.verbose.writeln(body);
      
      done();
    });
  };
  
  grunt.registerMultiTask('nagios', 'nagios interaction', function(){
    var done = this.async();
    var options = this.options({});

    grunt.verbose.writeflags(options);

    makeRequest(options, done);
  });
};

