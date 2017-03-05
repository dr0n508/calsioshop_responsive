$(document).ready(function () {


    /******slider-product-mobile****/

    $('.bxslider').bxSlider();


    var frontePers = $('.bxslider-fronte').bxSlider();


    $('#collapse-fronte-pers').on('shown.bs.collapse', function () {
        console.log('SHOW #collapse-fronte-pers');
        frontePers.reloadSlider();
    });



    /******slider-recently-viewed-mobile*****/

    $('.slider-recently-viewed').bxSlider({
        slideWidth: 128,
        minSlides: 2,
        maxSlides: 3,
        moveSlides: 1,
        slideMargin: 10,
        pager: false,
        hideControlOnEnd: true,
        infiniteLoop: false,
        nextText: 'Vedi tutto <span class="fa fa-chevron-right" aria-hidden="true"></span>',
        prevText: '<span class="fa fa-chevron-left" aria-hidden="true"></span> Prev',
        nextSelector: '#slider-next',
        prevSelector: '#slider-prev'
    });

    var sliderPopular = $('.slider-popular').bxSlider({
        slideWidth: 128,
        minSlides: 2,
        maxSlides: 3,
        moveSlides: 1,
        slideMargin: 10,
        pager: false,
        hideControlOnEnd: true,
        infiniteLoop: false,
        nextText: 'Vedi tutto <span class="fa fa-chevron-right" aria-hidden="true"></span>',
        prevText: '<span class="fa fa-chevron-left" aria-hidden="true"></span> Prev',
        nextSelector: '#slider-next2',
        prevSelector: '#slider-prev2'
    });

    $('#tabSlider').on('shown.bs.tab', function () {
        sliderPopular.reloadSlider();
    });


    /******end*****/


    /****slider home page******/
    $('#home-page-slider').bxSlider({
        infiniteLoop: true,
        hideControlOnEnd: true,
        pager: false,
        auto: true,
        pause: 3000
    });


    /****SameHeight*categories******/

    // maintainSameHeight($('[data-same-height="category"]'));
    // function maintainSameHeight($list) {
    //     var height = 0;
    //     $list.each(function () {
    //         var $this = $(this);
    //         if ($this.outerHeight() > height) {
    //             height = $this.outerHeight();
    //         }
    //     });
    //     $list.css("height", height);
    // }

    /****SameHeight*categories******/

    // maintainSameHeight($('.goods-information a '));
    // function maintainSameHeight($list) {
    //     var height = 0;
    //     $list.each(function () {
    //         var $this = $(this);
    //         if ($this.outerHeight() > height) {
    //             height = $this.outerHeight();
    //         }
    //     });
    //     $list.css("height", height);
    // }


    /****SameHeight*test******/

    // maintainSameHeight($('[data-same-height="name-price-product"]'));
    // function maintainSameHeight($list) {
    //     var height = 0;
    //     $list.each(function () {
    //         var $this = $(this);
    //         if ($this.outerHeight() > height) {
    //             height = $this.outerHeight();
    //         }
    //     });
    //     $list.css("height", height);
    // }

    /****select2color****/

    function formatColor (state) {
        if (!state.id) { return state.text; }
        var cssStyles = ' style=width:22px;margin-right:5px;height:22px;display:inline-block;vertical-align:middle;background-color:' + state.id;
        var $state = $(
            '<p style="width:100px;padding:5px;"><span' + cssStyles + '></span><span>' + state.text + '</span></p>'
        );
        return $state;
    }
    $('.select2').select2({
        templateResult: formatColor,
        templateSelection: formatColor,
        minimumResultsForSearch: Infinity,
        placeholder: "Seleziona un colore"

    });






    // /*****select2****/
    //
    // $(".select2-select").select2({
    //     minimumResultsForSearch: -1,
    //     placeholder: "Seleziona una marca"
    // }).on("change", function(e) {
    //     $('.filter-personal-prefer').addClass("db");
    // });

    // $('.select2-selection__arrow').append('<i class="fa fa-chevron-down"></i>');



    /**
     * Open filter personal prefer on the mobile
     * get value of clicked inputs
     */

    $( "#select-brand-prefer" ).change(function() {
        $('.filter-personal-prefer').css({'display' : 'block'});
    });



    /****drop-down-languages******/
    function formatState (state) {
        if (!state.id) { return state.text; }
        var $state = $(
            '<span><img src="images/flags/' + state.element.value.toLowerCase() + '.png" class="img-flag" /> ' + state.text + '</span>'
        );
        return $state;
    };

    $(".select2-size").select2({
        minimumResultsForSearch: -1,
        templateSelection: formatState,
        templateResult: formatState
    });

    /*****desktop*slider-price******/

    /**
     * jQuery UI slider widget
     * Drag a handle to select a numeric value.
     */
    $("#slider").slider({
        min: 0,
        max: 1000,
        values: [0, 1000],
        range: true,
        stop: function(event, ui) {
            $("input#minCost").val($("#slider").slider("values",0));
            $("input#maxCost").val($("#slider").slider("values",1));
        },
        slide: function(event, ui){
            $("input#minCost").val($("#slider").slider("values",0));
            $("input#maxCost").val($("#slider").slider("values",1));
        }
    });

    $("input#minCost").change(function(){
        var value1=$("input#minCost").val();
        var value2=$("input#maxCost").val();

        if(parseInt(value1) > parseInt(value2)){
            value1 = value2;
            $("input#minCost").val(value1);
        }
        $("#slider").slider("values",0,value1);
    });

    $("input#maxCost").change(function(){
        var value1=$("input#minCost").val();
        var value2=$("input#maxCost").val();

        if (value2 > 1000) { value2 = 1000; $("input#maxCost").val(1000)}

        if(parseInt(value1) > parseInt(value2)){
            value2 = value1;
            $("input#maxCost").val(value2);
        }
        $("#slider").slider("values",1,value2);
    });

    /*****mobile*slider-price******/

    /**
     * jQuery UI slider widget
     * Drag a handle to select a numeric value.
     */
    $("#slider-mobile").slider({
        min: 0,
        max: 1000,
        values: [0, 1000],
        range: true,
        stop: function(event, ui) {
            $("input#minCost-mobile").val($("#slider-mobile").slider("values",0));
            $("input#maxCost-mobile").val($("#slider-mobile").slider("values",1));
        },
        slide: function(event, ui){
            $("input#minCost-mobile").val($("#slider-mobile").slider("values",0));
            $("input#maxCost-mobile").val($("#slider-mobile").slider("values",1));
        }
    });

    $("input#minCost-mobile").change(function(){
        var value1=$("input#minCost-mobile").val();
        var value2=$("input#maxCost-mobile").val();

        if(parseInt(value1) > parseInt(value2)){
            value1 = value2;
            $("input#minCost-mobile").val(value1);
        }
        $("#slider-mobile").slider("values",0,value1);
    });

    $("input#maxCost-mobile").change(function(){
        var value1=$("input#minCost-mobile").val();
        var value2=$("input#maxCost-mobile").val();

        if (value2 > 1000) { value2 = 1000; $("input#maxCost-mobile").val(1000)}

        if(parseInt(value1) > parseInt(value2)){
            value2 = value1;
            $("input#maxCost-mobile").val(value2);
        }
        $("#slider-mobile").slider("values",1,value2);
    });

    /**
     * Hide/show link to finalisation
     * and add to basket
     */

    $('#collapse-personalisation').on('shown.bs.collapse', function () {
        $('#link-finalise-add2basket').css({'display' : 'block'});
        $('#btn-add2basket').css({'display' : 'none'});
    });
    $('#collapse-personalisation').on('hidden.bs.collapse', function () {
        $('#link-finalise-add2basket').css({'display' : 'none'});
        $('#btn-add2basket').css({'display' : 'block'});
    });



});