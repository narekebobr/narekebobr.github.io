"use strict";
function YandexMetrikaInformer() {
    var first = document.createElement('a');
    first.setAttribute('href', 'https://metrika.yandex.by/stat/?id=41169954&amp;from=informer');
    first.setAttribute('target', '_blank');
    first.setAttribute('rel', 'nofollow');
    var second = document.createElement('img');
    second.setAttribute('src', 'https://informer.yandex.ru/informer/41169954/3_1_FFFFFFFF_EFEFEFFF_0_pageviews');
    second.setAttribute('width', '88');
    second.setAttribute('height', '31');
    second.setAttribute('alt', 'Яндекс.Метрика');
    second.setAttribute('title', 'Яндекс.Метрика: данные за сегодня (просмотры, визиты и уникальные посетители)');
    second.setAttribute('class', 'ym-advanced-informer');
    second.setAttribute('data-cid', '41169954');
    second.setAttribute('data-lang', 'ru');
    first.appendChild(second);
    document.querySelector('#nrb-counters').appendChild(first);
}
function YandexMetrikaCounter() {
    var yaScript = '(function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter41169954 = new Ya.Metrika({ id:41169954, clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true }); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = "https://mc.yandex.ru/metrika/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks");';
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.text = yaScript;
    document.querySelector('#nrb-counters').appendChild(script);
}
function Openstat() {
    var span = document.createElement('span');
    span.setAttribute('id', 'openstat2348924');
    document.querySelector('#nrb-counters').appendChild(span);
    var osScript = 'var openstat = { counter: 2348924, image: 5083, color: "458efc", next: openstat };(function(d, t, p) {var j = d.createElement(t); j.async = true; j.type = "text/javascript";j.src = ("https:" == p ? "https:" : "http:") + "//openstat.net/cnt.js";var s = d.getElementsByTagName(t)[0]; s.parentNode.insertBefore(j, s);})(document, "script", document.location.protocol);';
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.text = osScript;
    document.querySelector('#nrb-counters').appendChild(script);
}
function RatingMailRuLogo() {
    var first = document.createElement('a');
    first.setAttribute('href', 'https://top.mail.ru/jump?from=2198166');
    var second = document.createElement('img');
    second.setAttribute('src', '//top-fwz1.mail.ru/counter?id=2198166;t=487;l=1');
    second.setAttribute('width', '88');
    second.setAttribute('height', '31');
    second.setAttribute('alt', 'Рейтинг@Mail.ru');
    first.appendChild(second);
    document.querySelector('#nrb-counters').appendChild(first);
}
function RatingMailRuCounter() {
    var maScript = 'var _tmr=window._tmr||(window._tmr=[]);_tmr.push({id:"2198166",type:"pageView",start:(new Date()).getTime()});(function(d,w,id){if(d.getElementById(id))return;var ts=d.createElement("script");ts.type="text/javascript";ts.async=true;ts.id=id;ts.src=(d.location.protocol=="https:"?"https:":"http:")+"//top-fwz1.mail.ru/js/code.js";var f=function(){var s=d.getElementsByTagName("script")[0];s.parentNode.insertBefore(ts,s);};if(w.opera=="[object Opera]"){d.addEventListener("DOMContentLoaded",f,false);}else{f();}})(document, window, "topmailru-code");';
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.text = maScript;
    document.querySelector('#nrb-counters').appendChild(script);
}
function TutBy() {
    var first = document.createElement('a');
    first.setAttribute('href', '//catalog.tut.by/');
    var second = document.createElement('img');
    second.setAttribute('src', '//catalog.tut.by/images/catalog-tut.gif');
    second.setAttribute('width', '88');
    second.setAttribute('height', '31');
    second.setAttribute('alt', 'Каталог TUT.BY');
    first.appendChild(second);
    document.querySelector('#nrb-counters').appendChild(first);
}
function GoogleUA() {
    var GoogleUA = "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', 'UA-53949817-1', 'auto');ga('send', 'pageview');";
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.text = GoogleUA;
    document.querySelector('#nrb-counters').appendChild(script);
}
function VKWidget() {
    var scriptFile = document.createElement('script');
    scriptFile.type = 'text/javascript';
    scriptFile.async = true;
    scriptFile.setAttribute('src', '//vk.com/js/api/openapi.js?146');

    var id = document.createElement('div');
    id.setAttribute('id', 'vk_community_messages');
    document.querySelector('#nrb-counters').appendChild(id);

    var vkScript = 'if(!window.location.host.match(/(localhost|127\.0\.0\.1)/)){VK.Widgets.CommunityMessages("vk_community_messages",146515074,{expandTimeout:"15000",tooltipButtonText:"Есть вопрос?"});}';
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.text = vkScript;


    document.querySelector('#nrb-counters').appendChild(scriptFile);
    setTimeout(function() {
        document.querySelector('#nrb-counters').appendChild(script);
    }, 2000);
}
function MapInit() {
    var iframe = document.createElement('iframe');
    iframe.src = 'https://yandex.ru/map-widget/v1/?um=constructor%3AWvo4lXmCsN9Y9MBKu2bA5yOmve97Ciuj&amp;source=constructor';
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.frameBorder = 0;
    document.querySelector('#map').innerHTML = '';
    document.querySelector('#map').appendChild(iframe);
}
function Booking() {
    var node = document.getElementById('rewbt');
    node.innerHTML = '';
    var randomId = Math.floor(Math.random() * 100000);
    var targetElemId = 'bcom_rwidget_' + randomId;
    var div = document.createElement('div');
    div.setAttribute('id', targetElemId);
    node.appendChild(div);
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = '//www.booking.com/review_widget/by/usadba-na-reke-bobr.ru.html?tmpl=review_widget/review_widget&wid=' + targetElemId + '&wtype=box_big&hotel_id=886374&widget_language=ru';
    node.appendChild(script);
}
function init() {
    YandexMetrikaInformer();
    YandexMetrikaCounter();
    // Openstat();
    // RatingMailRuLogo();
    // RatingMailRuCounter();
    // TutBy();
    GoogleUA();
}
window.onload = function () {
    Booking();
    MapInit();
    init();
};