$('#top').click(function() {            // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                   // Scroll to top of body
    }, 0);
});

window.addEventListener('load', function()
{
window.scrollTo(0,0);
}, false;
