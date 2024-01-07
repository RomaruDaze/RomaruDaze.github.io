$(document).ready(function () {
    // Function to highlight the active menu item based on the current section in view
    function highlightActiveMenuItem() {
        var scrollPosition = $(window).scrollTop();

        $('.section').each(function () {
            var target = $(this);
            var targetTop = target.offset().top;
            var targetBottom = targetTop + target.outerHeight();

            if (scrollPosition >= targetTop && scrollPosition < targetBottom) {
                var targetId = target.attr('id');
                $('.menu-item a').removeClass('active');
                $('.menu-item a[href="#' + targetId + '"]').addClass('active');
            }
        });
    }

    // Call the function on page load and scroll
    $(window).on('load scroll', function () {
        highlightActiveMenuItem();
    });
});
