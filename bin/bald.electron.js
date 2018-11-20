// bald electron wrapper
// 0.0.1 - 18 nov 2018
// 0.0.2 - 19 nov 2018

const bald_electron = (function () {
  const electron = typeof require === "function" ? require('electron') : { app: { on: function () {} } };
  const path = typeof require === "function" ? require("path") : { join: function () {} };
  let _loaded = false;

  function fireEvent(handler) {
    if (typeof handler === "function") {
      handler();
    }
  }
  function onShowWindow() {
    if (bald_electron.window !== null) {
      if (!_loaded && bald_electron.config !== null) {
        bald_electron.window.setTitle(bald_electron.config.title);
        bald_electron.window.setIcon(path.join(__dirname, bald_electron.config.icon));
        fireEvent(bald_electron.onLoad);
        _loaded = true;
      }
      if (!bald_electron.window.isVisible()) {
        bald_electron.window.show();
      }
    }
  }

  function onEnsureWindow() {
    if (bald_electron.window === null) {
      bald_electron.window = new electron.BrowserWindow({ width: 800, height: 600, show: false });
      bald_electron.window.loadFile("index.html");
      bald_electron.window.on("closed", onWindowClosed);
      bald_electron.window.on("ready-to-show", onShowWindow);
    }
  }

  function onWindowClosed() {
    bald_electron.window = null;
  }

  function onAllWindowsClosed() {
    if (process.platform !== "darwin") {
      electron.app.quit();
    }
  }

  function onWillQuit() {
    fireEvent(bald_electron.onQuit);
  }

  electron.app.on("ready", onEnsureWindow);
  electron.app.on("activate", onEnsureWindow);
  electron.app.on("window-all-closed", onAllWindowsClosed);
  electron.app.on("will-quit", onWillQuit);

  return {
    VERSION: "0.0.2",
    electron: electron,
    ipc: electron.ipcMain,
    window: null,
    config: null,
    onLoad: null,
    onQuit: null,
    setup: (cfg) => {
      bald_electron.config = cfg;
      onShowWindow();
    }
  }
}());

module.exports = bald_electron;
