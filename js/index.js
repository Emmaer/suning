$(function(){
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 0,
        loop: true,
        autoplay: 2500,
         autoplayDisableOnInteraction: false,
        centeredSlides: true
    });
    //时间
    var times=document.querySelector('.times');
    var nextTime=new Date(2016,6,1,0,0,0);//获取自定义的时间
    getTime(nextTime);
    function getTime(nextTime){
        time();
        setInterval(time,1000)
        function time(){
        var nowTime=new Date();//获取当前的时间
        var nowC=nowTime.getTime();//转化为时间戳
        var nextC=nextTime.getTime();//转化为时间戳
        var diffTime=(nextC-nowC)/1000;//时间的差值
        var D=parseInt(diffTime/(60*60*24)) ;//获取天数
        var H=parseInt((diffTime%(60*60*24))/(60*60));//后去小时
        var m=parseInt((diffTime%(60*60*24))%(60*60)/60);//获取分钟
        var s=parseInt((diffTime%(60*60*24))%(60*60)%60);//获取秒数
        times.innerHTML=6+'月专场'+' '+D+'天'+H+'时'+m+'分'+s+'秒';
    }
    }
})