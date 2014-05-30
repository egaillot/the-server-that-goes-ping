var http = require("http");

exports.createServer = function(pinger){
  return http.createServer(function(request, response){
      var url = request.url.split("/");
    	pinger.ping(url[1], parseInt(url[2]), function(num_players){
		response.end("some.minecraft.server: " + num_players + " players connected.");
	});
  });
};
