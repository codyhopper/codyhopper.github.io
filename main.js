

let bg = document.querySelector('body');

bg.addEventListener('mousemove', function(event) {
  let x = event.clientX;
  let y = event.clientY;
  bg.style.backgroundColor = 'rgba(' + y + ', calc(255 - ((' + x + ') - (' + y + '))), ' + x + ', .05)';
});
