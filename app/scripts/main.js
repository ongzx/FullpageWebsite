/*********************************************************************************/
/* Settings                                                                      */
/*********************************************************************************/

var _settings = {

    // Fullscreen
    useFullScreen: true,

    // Section Transitions
    useSectionTransitions: true,

    // Fade in speed (in ms)
    fadeInSpeed: 1000,

    // poptrox
    poptrox: {
        baseZIndex: 10001,
        useBodyOverflow: false,
        usePopupEasyClose: false,
        overlayColor: '#1f2328',
        overlayOpacity: 0.65,
        usePopupDefaultStyling: false,
        usePopupCaption: true,
        popupLoaderText: '',
        windowMargin: 50,
        usePopupNav: true
    }

};

/*********************************************************************************/
/* Initialize                                                                    */
/*********************************************************************************/
$(document).ready(function () {

    var $window = $(window),
        $body = $('body'),
        $header = $('#top-menu'),
        $all = $body.add($header),
        sectionTransitionState = false;

    $('#fullpage').fullpage({
        menu: '#menu',
        anchors: ['intro', 'whatIdo', 'whoIam', 'mywork', 'contactus'],
        sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C', '#ccc', '#ddd'],
        autoScrolling: false,
        fitToSection: false,
    });

    $all
        .addClass('loading')
        .fadeTo(0, 0.0001);

    window.setTimeout(function () {
        $all
            .fadeTo(_settings.fadeInSpeed, 1, function () {
                $body.removeClass('loading');
                $all.fadeTo(0, 1);
            });
    }, _settings.fadeInSpeed);

});