function toggle() {
    const toggleBtn = $('.btn_toggle');
    const nav_menu = $('.nav_ul');

    toggleBtn.click(function () {
        nav_menu.slideToggle();
    })
}

$(document).ready(function () {
    toggle();
})