var $gallery = $(".gallery");
var $btns = $gallery.find(".btns li");
var $boxs = $gallery.find(".boxs div");
var speed = 1000;
var class_name= "on";
var enableClick = true;

$btns.on("click", function(e){
    e.preventDefault();

    var i = $(this).index();

    activation(i, $btns);
    activation(i, $boxs);
    matchHeight(i, $boxs);
})

function activation(index, item){
    item.removeClass("on");
    item.eq(index).addClass("on");
}

function matchHeight(index,item){
    var ht = item.eq(index).height();
    $gallery.animate({height:ht},speed);
}