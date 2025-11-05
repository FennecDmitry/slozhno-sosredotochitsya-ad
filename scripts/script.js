const themeButtons = document.querySelectorAll('.header__theme-menu-button');

themeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    themeButtons.forEach((btn) => {
      btn.classList.remove('header__theme-menu-button_active');
      btn.removeAttribute('disabled');
    });
    
    if (button.classList.contains('header__theme-menu-button_type_light')) {
      changeTheme('light');
    } else if (button.classList.contains('header__theme-menu-button_type_dark')) {
      changeTheme('dark');
    } else {
      changeTheme('auto');
    }
    
    button.classList.add('header__theme-menu-button_active');
    button.setAttribute('disabled', true);
  });
});

function changeTheme(theme) {
  document.body.className = 'page';
  
  if (theme !== 'auto') {
    document.body.classList.add(`theme-${theme}`);
  }
  
  localStorage.setItem('theme', theme);
}

function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme) {
    changeTheme(savedTheme);
    
    themeButtons.forEach((btn) => {
      btn.classList.remove('header__theme-menu-button_active');
      btn.removeAttribute('disabled');
    });
    
    const activeButton = document.querySelector(`.header__theme-menu-button_type_${savedTheme}`);
    if (activeButton) {
      activeButton.classList.add('header__theme-menu-button_active');
      activeButton.setAttribute('disabled', true);
    }
  }
}

initTheme();