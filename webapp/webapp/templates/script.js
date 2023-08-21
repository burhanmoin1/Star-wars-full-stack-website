$(document).ready(function() {
    var popupThreshold = $('.scrolling-text').offset().top; // Set the threshold for when to show the popup

    $(window).scroll(function() {
        if ($(this).scrollTop() >= popupThreshold) {
            $('#navbarPopup').modal('show'); // Show the modal popup
        }
    });
});
