/* bald framework *\ \* dom module */

export default class {

    static parseShorthandNotation(str) {
        "use strict";
        if (!str) {
            return null;
        }
        var result = { tag: 'div', id: '', classes: [] };
        var a = str.replace(/\./g, ' ').split(' ');
        result.classes = a.slice(1);
        a = a[0];
        if (a !== "") {
            if (a.indexOf('#') === -1) {
                result.tag = a;
            } else {
                if (a.indexOf('#') > 0) {
                    result.tag = a.substr(0, a.indexOf('#'));
                }
                result.id = a.substr(a.indexOf('#') + 1);
            }
        }
        return result;
    }

    static writeShorthandElement(shorthandNotation, content, attributes) {
        "use strict";
        var parsed = this.parseShorthandNotation(shorthandNotation);
        var attrs = "";
        if (attributes) {
            $.each(attributes, function(key, value) {
                attrs += " " + key + "=\'" + value + "\'";
            });
        }
        return "<" + parsed.tag + (!!parsed.id.trim() ? " id='" + parsed.id + "'" : "") +
            (parsed.classes.length ? " class='" + parsed.classes.join(" ") + "'" : "") +
            attrs +
            ">" + (content ? content : "") + "</" + parsed.tag + ">";
    }
        
    static includeScript(url, callback) {
        "use strict";
        if (!url || (typeof url !== "string")) {
            return;
        }
        var script = document.createElement("script");
        if (typeof document.attachEvent === "object") {
            script.onreadystatechange = function() {
                if (script.readyState === "loaded") {
                    if (callback) {
                        callback();
                    }
                }
            };
        } else {
            script.onload = function() {
                if (callback) {
                    callback();
                }
            };
        }
        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
    }

    static includeStyle(url) {
        "use strict";
        if (!url || (typeof url !== "string")) {
            return;
        }
        var link = document.createElement("link");
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("type", "text/css");
        link.setAttribute("href", url);
        document.getElementsByTagName("head")[0].appendChild(link);
    }

    static getUniqueId(prefix) {
        "use strict";
        var result, p = prefix ? prefix : "_";
        do {
            result = p + ("" + Math.random()).substring(2);
        } while (document.getElementById(result) !== null);
        return result;
    }

}
