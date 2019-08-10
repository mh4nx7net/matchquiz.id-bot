function final(){
    function jadi(){
        $('.redeem').click();
        setTimeout(function(){
            // $('#popup').modal('hide');
            $('#popup').click();
        },1500);
    }
    function ulang(){
        setInterval(jadi, 3000);
    }
    ulang()
}