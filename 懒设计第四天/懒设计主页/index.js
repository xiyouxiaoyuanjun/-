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
    });
    //3.动态生成小圆圈
    var ul=focus.querySelector('ul');
    var ol=focus.querySelector('.circle');
    for(var i=0;i<ul.children.length;i++)
    {
        //创建一个小li
        var li=document.createElement('li');
        li.setAttribute('index',i);       
        //把小li插入到ol里面
        ol.appendChild(li);
        //ol.children[0].className='current';
        li.addEventListener('click',function(){
            for(var i=0;i<ol.children.length;i++){
                ol.children[i].className='';
            }

            this.className='current';
            var index=this.getAttribute('index');
            var focuswidth=focus.offsetWidth;
            console.log(focus.width);
            console.log(index);
            animate(ul,target,callback);
        })
    }

    ol.children[0].className='current';
    

})