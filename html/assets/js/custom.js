
$(function(){            
    $(".selection-1").select2({
        minimumResultsForSearch: 20,
        dropdownParent: $('#dropDownSelect1')
    });            
    
    $(".selection-2").select2({
        minimumResultsForSearch: 20,
        dropdownParent: $('#dropDownSelect2')
    });
    
    var react_components_container = document.getElementById('react_dom_container');
    var desktop_menu = $(react_components_container).find(".container-menu-header");
    console.log(desktop_menu.length,89);
    var hidden = desktop_menu.is(':hidden');
    if(!hidden)
    {
        $('.compensation-container-menu-header').height($('.container-menu-header').height());
        $('.compensation-container-menu-header').show();             
    }
    else
    {
        $('.compensation-container-menu-header').hide();
    }
    var wh = $(window).height();
    var hh = $('.header-main').height();
    var fh = $('.footer-main').height();
    var mh = wh - hh - fh;
    //console.log(wh,hh,fh,mh);
    $('.page-wrapper-main').css('min-height',mh-10);    

});