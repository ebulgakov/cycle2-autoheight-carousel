/*! Cycle2 autoheight carousel plugin; Copyright (c) E.Bulgakov, 2017; */
(function($) {
"use strict";

$.extend($.fn.cycle.defaults, {
    autoHeightCarousel: false,
    autoHeightCarouselSpeed: 250,
    autoHeightCarouselEasing: null
});    

$(document).on( 'cycle-initialized', function( e, opts ) {
    var autoHeight = opts.autoHeightCarousel;

    if ( autoHeight == false )
        return;

    // bind events
    opts.container.on( 'cycle-after', onAfter );
    opts.container.on( 'cycle-slide-added cycle-slide-removed', initAutoHeight );
    opts.container.on( 'cycle-destroyed', onDestroy );

    setTimeout( onResize, 30 );

    function onResize() {
        initAutoHeight( e, opts );
    }
});

function initAutoHeight( e, opts ) {
    var height = 0;
    for (var idx = 0; idx < opts.carouselVisible; idx++) {
        var slideHeight = $( opts.slides[ opts.currSlide + idx ] ).outerHeight();
        height = slideHeight > height ? slideHeight : height;
    }

    opts.container.height( height );
}


function onAfter( e, opts, outgoing, incoming, forward ) {
    var prevSlide = $(incoming);
    var height = 0;

    for (var idx = 0; idx < opts.carouselVisible; idx++) {
        var slideHeight = prevSlide.outerHeight();
        height = slideHeight > height ? slideHeight : height;
        prevSlide = prevSlide.next();
    }
    opts.container.animate( { height: height }, opts.autoHeightCarouselSpeed, opts.autoHeightCarouselEasing );
}

function onDestroy( e, opts ) {
    opts.container.off( 'cycle-slide-added cycle-slide-removed', initAutoHeight );
    opts.container.off( 'cycle-destroyed', onDestroy );
    opts.container.off( 'cycle-after', onAfter );
}

})(jQuery);
