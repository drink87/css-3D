var objectDiv = document.querySelector('#object');
var backDiv = document.querySelector('#back');
var frontDiv = document.querySelector('#text');
var topDiv = document.querySelector('#top'),
    leftDiv = document.querySelector('#left'),
    rightDiv = document.querySelector('#right');
    bottomDiv = document.querySelector('#bottom');
var rgX = document.querySelector('#range-x'),
    rgY = document.querySelector('#range-y'),
    rgZ = document.querySelector('#range-z'),
    rgP = document.querySelector('#range-p'),
    rgL = document.querySelector('#range-l'),
    rgW = document.querySelector('#range-w'),
    rgH = document.querySelector('#range-h');
var valueX = document.querySelector('.value-x'),
    valueY = document.querySelector('.value-y'),
    valueZ = document.querySelector('.value-z'),
    valueP = document.querySelector('.value-p'),
    valueL = document.querySelector('.value-l'),
    valueW = document.querySelector('.value-w'),
    valueH = document.querySelector('.value-h');
var reset = document.querySelector('#reset');

function stopAnimation() {
    document.getelemen
    // Stop animation.
    backDiv.style.animationIterationCount = '0';
    backDiv.style.webkitAnimationIterationCount = '0';
}

function startAnimation() {
    // Start animation.
    backDiv.style.animationIterationCount = 'infinite';
    backDiv.style.webkitAnimationIterationCount = 'infinite';
}

document.onmousedown = stopAnimation;
document.ontouchstart = stopAnimation;

function resetValue() {
    // Reset value.
    rgX.value = 0,
        rgY.value = 0,
        rgZ.value = 0,
        rgP.value = 500,
        rgL.value = 20,
        rgW.value = 30,
        rgH.value = 3;
    startAnimation();
}

setInterval(function () {
    // Set value.
    valueX.innerText = rgX.value,
        valueY.innerText = rgY.value,
        valueZ.innerText = rgZ.value,
        valueP.innerText = rgP.value,
        valueL.innerText = rgL.value,
        valueW.innerText = rgW.value,
        valueH.innerText = rgH.value;

    // Set rotate x, y, z.
    backDiv.style.transform = 'rotateX(' + rgX.value + 'deg) ' +
        'rotateY(' + rgY.value + 'deg) ' +
        'rotateZ(' + rgZ.value + 'deg)';
    backDiv.style.webkitTransform = 'rotateX(' + rgX.value + 'deg) ' +
        'rotateY(' + rgY.value + 'deg) ' +
        'rotateZ(' + rgZ.value + 'deg)';

    // Set perspective.
    objectDiv.style.perspective = rgP.value;
    objectDiv.style.webkitPerspective = rgP.value;

    // Set length.
    backDiv.style.width = rgL.value + 'rem',
        frontDiv.style.width = rgL.value + 'rem',
        bottomDiv.style.width = rgL.value + 'rem',
        topDiv.style.width = rgL.value + 'rem';

    // Set width.
    topDiv.style.height = rgW.value + 'px',
        bottomDiv.style.height = rgW.value + 'px',
        leftDiv.style.width = rgW.value + 'px',
        rightDiv.style.width = rgW.value + 'px';
    frontDiv.style.transform = 'translateZ(' + rgW.value + 'px)';
    frontDiv.style.webkitTransform = 'translateZ(' + rgW.value + 'px)';
    
    // Set height.
    frontDiv.style.height = rgH.value + 'rem',
        leftDiv.style.height = rgH.value + 'rem',
        rightDiv.style.height = rgH.value + 'rem',
        backDiv.style.height = rgH.value + 'rem';
}, 0);