 new WOW().init();
    
    $( ".hoverExpand" ).hover(
    function() {
        if (! $(this).hasClass('collapsing') && 
            $(this).hasClass('collapsed')) {
                $( this ).click();
        }
    }, function() {
        if  (! $(this).hasClass('collapsing') || 
             ! $(this).hasClass('collapsed')) {
                $( this ).click();
        }
    }
);
    $(document).ready(function(){
        $(".dropdown, .btn-group").hover(function()
        {
            var dropdownMenu=$(this).children(".dropdown-menu");
            if(dropdownMenu.is(":visible")){
  dropdownMenu.parent().toggleClass("open");
            }
        });
    });
