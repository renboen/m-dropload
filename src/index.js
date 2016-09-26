/*
 下拉OR上拉刷新模块
 * */
(function () {
    "use strict";
    var $that = this,
        $d,
        $b;
    //$lock;
    var $hasTouch = "ontouchstart" in $that;
    var $eventStart = $hasTouch ? "touchstart" : "mousedown",
        $eventEnd = $hasTouch ? "touchend" : "mouseup",
        $eventMove = $hasTouch ? "touchmove" : "mousemove",
        $eventResize = $hasTouch ? "orientationchange" : "resize",
        $eventcancel = $hasTouch ? "touchcancel" : "mouseup";
    var $touch;

    var $utils = {
        prefix : (function () {
            var styles = window.getComputedStyle(document.documentElement, ''),
                pre = (Array.prototype.slice
                        .call(styles)
                        .join('')
                        .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
                )[1],
                dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
            return {
                dom: dom,
                lowercase: pre,
                css: '-' + pre + '-',
                js: pre[0].toUpperCase() + pre.substr(1)
            };
        })();
    };

    $touch = function (element) {
        var $obj = null;
        $d = $that.document;
        $b = $d.body;
        if (element == undefined) {
            $obj = $b;
        } else {
            $obj = element;
        }
        $obj.addEventListener($eventStart, function (e) {
            $touch.start(e);
        });

        $obj.addEventListener($eventEnd, function (e) {
            $touch.end(e);
        });

        $obj.addEventListener($eventMove, function (e) {
            $touch.move(e);
        });
        window.addEventListener($eventResize, function (e) {
            $touch.resize(e);
        });

        $obj.addEventListener($eventcancel, function (e) {

            $touch.cancel(e);
        });
        // 初始化CSS
        return $touch;
    };

    $touch.start = function (e) {
        console.log('touch start');
    };
    $touch.end = function (e) {
        console.log('touch end');

    };
    $touch.move = function (e) {
        console.log('touch move');

    };
    $touch.resize = function (e) {

    };
    $touch.cancel = function (e) {
    };
    $that.Mdropload = function (_el) {
        return new $touch(_el);
    };
}).call(this, document);