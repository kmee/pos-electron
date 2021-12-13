// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const config = require('electron-json-config').factory('./config.json')
const renderer = require('./renderer.js')

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow(
    config.get("instanceParams")
  )

  mainWindow.removeMenu();
  // and load the index.html of the app.
  //mainWindow.loadFile('index.html')

  // Open the DevTools.
  mainWindow.webContents.openDevTools()
  mainWindow.loadURL(config.get("loadUrl"));
  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
    mainWindow.webContents.on('did-finish-load', () => {
      // mainWindow.webContents.executeJavaScript(`setTimeout(() => $(".header-button").remove(), 15000);`)
      console.log("teste: "+renderer.teste())
      mainWindow.webContents.executeJavaScript(`$('head').append(<script type="text/javascript" src="./renderer.js"></script>)`)
    })
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
