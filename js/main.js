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




    function formatState (state) {
        if (!state.id) { return state.text; }
        var $state = $(
            '<span><img src="images/flags/' + state.element.value.toLowerCase() + '.png" class="img-flag" /> ' + state.text + '</span>'
        );
        return $state;
    };

    $(".select2-size").select2({
        templateResult: formatState
    }).on("change", function(e) {




    });


});