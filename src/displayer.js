const getButton = document.querySelector("#get");
const output = document.querySelector("#output");

getButton.addEventListener('click', async () => {
    const url = document.querySelector('#url').value;
    window.api.getData(url).then(res => {
        output.innerText = res;
    }).catch(e => {
        output.innerText = e;
    })
});
