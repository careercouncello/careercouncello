setInterval(function() {
    if($(window).width() > 1000) {
        $('.plans').show();
        $('.table').hide();
        $('.counntainer-1').show();
        $('.counntainer-2').hide();
    }
    else if($(window).width() <= 1000) {
        $('.plans').hide();
        $('.table').show();
        $('.counntainer-2').show();
        $('.counntainer-1').hide();
    }
}, 100);