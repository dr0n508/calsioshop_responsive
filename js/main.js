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

    /**
     * Open filter personal prefer on the mobile
     * get value of clicked inputs
     */

    $( "#select-brand-prefer" ).change(function() {
        $('.filter-personal-prefer').css({'display' : 'block'});
    });


    /**
     * Drop-down-languages
     */

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



    /**
     * jQuery UI slider widget
     * Drag a handle to select a numeric value.
     * desktop
     */

    if ($("#slider").length > 0) {
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
    }


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

    /**
     * jQuery UI slider widget
     * Drag a handle to select a numeric value.
     * mobile
     */


    if ($("#slider-mobile").length > 0) {
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
    }

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
        $('.footer-card-product-desktop').css({'borderTop' : 'none', 'padding' : '0'});
    });
    $('#collapse-personalisation').on('hidden.bs.collapse', function () {
        $('#link-finalise-add2basket').css({'display' : 'none'});
        $('#btn-add2basket').css({'display' : 'block'});
        $('.footer-card-product-desktop').css({'borderTop' : 'solid 1px white', 'padding' : '10px 0'});
    });


    /**
     * Custom filter selection
     * get value of clicked inputs
     */
    $('.filter input').click(function (e) {
        var str = $(this).closest('[filterName]');
        var filterName = str.attr('filterName');
        console.log(filterName);
        $('.number-of-filters').html('Filtra (' + $( "input:checked" ).length + ')');
        if ($(this).is(':checked')) {
            // add filter selected items fot appropriate filter
            $( e.target ).closest('.accordion').find('[data-selected-items]').append(
                '<li class="' + $(this).val() + '"><a href="#"><span class="fa fa-times"></span><span>' + $(this).val() + '</span></a></li>'
            );
            // add filter selected items fot global filter view
            if ($('[data-global-filter-settings] li[data-filter=' + filterName + ']').length === 0) {
                $('[data-global-filter-settings]').append(
                    '<li data-filter=' + filterName + '>' + filterName + '&#58;' + '<a class="' + $(this).val() + '" href="#"><span class="fa fa-times"></span><span>' + $(this).val() + '</span></a></li>'
                    // '<li class="' + $(this).val() + '"><a href="#"><span class="fa fa-times"></span><span>' + $(this).val() + '</span></a></li>'
                );
            } else {
                $('[data-global-filter-settings]  li[data-filter=' + filterName + ']').append(
                    // '<li class="' + $(this).val() + '"><a href="#"><span class="fa fa-times"></span><span>' + $(this).val() + '</span></a></li>'
                    '<a class="' + $(this).val() + '" href="#"><span class="fa fa-times"></span><span>' + $(this).val() + '</span></a>'
                );
            }

        } else {
            // remove filter selected items for appropriate filter
            $( e.target ).closest('.accordion').find('[data-selected-items]').find('.' + $(this).val()).remove();
            // remove filter selected items fot global filter view
            $('[data-global-filter-settings]').find('.' + $(this).val()).remove();
        }
    });


    /**
     * Remove selected filter options
     * and uncheck inputs at filter options
     */
    $('[data-selected-items]').click(function (e) {
        var clickedLiClass = $(e.target).closest('li').attr('class');
        //remove filter option from global filter list
        $('[data-global-filter-settings]').find('.' + clickedLiClass).remove();
        // remove filter option from filter option list
        $(e.target).closest('li').remove();
        // uncheck filter option
        $(this).parent().parent().next().find( 'input[id^='  + clickedLiClass + ']').attr('checked', false);
        $('.number-of-filters').html('Filtra (' + $( "input:checked" ).length + ')');
    });

    $('[data-global-filter-settings]').click(function (e) {
        var clickedLiClass = $(e.target).closest('a').attr('class');
        if ($(e.target).closest('li').children().length === 1) {
            $(e.target).closest('li').remove();
        }
        $("div[id^='filterAccordion']").find('[data-selected-items]').find('.' + clickedLiClass).remove();
        $('[data-global-filter-settings]').find('.' + clickedLiClass).remove();
        $("div[id^='filterAccordion']").find('input[id^='  + clickedLiClass + ']').attr('checked', false);
        $('.number-of-filters').html('Filtra (' + $( "input:checked" ).length + ')');
    });

    /**
     * Reset filter
     */
    $('[data-filter-reset]').click(function (e) {
        $('[data-selected-items]').empty();
        $('[data-global-filter-settings]').text('Filtrare per: ');
        $('.number-of-filters').html('Filtra (0)');
        // $(document).trigger('testEvent', [1011]);
    });


});