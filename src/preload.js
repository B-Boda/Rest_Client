const { contextBridge, ipcRenderer } = require("electron")

contextBridge.exposeInMainWorld('api', {
    getData: async (data) => await ipcRenderer.invoke('getData', data)
}
);
