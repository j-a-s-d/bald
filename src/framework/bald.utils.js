/* bald framework *\ \* utils module */

export default class {

    // GENERAL

    static isUndefined(obj) {
        "use strict";
        return typeof obj === "undefined"; // obj === void 0;
    }

    // OBJECTS

    static getObjectKeys(obj) {
        "use strict";
        return $.map(obj, function(v, k) { return k; });
    }

    static getObjectValues(obj) {
        "use strict";
        return $.map(obj, function(v, k) { return v; });
    }

    static cloneObject(obj) {
        "use strict";
        var copy;
        if (null === obj || "object" !== typeof obj) {
            return obj;
        }
        if (obj instanceof Date) {
            copy = new Date();
            copy.setTime(obj.getTime());
            return copy;
        }
        if (obj instanceof Array) {
            copy = [];
            for (var i = 0, len = obj.length; i < len; i++) {
                copy[i] = this.cloneObject(obj[i]);
            }
            return copy;
        }
        if (obj instanceof Object) {
            copy = {};
            for (var attr in obj) {
                if (obj.hasOwnProperty(attr)) {
                    copy[attr] = this.cloneObject(obj[attr]);
                }
            }
            return copy;
        }
        return null;
    }

    // ARRAYS

    static sortObjectsArrayByField(arr, field, descending) {
        "use strict";
        if (descending) {
            return arr.sort(function (a, b) { return (b[field] > a[field]) ? 1 : ((a[field] > b[field]) ? -1 : 0); });
        } else {
            return arr.sort(function (a, b) { return (a[field] > b[field]) ? 1 : ((b[field] > a[field]) ? -1 : 0); });
        }
    }

    static removeItem(arr, item) {
        "use strict";
        var removeCounter = 0, index;
        for (index = 0; index < arr.length; index++) {
            var n = arr[index];
            if (n === item) {
                arr.splice(index, 1);
                removeCounter++;
                index--;
            }
        }
        return removeCounter;
    }

}