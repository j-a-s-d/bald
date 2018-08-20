/* bald framework *\ \* app sample */

// NOTE: your bald application must export a VERSION constant and a run method
bald.app = {
    VERSION: "1.0",
    run: () => {
        $("body").append(bald.dom.writeShorthandElement("div#pnlMain"));
        $("#pnlMain").append("hello world!");
        console.log("test app");
    }
};
