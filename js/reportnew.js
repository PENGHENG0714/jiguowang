var zuixin = document.querySelector('.zuixin');
var zuire = document.querySelector('.zuire');
var left = document.querySelector('.left');
var left1 = document.querySelector('.left1');
zuixin.addEventListener('click', function () {

    left.style.display = 'block';
    left1.style.display = 'none';
    this.style.color = 'red';
    this.style.borderBottom = '1px solid red';
    zuire.style.borderBottom = '';
    zuire.style.color = '';






})
zuire.addEventListener('click', function () {
    left.style.display = 'none';
    left1.style.display = 'block';
    this.style.color = 'red';
    this.style.borderBottom = '1px solid red';
    zuixin.style.borderBottom = '';
    zuixin.style.color = '';

})