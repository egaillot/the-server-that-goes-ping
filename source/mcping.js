var http = require("http");

exports.createServer = function(pinger){
  return http.createServer(function(request, response){
    	pinger.ping("some.minecraft.server",9999,function(num_players){
		response.end("some.minecraft.server: " + num_players + " players connected.");
	});
  });
};
