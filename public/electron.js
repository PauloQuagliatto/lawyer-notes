const { app, BrowserWindow } = require('electron')
const path = require('path')
const isDev = require('electron-is-dev')

let win

const createWindow = () => {
    win = new BrowserWindow({
        width:1270,
        height: 800,
        webPreferences : {
            nodeIntegration: true,
            worldSafeExecuteJavaScript: true,
            contextIsolation: false
        }
    })
    win.setMenu(null)
    win.loadURL(
        isDev ? 'http://localhost:3000' : `file:///${path.join(__dirname, '../build/index.html')}`)
}


app.whenReady()
 .then(createWindow)

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