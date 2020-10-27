/* init() implementation */

function init() {


    /* Replace the class megamenu-local with hidden-megamenu-local in the HTML in order to test the JS */

$('li.local').hover(
    function(){ $('.hidden-megamenu-local').addClass('megamenu-local') },
    function(){ $('.hidden-megamenu-local').removeClass('megamenu-local') }
 )
 
 $('.megamenu-local').hover(
    function(){ $('.hidden-megamenu-local').addClass('megamenu-local') },
    function(){ $('.hidden-megamenu-local').removeClass('megamenu-local') }
 )

}

window.addEventListener('load',init);




