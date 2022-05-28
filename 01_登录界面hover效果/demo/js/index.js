// 选中container元素
const container = document.querySelector('.container');
// 设置节流阀(鼠标进入如果已经触发进入事件、不必重复触发 )
let flagIn = false,
    flagOut = false;
// 承接创建的span元素
let spanCreat;
// 给container元素添加鼠标进入事件
container.addEventListener('mouseenter', function (e) {
    if (!flagIn) {
        flagIn = true;
        flagOut = false;
        // 获取鼠标在container盒子中的位置(鼠标在视口中的坐标 - 盒子距视口左边的距离)
        let inX = e.clientX - e.target.offsetLeft;
        let inY = e.clientY - e.target.offsetTop;
        //  创建span元素
        // 新span元素放入container，实现颜色的变换
        spanCreat = document.createElement('span');
        // 使动画效果从鼠标处开始展开
        spanCreat.style.left = inX + 'px';
        spanCreat.style.top = inY + 'px';
        container.appendChild(spanCreat);
        // 给span盒子添加定义好的类
        $('.container span').removeClass('out').addClass('in');
    }
});

// 给container元素添加鼠标进入事件
container.addEventListener('mouseleave', function (e) {
    if (!flagOut) {
        flagOut = true;
        // 获取鼠标在container盒子中的位置(鼠标在视口中的坐标 - 盒子距视口左边的距离)
        let outX = e.clientX - e.target.offsetLeft;
        let outY = e.clientY - e.target.offsetTop;
        // 给span盒子添加定义好的类
        $('.container span').removeClass('in').addClass('out');
        // 使动画效果从鼠标处开始展开，此时span身上的类是out
        $('.out').css('left', outX + 'px');
        $('.out').css('top', outY + 'px');

        // 等动画结束后再删除span元素
        setTimeout(() => {
            container.removeChild(spanCreat);
            // 因为已经删除，这段时间还木有out元素存在，所以等待结束在
            flagIn = false;
        }, 500);
    }
});