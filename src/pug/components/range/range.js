const inputLeft = document.querySelector('#input-left');
const inputRight = document.querySelector('#input-right');

const thumbLeft = document.querySelector('.slider > .thumb.left');
const thumbRight = document.querySelector('.slider > .thumb.right');
const range = document.querySelector('.slider > .range');


function setLeftValue() {
    const _this = inputLeft,
            min = parseInt(_this.min),
            max = parseInt(_this.max);
    _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);  
    
    let percent = ((_this.value - min) / (max - min)) * 100;
    thumbLeft.style.left = `${percent}%`;
    range.style.left = `${percent}%`;
}

function setRightValue() {
    
    const _this = inputRight,
            min = parseInt(_this.min),
            max = parseInt(_this.max);
    _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);  
    
    let percent = ((_this.value - min) / (max - min)) * 100;
    console.log(_this.value);
    console.log(percent);
    thumbRight.style.right = (100 - percent) + '%';
    range.style.right = (100 - percent) + '%';
}
inputLeft.addEventListener('input', setLeftValue);
inputRight.addEventListener('input', setRightValue);