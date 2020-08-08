
  $(function () {

    $('.ui-slider').uiSlider();
    $('.content1-slider').con1Slider();

    $('.caption-trend').hover(
    function () {
        $('.close').hide();
        $('.trend-list').show();

    });
    $('.caption-close').hover(
        function () {
            $('.trend-list').hide(); //$(this).hide();
            $('.close').show();      
        });

//content2
     $('.undergraduate').hover(
        function () {
            $('.content2-graduate-list').hide();
            $('.content2-trade-list').hide();
            $('.content2-academic-list').hide();
            $('.content2-undergraduate-list').show();

    });
    $('.graduate').hover(
        function () {
            $('.content2-graduate-list').show();
            $('.content2-trade-list').hide();
            $('.content2-academic-list').hide();
            $('.content2-undergraduate-list').hide();
    });
    $('.academic').hover(
        function () {
            $('.content2-graduate-list').hide();
            $('.content2-trade-list').hide();
            $('.content2-academic-list').show();
            $('.content2-undergraduate-list').hide();

    });
    $('.trade').hover(
        function () {
            $('.content2-graduate-list').hide();
            $('.content2-trade-list').show();
            $('.content2-academic-list').hide();
            $('.content2-undergraduate-list').hide();
        });

   
 
 
    
})



//content1-slider切换

$.fn.con1Slider  =function(){
    var wrap =  $('.slider-wrap',this);
    var size = $('.sliderpic',wrap).size()-1;//所有class为banner的大小减一
    
    var goNum = $('.number .num',this);


    var sliderpic_items = $('.sliderpic',wrap);
    var num  = $('.number .num',this);
    var width =  sliderpic_items.eq(0).width();

    var currentIndex = 0;
    var autoMove = true;

    //  1.基本事件
    wrap
    .on('resetFocus',function(evt,isAutoMove){

        // if(autoMove === true &&)
        wrap.animate({left:currentIndex*width*-1});
    })

    .on('gotoFocus',function(eve,index){
        
        wrap.css('left',index*width*-1);
        goNum.removeClass('num-foucs').eq(index).addClass('num-foucs');
             
    })

    .on('nextFocus',function(){

        currentIndex = currentIndex+1 > size ? 0 : currentIndex+1;
        $(this).triggerHandler('resetFocus');

        // 4. 链式调用
        return $(this);

    })
    // .on('prevFocus',function(){
    //     currentIndex = currentIndex-1 < 0 ? size : currentIndex-1;

    //     $(this).triggerHandler('resetFocus');

    // })
    .on('autoMove',function(){
        // 2. 自动处理
        if(autoMove == true){
            setTimeout(function(){
                // 3. 闭包 && 链式调用
                wrap.triggerHandler('nextFocus').triggerHandler('autoMove');
            },10000);
        }
    }).triggerHandler('autoMove');

//事件

    goNum.on('click',function(){

        var index = $(this).index();
      
        wrap.triggerHandler('gotoFocus',index);
        return false;
    });

    //  5.任务 BUG 排除（定时器BUG  ）

}


// 幻灯片切换

$.fn.uiSlider  =function(){
    var wrap =  $('.banner-wrap',this);
    var size = $('.banner',wrap).size()-1;//所有class为banner的大小减一
    

    var goPrev = $('.arrow .left-arrow',this);
    var goNext = $('.arrow .right-arrow',this);

    var banner_items = $('.banner',wrap);
    // var tips  = $('.ui-slider-process .item',this);
    var width =  banner_items.eq(0).width();

    var currentIndex = 0;
    var autoMove = true;

    //  1.基本事件
    wrap
    .on('resetFocus',function(evt,isAutoMove){

        // if(autoMove === true &&)
        wrap.animate({left:currentIndex*width*-1});
    })
    .on('nextFocus',function(){

        currentIndex = currentIndex+1 > size ? 0 : currentIndex+1;
        $(this).triggerHandler('resetFocus');

        // 4. 链式调用
        return $(this);

    })
    .on('prevFocus',function(){
        currentIndex = currentIndex-1 < 0 ? size : currentIndex-1;

        $(this).triggerHandler('resetFocus');

    })
    .on('autoMove',function(){
        // 2. 自动处理
        if(autoMove == true){
            setTimeout(function(){
                // 3. 闭包 && 链式调用
                wrap.triggerHandler('nextFocus').triggerHandler('autoMove');
            },10000);
        }
    }).triggerHandler('autoMove');

//事件
    goPrev.on('click',function(){

        wrap.triggerHandler('prevFocus');
        return false;
    });
    goNext.on('click',function(){
        wrap.triggerHandler('nextFocus');
        return false;
    });

    //  5.任务 BUG 排除（定时器BUG  ）

}



