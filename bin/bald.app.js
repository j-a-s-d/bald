/* bald framework *\ \* app sample */

bald.electron = typeof require === "function" ? require('electron') : null;
bald.ipc = bald.electron ? bald.electron.ipcRenderer : null;

// NOTE: your bald application must export a VERSION constant and a run method
bald.app = {
    VERSION: "1.1.0",
    run: () => {
        if (bald.ipc) {
            bald.ipc.on('log', (event, args) => {
                console.log(args);
                bald.ipc.send('log', 'pong');
            });
        }
        $("body").append(bald.dom.writeShorthandElement("div#pnlMain"));
        $("#pnlMain").append("hello world!");
        console.log("test app");
    }
};
