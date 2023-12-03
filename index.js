const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');
const navigationList = document.querySelector('.navigation-list');
const navigationItems = document.querySelectorAll('.navigation-item');

function BurgerMenu() {
    burger.classList.toggle('collapsed');
    navigation.classList.toggle('collapsed');
    navigationList.classList.toggle('collapsed');
}
burger.addEventListener('click', BurgerMenu);

function MenuHide() {
  setTimeout(() => {
    burger.classList.remove('collapsed');
    navigation.classList.remove('collapsed');
    navigationList.classList.remove('collapsed');
  }, 1000);  
}
navigationItems.forEach(item => item.addEventListener('click', MenuHide));
