function click_cookie() {
    setTimeout(function() {
        var golden = $('#goldenCookie');

        if (golden.css('display') == 'block') {
            golden.click();
        }

        $('#bigCookie').click();
        click_cookie();
    }, 1);
}

click_cookie();
