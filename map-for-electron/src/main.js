const { app, BrowserWindow } = require("electron");
const path = require("path");

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    
});

//デベロッパーツール
//mainWindow.webContents.openDevTools();

mainWindow.loadFile("index.html");

mainWindow.setMenu(null);

mainWindow.on("closed", () => {
    mainWindow = null;
});
};

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});