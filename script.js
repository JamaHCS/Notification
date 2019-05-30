
const $button = document.getElementById('button');
const $notification = document.getElementById('notification');

$button.addEventListener('click', () => {
  const count = Number($notification.getAttribute('data-count')) || 0;
  $notification.setAttribute('data-count', count + 1);
  $notification.classList.add('show-count');
  $notification.classList.add('animated');
});

$notification.addEventListener('animationend', () => {
  $notification.classList.remove('animated');
})
