var scrollThreshold = 30;
var headerOffset = 0;

$("document").ready(function(){
    $("html,body").scrollTop(0);
    
    var prevScrollVal = window.scrollY;
    $("a").click(function(){
        return false;
    });
    setInterval(function(){
        if(window.scrollY<560+350 && window.scrollY<prevScrollVal){
            showHeader();
        }
        // console.log(window.scrollY-prevScrollVal>scrollThreshold)
        if(window.scrollY-prevScrollVal>scrollThreshold){
            //down
            // console.log("down");
            hideHeader();
        }if(window.scrollY-prevScrollVal<-scrollThreshold){
            //up
            // console.log("up");
            showHeader();
        }
        prevScrollVal = window.scrollY;
    },500);
});


var hideHeader = function(){
    $("nav").animate({top:"-400px"},250);
    $(".scaled").animate({top:"-400px"},250);
}

var showHeader = function(){
    $("nav").animate({top:"0px"},250);
    $(".scaled").animate({top:"0px"},250);
}



var scrollToPage = function(page){
    hideHeader();
    var pos;
    var time = 1;
    switch(page){
        case 'app':
            pos = $("#app").offset().top;
        break;

        case 'home':
            pos = 560;
        break;
        case 'mission':
            pos = 1996;
        break;
    }
    if(window.scrollY>pos){
        headerOffset = 375;
    }
    var distance = Math.abs(window.scrollY - pos);


    try{
        $("html ,body").animate({scrollTop:pos-headerOffset},distance,"easeInOutQuart");
    }catch(e){
        console.log("error loading animations");
        $("html ,body").animate({scrollTop:pos-headerOffset},distance);
    }
    headerOffset = 0;
    return false;
}
