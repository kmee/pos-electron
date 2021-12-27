# POS electron APK

**Clone and run for a quick way to see Electron in action.**

Para executar o projeto faça:

```
# Install dependencies
npm install
# Run the app
npm start
```

Para gerar o APK da aplicação existem algumas maneiras que podem ser visualizadas na documentação oficial do electron:

[Electron Application Distribuition](https://www.electronjs.org/docs/latest/tutorial/application-distribution) 


Para setar as configuração do APP basta criar um arquivo config.json seguindo este exemplo:

```
{
    "instanceParams": {
        "fullscreen": true,
        "menuBarVisible": false,
        "autoHideMenuBar": true,
        "minimizable": false,
        "closable": false,
        "movable": false,
        "webPreferences": {
            "devTools": false,
            "zoomFactor": 1.25,
            "webSecurity": false,
            "allowRunningInsecureContent": true
        }
    },
    "loadUrl": "http://kmee.com.br/pos/web/#action=pos.ui"
}
```

Mais detalhes acesse:

[BrowserWindow Documentation](https://www.electronjs.org/docs/latest/api/browser-window)
