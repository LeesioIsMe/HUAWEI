// 头部导航
var cust = document.getElementById("cust-service");
var site = document.getElementById("site-nav");
var mobile = document.getElementById("mobile-version");
var shop = document.getElementById("shop-car");
cust.onmouseover = function(){
    var custHide = document.getElementsByClassName("cust-service-hide")[0];
    custHide.style.display = "block";
    custHide.onmouseleave = function(){
        custHide.style.display = "none";
    }
}
site.onmouseover = function(){
    var siteHide = document.getElementsByClassName("site-nav-hide")[0];
    siteHide.style.display = "block";
    siteHide.onmouseleave = function(){
        siteHide.style.display = "none";
    }
}
mobile.onmouseover = function(){
    var mobileHide = document.getElementsByClassName("mobile-version-hide")[0];
    mobileHide.style.display = "block";
    mobileHide.onmouseleave = function(){
        mobileHide.style.display = "none";
    }
}
shop.onmouseover = function(){
    var shopHide = document.getElementsByClassName("shop-car-hide")[0];
    shopHide.style.display = "block";
    shopHide.onmouseleave = function(){
        shopHide.style.display = "none";
    }
}

// 顶部导航下拉菜单
var navDown = document.getElementsByClassName("nav_down")[0];
console.log(navDown);
var down = document.getElementsByClassName("down");
console.log(down);
var downItems = document.getElementsByClassName("down_items");
console.log(downItems);
for(let i = 0;i<down.length;i++){
    down[i].onmouseover = function(){
        console.log(down[i]);
        navDown.style.display = "block";
        console.log(navDown);
        downItems[i].style.display = "block";
        console.log(downItems[i]);
    }
    down[i].onmouseleave = function(){
        navDown.style.display = "none";
        downItems[i].style.display = "none";
    }
}

// 轮播图
var slider = document.getElementById("slider");
var goto = document.getElementById("goto");
var dotted = document.getElementsByClassName("dotted");
var currentIndex = 0;
for (let i = 0; i < dotted.length; i++) {
    dotted[i].onmouseenter = function () {
        var index = i + 1;
        slider.src = "images/slide" + index + ".jpg";
        goto.href = "http://www.baidu.com";
        console.log(goto.href);
        console.log(slider.src);
        dotted[i].classList.add("current");
        for (var j = 0; j < dotted.length; j++) {
            if (dotted[j].classList.contains("current") && j != i) {
                dotted[j].classList.remove("current");
            }
        }
    }
}
var i = 2;
slider.src = "images/slide" + 1 + ".jpg"
function changePhoto() {
    function changeUrl() {
        slider.src = "images/slide" + i + ".jpg";
        dotted[i - 1].classList.add("current");
        function changeBg() {
            for (var j = 0; j < dotted.length; j++) {
                if (dotted[j].classList.contains("current") && j != i - 1) {
                    dotted[j].classList.remove("current");
                }
            }
        }
        changeBg();
        i++;

    }
    changeUrl();


    if (i == dotted.length + 1) {
        i = 1;
    }

}
setInterval(changePhoto, 5000);

// 内容移动
var next = document.getElementsByClassName("next");
var pre = document.getElementsByClassName("pre");
var move = document.getElementsByClassName("move");

for(let k = 0; k<next.length ;k++){
    var clickRight = 1;
    var clickLeft;
    next[k].onclick = function(){
        for(let i=0;i<move.length;i++){
            // move[i].classList.add("moveright");
            // move[i].classList.remove("moveleft");
            move[i].style.left = "-" + (clickRight * 50) + "px";
        }
        clickLeft = clickRight - 1;
        clickRight++;
        console.log(clickRight);        
        console.log(clickLeft);
    }

    pre[k].onclick = function(){
        for(let i=0;i<move.length;i++){
            // move[i].classList.add("moveleft");
            // move[i].classList.remove("moveright");
            move[i].style.left = "-" + (clickLeft * 50) + "px";
        }
        console.log(clickLeft);
        clickRight = clickLeft + 1;
        clickLeft--;
        
    }
}

