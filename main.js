var { app, BrowserWindow } = require('electron');
var url = require('url')
var path = require('path')
var server = require('./server.js');

let win = null;

app.on('ready', () => {
    win = new BrowserWindow({
        width: 1540,
        height: 1000,
        webPreferences: {
            nativeWindowOpen: true, // add this
            nodeIntegration: true,
            enableRemoteModule: true
          }
    })
    
    win.setMenuBarVisibility(false)
    win.maximize()
    win.loadURL(url.format({
        pathname: path.join(__dirname,'dist/ayush-shop/index.html'),
        protocol: 'file:', 
        slashes:true
    }));

    // 'dist/ayush-shop/index.html'

    win.on('closed', () => {
     win = null;
    })
 
}) 

app.on( 'window-all-closed', () => {
        if (process.platform != 'darwin') {
        app.quit();
    }

})