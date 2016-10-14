(function() {
    var nav = {};
    nav.li_left = 0;
    nav.li_width = 0;

    var b_nav_li = document.getElementsByClassName('b_nav_li');
    var ani_red = document.getElementsByClassName('ani_red')[0];
    var b_nav = document.getElementsByClassName('b_nav')[0];

    for (var i = 0; i < b_nav_li.length; i++) {
        (function(i) {
            b_nav_li[i].onmouseover = function(event) {
                var that = this;
                nav.redHoverTime = setTimeout(function() {
                    var the_left = that.offsetLeft;
                    var the_width = that.offsetWidth;
                    ani_red.style.left = the_left + "px";
                    ani_red.style.width = the_width + "px";
                }, 50);
            }
            b_nav_li[i].onmouseout = function() {
                clearTimeout(nav.redHoverTimer);
            }


            b_nav_li[i].onclick = function(event) {
                var b_nav_li_active = document.getElementsByClassName('b_nav_li_active')[0];
                b_nav_li_active.classList.remove('b_nav_li_active');
                init_nav(i);
            }

            b_nav.onmouseleave = function(event) {
                clearTimeout(nav.redHoverTimer);
                ani_red.style.left = nav.li_left + "px";
                ani_red.style.width = nav.li_width + "px";
            }


            b_nav.onmouseenter = function(event) {
                ani_red.style.display = 'block';
            }

            function init_nav(a) {
                var theLi = b_nav_li[a];
                var the_left = theLi.offsetLeft;
                var the_width = theLi.offsetWidth;
                nav.li_left = the_left;
                nav.li_width = the_width;
                theLi.classList.add('b_nav_li_active');
                ani_red.style.left = nav.li_left + "px";
                ani_red.style.width = nav.li_width + "px";
            }


            init_nav(0);
        })(i)
    }


}(window))
