$(document).ready(function () {
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

    $(window).on('load scroll', function () {
        highlightActiveMenuItem();
    });
});
