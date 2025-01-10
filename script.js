// cursor
var cursor = document.getElementById('cursor')
document.addEventListener('mousemove', (e) => {
  const height = cursor.offsetHeight;
  const width = cursor.offsetWidth;

  cursor.style.left = (e.pageX - width/2) + 'px';
  cursor.style.top = (e.pageY - height/2) + 'px';
})

// experience 
const boxes = document.querySelectorAll('.content');

function changeOpacity(index) {
  boxes.forEach((box, i) => {
    box.style.opacity = (i === index) ? 1 : 0.4;
  });
}

boxes.forEach(box => {
  box.addEventListener('mouseout', () => {
    boxes.forEach(box => {
      box.style.opacity = 0.7;
    });
  })
});