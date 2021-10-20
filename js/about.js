var bt = document.getElementsByClassName('bt')[0];
var right = document.getElementsByClassName('right')[0];
var shiyong = document.getElementsByClassName('shiyong')[0];
var mianfei = document.getElementsByClassName('mianfei')[0];
var shangwu = document.getElementsByClassName('shangwu')[0];
var u1 = document.getElementsByClassName('u1')[0];
var u2 = document.getElementsByClassName('u2')[0];

shangwu.addEventListener('click', function () {
    shiyong.style.display = 'none';
    right.style.display = 'block';
    this.style.color = 'black';
    mianfei.style.color = 'gray';

})


mianfei.addEventListener('click', function () {
    right.style.display = 'none';
    shiyong.style.display = 'block';
    this.style.color = 'black';
    shangwu.style.color = 'gray';

})

