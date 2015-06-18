var assert = require("assert"),
    Browser = require("zombie"),
    querySelector = require("../src/index");


describe("querySelector(selector, [ownerDocument : Document])", function() {
    var document;

    before(function(done) {
        Browser.localhost("localhost", 80);
        Browser.visit("/", function(e, browser) {
            document = browser.window.document;
            done();
        });
    });

    it("should should find first selector match", function() {
        var div = document.createElement("div");
        div.className = "div";
        document.body.appendChild(div);

        assert.equal(querySelector(".div", document), div);
    });
});
