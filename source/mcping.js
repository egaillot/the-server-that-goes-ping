var http = require("http");

exports.createServer = function(pinger){
  return http.createServer(function(request, response){
    	pinger.ping("bla",333,function(num_players){
		response.end("some.minecraft.server: " + num_players + " players connected.");
	});
  });
};
