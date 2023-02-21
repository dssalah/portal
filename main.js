
$(document).on("ready",function() {
 
    var menuState = 0;
   
      $(".btn-select").on("click",function() {
        if(menuState === 0) {
          $(".mini-menu-options").slideDown("slow");
          menuState = 1;
        } else {
          $(".mini-menu-options").slideUp("slow");
          menuState = 0;
        }
      });
   
    $(".mini-menu-options li").on("click", function() {
      var numHijos = $(this).children().length;
      if(numHijos < 2) {
   
        $(".mini-menu-options").hide("fast");
   
        var texto = $(this).text();
   
        $(".menu-select .menu-actual").text(texto);
      }
      menuState = 0; 
    });
  });