
 export function methodToPrototype(eventName) {
    const methodName = `on${eventName.charAt(0).toUpperCase() + eventName.slice(1)}`; // Es: 'click' -> 'onClick'

    
    Object.defineProperty(Element.prototype, methodName, {
        value: function(callback) {
          if (typeof callback !== 'function') {
            throw new Error("Il parametro callback deve essere una funzione.");
          }
      
          this.addEventListener(eventName, callback);
        },
        writable: true,
        configurable: true,
        enumerable: true // Non mostrerà 'onClick' tra le proprietà dell'elemento
    });
}

methodToPrototype('click');
methodToPrototype('dblclick');
methodToPrototype('mousedown');
methodToPrototype('mouseup');
methodToPrototype('mouseenter');
methodToPrototype('mouseleave');
methodToPrototype('mouseout');
methodToPrototype('mouseover');
methodToPrototype('wheel');

// export { onClick,onDblClick,onMouseDown, onMouseUp, onEnter, onLeave, onHover, onOut, onWheel}