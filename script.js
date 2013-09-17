function click_cookie() {
    setTimeout(function() {
        $('#bigCookie').click();
        click_cookie();
    }, 1);
}

click_cookie();
