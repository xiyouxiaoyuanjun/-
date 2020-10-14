var btns = document.querySelectorAll('.btn');
var pullDown = document.querySelectorAll('.pull_down');
for (var i = 3; i < btns.length; i++) {
    btns[i].addEventListener('mouseover', function (e) {
        pullDown[this.getAttribute('data-index')].className = 'pull_down_active';
    })
    btns[i].addEventListener('mouseleave', function (e) {
        pullDown[this.getAttribute('data-index')].className = 'pull_down';
    })
}


//轮播图
window.addEventListener('load',function(){
    var arrow_l=document.querySelector('.arrow-l');
    var arrow_r=document.querySelector('.arrow-r');
    var focus=document.querySelector('.focus');
    //鼠标经过显示隐藏左右按钮
    focus.addEventListener('mouseenter',function(){
        arrow_l.style.display='block';
        arrow_r.style.display='block';
    })
    focus.addEventListener('leave',function(){
        arrow_l.style.display='none';
        arrow_r.style.display='none';
    })

})