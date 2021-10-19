// 导航栏分类切换
$(function() {
    $('.title_text li:first').addClass('current').siblings().removeClass('current');
    $('.title_text li').click(function() {
        $(this).addClass('current').siblings().removeClass('current');
    })
})
var type = document.getElementsByClassName('type');
var type_bot = document.getElementsByClassName('type_bot');
var lis = document.getElementsByClassName('lis');
var main = document.getElementsByClassName('list')[0];
lis[0].onclick = function() {
    main.style.display = 'block';
    for (i = 0; i < type.length; i++) {
        type[i].style.display = 'none';
        type_bot[i].style.display = 'none';
    }
}
lis[1].onclick = function() {
    main.style.display = 'block';
    for (i = 0; i < type.length; i++) {
        type[i].style.display = 'none';
        type_bot[i].style.display = 'none';
    }
}
lis[2].onclick = function() {
    main.style.display = 'none';
    for (i = 0; i < type.length; i++) {
        type[i].style.display = 'block';
        type_bot[i].style.display = 'block';
    }

}

// 渲染数据
$(function() {
    //post 方式提交只需将  get 改为 post
    $.get({
        //对url地址的json文件发起请求 
        url: 'http://192.168.1.29:3000/play/new',
        //请求时携带参数  参数以对象形式定义
        data: {},
        // dataType : 期望的数据类型 如果为json 会将后端返回的json串自动解析
        dataType: 'json',
        //请求成功时 执行函数
        //函数的参数 存储响应体
        //自定义形参res中存储的是响应体
        success: function(res) {
            // console.log(res);
            // this.data.list=res
            var str = '';
            for (var i of res) {
                for (var g of i) {
                    // console.log(g);
                    str += '<li>';

                    str += '<img src="';
                    var imgurl = g.img;
                    // console.log(i[0].img);
                    imgurl = imgurl.replace('localhost', '192.168.1.29');
                    // console.log(imgurl);
                    str += imgurl;
                    str += '" class = "top"/>';
                    // str += '<img src="' + i.img + '" />';
                    str += '<p class="img_text1">' + g.text + '</p>';
                    str += '<p class="img_text2">' + g.description + '</p>';
                    str += '<span class="img_text3">' + g.price + '</span>';
                    str += '<span class="img_text4"><img src="../img/xin.png" class="bot"><i>' + g.like + '</i></span>';
                    str += '<span class="img_text5"><img src="../img/reply.png" class="bot"><i>' + g.words + '</i></span>';

                    str += '</li>';
                }
                // console.log(str);
            }
            $('.list').html(str);
        }
    })
})