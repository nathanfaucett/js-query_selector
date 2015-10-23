var tape = require("tape"),
    querySelector = require("..");


tape("querySelector(selector, [ownerDocument : Document])", function(assert) {
    var div = document.createElement("div");

    div.className = "div";
    document.body.appendChild(div);

    assert.equal(querySelector(".div", document), div, "should should find first selector match");
    assert.end();
});
