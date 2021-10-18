// 导航栏分类切换
$(function() {
    $('.title_text li:first').addClass('current').siblings().removeClass('current');
    $('.title_text li').click(function() {
        $(this).addClass('current').siblings().removeClass('current');
    })
})