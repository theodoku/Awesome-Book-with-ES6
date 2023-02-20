const singlePageApp = () => {
  const navBtn = document.querySelectorAll('.nav_bar a');
  const section = document.querySelectorAll('section');

  navBtn[0].addEventListener('click', () => {
    section[0].style.display = 'flex';
    section[1].style.display = 'none';
    section[2].style.display = 'none';
    navBtn[0].classList.add('green');
    navBtn[1].classList.remove('green');
    navBtn[2].classList.remove('green');
  });
  navBtn[1].addEventListener('click', () => {
    section[0].style.display = 'none';
    section[1].style.display = 'flex';
    section[2].style.display = 'none';
    navBtn[0].classList.remove('green');
    navBtn[1].classList.add('green');
    navBtn[2].classList.remove('green');
  });
  navBtn[2].addEventListener('click', () => {
    section[0].style.display = 'none';
    section[1].style.display = 'none';
    section[2].style.display = 'flex';
    navBtn[0].classList.remove('green');
    navBtn[1].classList.remove('green');
    navBtn[2].classList.add('green');
  });

  // On Page Load, Hide Sections
  window.addEventListener('DOMContentLoaded', () => {
    section[1].style.display = 'none';
    section[2].style.display = 'none';
  });
};

export default singlePageApp;