
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}



function setCookies() {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XHPQ4R9GM0', {'anonymize_ip': true});

    var s = document.createElement('script');
    s.type = "text/javascript";
    s.async = "true";
    s.src = "https://www.googletagmanager.com/gtag/js?id=G-XHPQ4R9GM0";
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);

    var s = document.createElement('script');
    s.type = "text/javascript";
    s.async = "true";
    s.setAttribute("data-ad-clien", "ca-pub-1873494887039619");
    s.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);
};

if (getCookie("acceptCookies") === "true"){
    setCookies();
}else {
    window.addEventListener("cookieAlertAccept", function() {
        setCookies()
    }) 
}

