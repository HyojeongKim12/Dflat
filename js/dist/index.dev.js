"use strict";

function toggle() {
  var toggleBtn = $('.btn_toggle');
  var nav_menu = $('.nav_ul');
  toggleBtn.click(function () {
    nav_menu.slideToggle();
  });
}

$(document).ready(function () {
  toggle();
});