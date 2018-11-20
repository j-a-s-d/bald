module.paths.push(__dirname);
const bald_electron = require("bald.electron");
bald_electron.setup({
    "title": "sample title",
    "icon": "appicon.png"
});
bald_electron.onLoad = () => {
    console.log("hey!");
    bald_electron.ipc.on('log', (event, args) => {
        console.log(args);
    });
    bald_electron.window.webContents.openDevTools();
    bald_electron.window.on("show", () => {
        setTimeout(() => {
          bald_electron.window.webContents.send("log", "ping");
        }, 100);
    });
};
bald_electron.onQuit = () => console.log("bye!");
