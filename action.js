const toggleBtn = document.querySelector('.menu_icon');
    const toggleBtnIcon = document.querySelector('.menu_icon img');
    const dropDownMenu = document.querySelector('.dropdown_menu');

    toggleBtn.onclick = function () {
      dropDownMenu.classList.toggle('open')
    };