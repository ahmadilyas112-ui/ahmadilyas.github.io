$(document).ready(function() {
    // Smooth scroll for navigation
    $('nav a').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
    });

    // Resume download button click
    $('#downloadResume').click(function() {
        window.location.href = 'path-to-your-resume.pdf';  // Update the path
    });
});
