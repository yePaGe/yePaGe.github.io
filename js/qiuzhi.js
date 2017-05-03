$(function(){
    $('#fullpage').fullpage({
        verticalCentered:false,
        anchors:['page1','page2','page3'],
        navigation:true,
        navigationPosition:'right',
        navigationTooltips:['简历首页','资料描述','作品链接'],
        showActiveTooltips:true,
        slidesNavigation:true,
        slidesNavigationPosition:'bottom',
        afterLoad:function (anchorLink,index) {
            switch(index){
                case 1:
                    move(".section1 .jianlishouye").set('top','10%').end();
                    move(".section1 .jianlishouye").scale(1.2).end();
                    move(".section1 .myphoto").set("width","150px").end();
                    move(".section1 .myphoto").set("padding","10px").end();
                    move(".section1 .baseMess").scale(1.2).end();
                    move(".section1 .clouds1_1").scale(1).end();
                    move(".section1 .clouds1_2").scale(1).end();
                    move(".section1 .clouds1_3").scale(1).end();
                    move(".section1 .clouds1_1").set("margin-left","0").end();
                    move(".section1 .clouds1_2").set("margin-left","0").end() ;
                    move(".section1 .clouds1_3").set("left","57%").end() ;
                    move(".section1 .clouds1_1").set("bottom","0").end(function () {
                        move(".section1 .clouds1_2").set("bottom","0").end(function () {
                            move(".section1 .clouds1_3").set("bottom","0").end(function () {
                                move(".section1 .clouds1_4").set("bottom","0").end();
                            });
                        });
                    });
                    break;
                case 2:
                    move(".section2 .jianlimove").set('right','50px').end();
                    move(".section2 .jianlimove").scale(0.6).end();
                    move(".section1 .clouds1_1").set("bottom","-120px").end(function () {
                        move(".section1 .clouds1_1").set("margin-left","30px").end(function () {
                            move(".section1 .clouds1_1").scale(1.4).end(function () {
                                move(".section2 .mess1").set("display","block").end();
                            });
                        });
                    move(".section1 .clouds1_2").set("bottom","-120px").end(function () {
                        move(".section1 .clouds1_2").set("margin-left","30px").end(function () {
                            move(".section1 .clouds1_2").scale(1.4).end(function () {
                                move(".section2 .mess2").set("display","block").end();
                            });
                        });
                    move(".section1 .clouds1_3").set("bottom","-120px").end(function () {
                        move(".section1 .clouds1_3").set("left","56%").end(function () {
                            move(".section1 .clouds1_3").scale(1.4).end(function () {
                                move(".section2 .mess3").set("display","block").end();
                            });
                        });
                    move(".section1 .clouds1_4").set("bottom","-630px").end();
            }); }); });

                    break;

                case 3:
                    move(".section3 #title").scale(0.6).end(function () {
                        move(".section3 #title").set("right","-200px").end();
                    });
                    break;
                default:
                    break;
            }

        },
        onLeave:function (anchorLink,index) {
            switch(index){
                case 1:
                    move(".section1 .jianlishouye").scale(1).end();
                    move(".section1 .myphoto").set("width","0").end();
                    move(".section1 .myphoto").set("padding","0").end();
                    move(".section1 .baseMess").scale(0.8).end();
                    break;
                case 2:
                    move(".section2 .jianlimove").set('right','-400px').end();
                    move(".section2 .jianlimove").scale(1).end();
                    move(".section1 .clouds1_1").scale(1).end();
                    move(".section1 .clouds1_2").scale(1).end();
                    move(".section1 .clouds1_3").scale(1).end();
                    move(".section1 .clouds1_1").set("margin-left","0").end();
                    move(".section1 .clouds1_2").set("margin-left","0").end() ;
                    move(".section1 .clouds1_3").set("left","57%").end() ;
                    move(".section1 .clouds1_1").set("bottom","0").end(function () {
                        move(".section1 .clouds1_2").set("bottom","0").end(function () {
                            move(".section1 .clouds1_3").set("bottom","0").end(function () {
                                move(".section1 .clouds1_4").set("bottom","0").end();
                            });
                        });
                    });
                    move(".section2 .mess1").set("display","none").end();
                    move(".section2 .mess2").set("display","none").end();
                    move(".section2 .mess3").set("display","none").end();

                    break;
                case 3:
                    move(".section3 #title").scale(1).end(function () {
                        move(".section3 #title").set("right","0").end();
                    });
                    break;
                default:
                    break;
            }

        },
        afterRender:function () {

        }
    });

    setTimeout(function (){
        $(".ddd").animate({
            opacity:"0"
        },2000);
    },4800);
    var $pic = $(".pictureShow .pic");
    showPic($pic);
});

function showPic($ele) {
    $ele.hover(function () {
        $(this).css("z-index","99");
        $(this).animate({
            "margin-top":"-50px"
        })
    },function () {
        $(this).css("z-index","50");
        $(this).animate({
            "margin-top":"0"
        })
    })
}
