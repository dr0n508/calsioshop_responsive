$(document).ready(function () {
    $('.home-page-slider').bxSlider({
        infiniteLoop: false,
        hideControlOnEnd: true,
        pager: false
    });


    $( "#ddd" ).click(function() {
        // $(".list-group-item, .list-group-2-level").addClass("in");
    });

    maintainSameHeight($('[data-same-height="category"]'));

    function maintainSameHeight($list) {
        var height = 0;

        $list.each(function () {
            var $this = $(this);
            if ($this.outerHeight() > height) {
                height = $this.outerHeight();
            }
        });

        $list.css("height", height);
    }




});