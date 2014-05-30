var mcPing =  require("./source/mcping");

var pinger = {
    ping: function (host, port, callback) {
        callback(42);
    }
};
var ourPingServer = mcPing.createServer(pinger);

ourPingServer.listen(1968, function () {
    console.log("We're listening!");
});
