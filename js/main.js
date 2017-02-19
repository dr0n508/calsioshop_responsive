$(document).ready(function () {

    /****slider home page******/
    $('.home-page-slider').bxSlider({
        infiniteLoop: false,
        hideControlOnEnd: true,
        pager: false
    });
    /******/

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

    $('.select2-size').select2({
        minimumResultsForSearch: Infinity,
        placeholder: "Seleziona una taglia"
    });




});