/* bald framework *\ \* time module */

export default class {

    // FUNCTIONS

    static getDateAsYYYYMMDD(date) {
        "use strict";
        var d = date ? date : new window.Date();
        var mm = (d.getMonth() + 1).toString();
        var dd  = d.getDate().toString();
        return d.getFullYear().toString() + "-" + (mm[1] ? mm: "0" + mm[0]) + "-" + (dd[1] ? dd : "0" + dd[0]);
    }

    static getTimeAsHHMM(time) {
        "use strict";
        var t = time ? time : new window.Date();
        var hh = t.getHours();
        var mm = t.getMinutes();
        return ((hh < 10 ? '0' : '') + hh) + ":" + ((mm < 10 ? '0' : '') + mm);
    }

    static getDateTimeAsYYYYMMDDHHMMSS(date) {
        "use strict";
        var dt = date ? date : new window.Date();
        var m = (dt.getMonth() + 1).toString();
        var d  = dt.getDate().toString();
        var hh = dt.getHours();
        var mm = dt.getMinutes();
        var ss = dt.getSeconds();
        return dt.getFullYear().toString() + "-" + (m[1] ? m: "0" + m[0]) + "-" + (d[1] ? d : "0" + d[0]) + " " +
            ((hh < 10 ? '0' : '') + hh) + ":" + ((mm < 10 ? '0' : '') + mm) + ":" + ((ss < 10 ? '0' : '') + ss);
    }

}
