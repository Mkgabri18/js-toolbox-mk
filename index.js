import ClassList from './src/classList.js';
// import { onEvent } from './listenerEvent.js';
import { selectId } from './src/selectors.js';
import { local, session } from './src/storage.js'

let $button1 = selectId('addColor');
let $button2 = selectId('toggleColor');
let $button3 = selectId('removeColor')
let $button4 = selectId('replacecolor')
// onEvent($button, 'click', changecolor);
$button1.onClick(addChangecolor);
$button2.onClick(toggleChangecolor);
$button3.onClick(removeChangecolor);
$button4.onClick(replacecolor);

function addChangecolor() {
    const $desc = selectId('description');
    if ($desc) {
        ClassList($desc)
            .add('color-red')
            .add('font-xl')
    }
}

function toggleChangecolor() {
    const $desc = selectId('description');
    if ($desc) {
        ClassList($desc)
            .toggle('color-red')
    }
}

function removeChangecolor() {
    const $desc = selectId('description');
    if ($desc) {
        ClassList($desc)
            .remove('color-red')
            .remove('font-xl')
    }
}

function replacecolor() {
    const $desc = selectId('description');
    if ($desc) {
        ClassList($desc)
            .replace('color-red', 'color-blue')
    }
}

// Try localStorage tility funciton
local.add('developer', {name: 'Gabriel', age: 33})
session.add('salary', 46000)

const $span = selectId('dev')

if ($span) {
    const developer = local.get('developer')
    const salary = session.get('salary')
    $span.textContent = `
        Nome: ${developer.name},
        Age: ${developer.age},
        Salary: ${salary}
    `
}