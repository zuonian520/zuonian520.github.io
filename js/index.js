
window.onload = function () {
    // 响应式
    $(window).on('resize',function(){
        var width=$(window).width();
        var fontSize=(width/640)*32;
        $('html').css('font-size', fontSize);
    }).trigger('resize');
    var width=$(window).width();
    console.log(width);



    // 轮播图
    var mySwiper = new Swiper ('.swiper-container',{
        // 自动轮播
        autoplay: {
            disableOnInteraction: false,
        },
        // 循环播放
        loop:true,
        // 分页器
        pagination:{
            el:'.swiper-pagination',
        }
    });

    // 点击返回顶部
    $(".top").click(function() {
        $("html,body").animate({scrollTop:0}, 500);
    }); 


}
