const { app, Menu, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url');
const request = require("request-promise-native");

if (process.platform === "win32") {
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, "..", "node_modules", ".bin", "electron.cmd")
    });
} else if (process.platform === "linux") {
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, "..", "node_modules", ".bin", "electron")
    });
}


let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
        }
    });

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    // 開発ツールを有効化
    mainWindow.webContents.openDevTools({ mode: "detach" });

    Menu.setApplicationMenu(null);

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});

//----------
//ipc
//----------
ipcMain.handle("getData", (e, data) => {
    return request(data);
})
