var http = require("http");

exports.createServer = function(){
  return http.createServer(function(request, response){
	response.end("some.minecraft.server: 42 players connected.");
  });
};
