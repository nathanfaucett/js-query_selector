var environment = require("environment"),
    querySelectorAll = require("query_selector_all"),
    getPrototypeOf = require("get_prototype_of");


var document = environment.document,
    nativeQuerySelector = document.querySelector;


module.exports = querySelector;


function querySelector(selectors, ownerDocument) {
    ownerDocument = ownerDocument || document;

    if (!ownerDocument.querySelector) {
        ownerDocument.querySelector = nativeQuerySelector;
    }

    return ownerDocument.querySelector(selectors);
}

if (!nativeQuerySelector) {
    nativeQuerySelector = function querySelector(selectors) {
        var elements = querySelectorAll(selectors, this);
        return (elements.length) ? elements[0] : null;
    };
}

document.querySelector = getPrototypeOf(document).querySelector = nativeQuerySelector;
