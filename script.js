document.addEventListener("DOMContentLoaded", () => {
  const avatar = document.querySelector('.avatar');

  if (!avatar) {
    return;
  }

  avatar.addEventListener('click', () => {
    avatar.classList.toggle('avatar-active');
  });
});
