var instance = M.Tabs.init(document.querySelector("#material_tabs"));
const getButton = document.querySelector("#get");
const output = document.querySelector("#output");

function statusChange(color) {
    document.querySelector("#status .material-icons").style.textShadow = "0 0 2px " + color;
};

getButton.addEventListener('click', async () => {
    const url = document.querySelector('#url').value;
    output.innerText = "";
    window.api.getData(url).then(res => {
        output.innerText = res;
        statusChange("rgba(0, 170, 0, 0.8)");
    }).catch(e => {
        output.innerText = e;
    })
});
