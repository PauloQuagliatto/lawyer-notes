const { app, BrowserWindow, ipcMain, Notification } = require('electron')
let win

const createWindow = () => {
    win = new BrowserWindow({
        width:1270,
        height: 800,
        webPreferences : {
            nodeIntegration: true,
            worldSafeExecuteJavaScript: true,
            toggleDeveloperTools: true,
            contextIsolation: false
        }
    })

    window.loadURL('http://localhost:3000')
}


app.whenReady().then(createWindow)

  
ipcMain.on('app-quit', () => {
    app.quit();
})

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('active', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})