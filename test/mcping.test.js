var expect = require("expect.js");
var mcPing = require("../source/mcping");

describe("A Minecraft ping server", function () {
  it("tells how many players are connected", function (done) {
    var ourPingServer = mcPing.createServer();

    ourPingServer.listen(1789, function () {
      done();
    });
  });
});
