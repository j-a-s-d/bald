/* bald framework *\ \* loader module */
!function (w, c, s) {
    function l(f, t, a, e) {
        c.info("loading " + t + "...");
        s.import(f).then(() => {
            var o = w;
            for (var x in a) {
                o = o[a[x]];
            }
            if (typeof o.VERSION === "string") {
                c.info("loaded version " + o.VERSION);
                if (typeof o.run === "function") {
                    o.run();
                    if (typeof e === "function") {
                        e();
                    }
                } else {
                    c.error("Method run missing.");
                }
            } else {
                c.error("Constant VERSION missing.");
            }
        }).catch((e) => { c.error(e); c.error("Could not load " + f); });
    }
    l('framework/bald.core.js', 'bald framework', ['bald'], function () {
        l('bald.app.js', 'bald application', ['bald', 'app']);
    });
}(window, console, SystemJS);