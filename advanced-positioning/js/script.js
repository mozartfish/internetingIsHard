console.log('Hello, World!');

let left = 0;

function frame() {
  const element = document.querySelector('.item-relative');
  left += 2;
  element.style.left = left + 'px';
  if (left >= 300) {
    clearInterval(id);
  }
}

const id = setInterval(frame, 10);
