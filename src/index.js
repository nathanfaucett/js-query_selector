var environment = require("environment"),
    querySelectorAll = require("query_selector_all"),
    getPrototypeOf = require("get_prototype_of");


var document = environment.document,
    querySelector = document.querySelector;


if (!querySelector) {
    querySelector = function querySelector(selectors) {
        var elements = querySelectorAll(selectors, this);
        return (elements.length) ? elements[0] : null;
    };
}

document.querySelector = getPrototypeOf(document).querySelector = querySelector;


module.exports = function(selectors, ownerDocument) {
    ownerDocument = ownerDocument || document;

    if (!ownerDocument.querySelector) {
        ownerDocument.querySelector = querySelector;
    }

    return ownerDocument.querySelector(selectors);
};
