$(document).ready(function () {
    $('#neutrovis').click(function () {
        console.log(12313);
        $("#img-neutrovis-1").trigger("click");
        $('[data-fancybox="neutrovis"]').fancybox({
            loop: true,
            autoPlay: true
        });
    });
    $('#iga').click(function () {
        console.log(12313);
        $("#img-iga-1").trigger("click");
        $('[data-fancybox="iga"]').fancybox({
            loop: true,
            autoPlay: true
        });
    });
})