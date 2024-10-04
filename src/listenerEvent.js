

function isValidElement($elem) {
    if (!($elem instanceof Element)) {
        throw new Error("Il parametro $elem deve essere un elemento DOM.");
    } 
    return true;
}

function isValidEvent(eventName) {
    if(typeof document.body[`on${eventName}`] === "undefined") {
        throw new Error(`L'evento "${$event}" non è un evento DOM valido.`);
    }
    return true
}

function isValidCallback($callback) {
    if (typeof $callback !== 'function') {
        throw new Error("Il parametro $callback deve essere una funzione.");
    }
    return true;
}


function onEvent($elem, $event, $callback, $capture) {
    if(isValidElement($elem) && isValidEvent($event) && isValidCallback($callback)) {
        $elem.addEventListener($event, $callback, $capture);
    }
}

function offEvent($elem, $event, $callback, $capture) {
    if(isValidElement($elem) && isValidEvent($event) && isValidCallback($callback)) {
        $elem.removeEventListener($event, $callback, $capture);
    }
}

export { onEvent, offEvent }