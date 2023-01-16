/*$(document).ready(function() {
    $('.border-burger').click(fucntion(event){
        $('.border-burger,.header-menu').toggleClass('active');
    });
});*/

document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.burger').classList.toggle('active');
    document.querySelector('.header-menu').classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
    
  });