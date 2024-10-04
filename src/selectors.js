function select (selector, parent = document) {
    return parent.querySelector(selector);
}

function selectAll (selector, parent = document) {
    var selection = parent.querySelectorAll(selector);
    return  Array.prototype.slice.call(selection);
}

/**
* Selects a single HTML element based on the provided ID selector.
* If the selector does not start with '#', it will be prepended automatically.
* Funciton selectId manage selector with '#' , example: '#element' or 'element'.
*
* @param {string} selector - The ID selector to match.
* @param {Document|Element} [parent=document] - The parent element to search within.
* @throws {Error} If the provided selector is an empty string.
* @returns {Element|null} The matched HTML element, or null if no match is found.
*/
function selectId (selector, parent = document) {
    if(typeof selector === 'string' && selector === "") {
        throw new Error("Invalid selector string void " + selector);
    }
    if(selector.startsWith('#')) {
        selector = selector.slice(1);
    }

    return parent.getElementById(selector);
}

function selectClasses (selector, parent = document) {
    if(typeof selector === 'string' && selector === "") {
        throw new Error("Invalid selector string void " + selector);
    }
    if(selector.startsWith('.')) {
        selector = selector.slice(1);
    }
    let domElements = parent.getElementsByClassName(selector);
    return Array.from(domElements);
}

function selectTag (selector, parent = document) {
    if(typeof selector === 'string' && selector === "") {
        throw new Error("Invalid selector string void " + selector);
    }
    return parent.getElementsByTagName(selector);
}

export { select, selectAll, selectId, selectClasses, selectTag }