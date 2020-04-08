/**
 * Hamburger menu: mostrare / nascondere il menu principale (ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).
 * 
*/

var iconHamburger = $(".header-right > a");
var hamburgerMenu = $(".hamburger-menu");
var close = $(".close");

iconHamburger.click(function(){
  
  hamburgerMenu.toggle(800);

  //varie possibilità
  //hamburgerMenu.fadeIn();
  //hamburgerMenu.css("display", "block");
  //hamburgerMenu.show();
  //hamburgerMenu.addClass("active");

});

close.click(function(){
  
  hamburgerMenu.toggle(800);
  
  //varie possibilità
  //hamburgerMenu.fadeOut();
  //hamburgerMenu.css("display", "none");
  //hamburgerMenu.hide();
  //hamburgerMenu.removeClass("active");
});