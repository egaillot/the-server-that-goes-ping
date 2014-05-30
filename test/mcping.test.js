var expect = require("expect.js"),
    request = require("request"),
    mcPing = require("../source/mcping");

describe("A Minecraft ping server", function () {
  it("a ping server that can actually ping...", function (done) {
    var pinger = {
          ping: function (host, port, callback) {
            expect(host).to.equal("some.minecraft.server");
            expect(port).to.equal(9999);
            done();
          }
        },
        ourPingServer = mcPing.createServer(pinger);
    ourPingServer.listen(1789, function () {
      request("http://localhost:1789/some.minecraft.server/9999");
    });
  });
  it("tells how many players are connected", function (done) {
    var pinger = {
          ping: function (host, port, callback) {
            callback(45);
          }
        },
        ourPingServer = mcPing.createServer(pinger);
    ourPingServer.listen(1790, function () {
      request("http://localhost:1790/some.minecraft.server/9999",
        function (err, _, body) {
          if(err) done(err);
            expect(body).to.equal("some.minecraft.server: 45 players connected.");
          });
	done();
      });
    });
});
