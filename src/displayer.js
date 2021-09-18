document.querySelector('#get').addEventListener('click', async () => {
    const url = document.querySelector('#url').value;
    window.api.getData(url).then(res => {
        document.querySelector("#output").innerHTML = res;
    })
});
