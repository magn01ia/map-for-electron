# map-for-electron
map系のページをelectronで動かす時用メモ  

## electronで動かす  
- package.jsonの作成、プロジェクトフォルダ内で  
npm init -y  

- electoronをローカルインストール  
npm install -D electron

- ディレクトリ構成

```
pro  
 |-node_nodules  
 |-src  
    |-main.js(つくる)  
    |-package.json(つくる)  
    |-index.html(map本体)  
    |-script.js(map本体)  
    |-stylesheet.css(map本体)    
```

- package.json
```
{
 "main": "main.js"
 }
```

- main.js
```
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
```
- electron実行
```
npx electron ./src
```

## Win向けパッケージビルド  
- electron-packagerのローカルインストール  
```
npm install -D electron-packager
```

- ビルド
```
npx electron-packager src Map --platform=win32 --arch=x64 --overwrite
```
