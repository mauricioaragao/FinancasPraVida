// Função para exibir/ocultar o menu em dispositivos móveis
const menuBtn = document.querySelector('.menu-btn');
const navList = document.querySelector('nav ul');

let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    navList.classList.add('show');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    navList.classList.remove('show');
    menuOpen = false;
  }
});

// Função para exibir um modal com o formulário de contato
const contactBtn = document.querySelector('.btn-primary');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-modal');

contactBtn.addEventListener('click', () => {
  modal.classList.add('show');
});

closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('show');
});

// Função para validar o formulário de contato
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
  const messageInput = document.querySelector('#message');

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

  if (nameValue === '') {
    setErrorFor(nameInput, 'O campo nome não pode estar vazio');
  } else {
    setSuccessFor(nameInput);
  }

  if (emailValue === '') {
    setErrorFor(emailInput, 'O campo e-mail não pode estar vazio');
  } else if (!isValidEmail(emailValue)) {
    setErrorFor(emailInput, 'E-mail inválido');
  } else {
    setSuccessFor(emailInput);
  }

  if (messageValue === '') {
    setErrorFor(messageInput, 'O campo mensagem não pode estar vazio');
  } else {
    setSuccessFor(messageInput);
  }
});

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const errorMsg = formControl.querySelector('.error-msg');
  input.classList.add('error');
  errorMsg.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  input.classList.remove('error');
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Função para rolar a página suavemente ao clicar nos links do menu
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const href = link.getAttribute('href');
    const target = document.querySelector(href);
    const offsetTop = target.offsetTop;

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  });
});

// Função para exibir uma mensagem de "scroll to top" quando o usuário rolar a página para baixo
const scrollToTopBtn = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});