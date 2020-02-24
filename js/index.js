// Your code goes here
let dragEl;
let dragTarg;

const handleDragStart = (e) => {
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.dropEffect = 'move'
    dragEl = e.currentTarget;
};

const handleDragEnter = (e) => {
    dragTarg = e.currentTarget;
};

const handleDragEnd = (e) => {
    dragTarg.insertAdjacentElement('afterend', dragEl);
};

const contentPick = document.getElementsByClassName('content-pick')[0];
const pickChildren = Array.from(contentPick.children);
pickChildren.forEach((child, i) => {
    if (i == 1) {
        child.children[1].textContent = 'Esse nobis incidunt tenetur deleniti sit cupiditate accusamus ad voluptatum maiores!';
    }
    if (i == 2) {
        child.children[1].textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet odio autem iusto odit nam recusandae soluta accusamus consectetur.'
    }
    child.setAttribute('id', `${i}`);
    child.setAttribute('draggable', true);
    child.addEventListener('dragstart', handleDragStart);
    child.addEventListener('dragenter', handleDragEnter);
    child.addEventListener('dragend', handleDragEnd);
});
