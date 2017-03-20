$(function () {
    $('._info_detail ul li div').click(function () {
        window.location.href=$(this).attr('relhtml');
    });
});