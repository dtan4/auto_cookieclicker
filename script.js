function click_golden_cookie() {
    var golden = $('#goldenCookie');

    if (golden.css('display') == 'block') {
        golden.click();
    }
}

function click_cookie() {
    setTimeout(function() {
        click_golden_cookie();

        $('#bigCookie').click();
        click_cookie();
    }, 1);
}

click_cookie();
