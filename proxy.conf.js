/**
 * https://github.com/chimurai/http-proxy-middleware#options
 */
function proxy_cookie_path(oldCookie) {
    var oldCookieItems = oldCookie[0].split(';')
    var newCookie = '';

    for (var i = 0; i < oldCookieItems.length; ++i) {
        if (newCookie.length > 0)
            newCookie += ';'
        if (oldCookieItems[i].indexOf('Path=') >= 0)
            newCookie += 'Path=/'
        else
            newCookie += oldCookieItems[i];
    }
    return newCookie;
}

module.exports = {
    "/nulidexiaoma": {
        "target": "http://localhost:8079",
        "secure": false
    }

}
