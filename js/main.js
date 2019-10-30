    
    /**** Smooth scroll *****/
$(document).ready(function() {

    $('.footer__navigation a').smoothScroll({
    });
    
    
    
    
    function closeNav() {
        //document.getElementById("navi-toggle").checked = false; 
        $('#navi-toggle').colseNav(false);
    };
    
    
    
    
    /******* Waypoints -for animated skills bar *********/
    
    $('.skill-box__progress-bar').waypoint(function() {
    $('.skill-box__progress-bar').css({
            animation: "animate-positive 3s",
            opacity: "1"
        });
    }, { offset: '75%'});
    
    
    $('.skill-box1__progress-bar1').waypoint(function() {
    $('.skill-box1__progress-bar1').css({
            animation: "animate-positive1 3s",
            opacity: "1"
        });
    }, { offset: '75%'});
});
    


    


    
    

    
    
    
    
    
    
    
    
    
    
    
    