document.addEventListener('DOMContentLoaded', async () => {
    let site = null;
    // onchange
    document.getElementById('blocksite').addEventListener(
        'change',
        function () {
            site = document.getElementById('blocksite').value;
        },
        false
    );

    // onsubmit;
    document.getElementById('addbtn').addEventListener('click', function () {
        // localStorage.setItem('siteUrl', site);
        chrome.storage.local.set({ myurl: site }).then(() => {
            console.log('Value is set to ' + site);
        });
    });

    chrome.storage.local.get(['myurl']).then((result) => {
        console.log('Value currently is ' + result.myurl);

        document.getElementById('res').innerHTML = 'Blocked site: ' + result.myurl;
    });
});
