const { remote } = require('@electron/remote')

const loadProxy = async () => {
    //console.log('load proxy');
    await p3x.onenote.wait.domReady()

    const webview = global.p3x.onenote.webview;

//    const session = webview.getWebContents().session;
    const session = remote.webContents.fromId(webview.getWebContentsId()).session
    const proxy = global.p3x.onenote.data.proxy.trim();

    await session.setProxy({
        proxyRules: proxy
    })
    webview.reload();
}

module.exports = loadProxy;
