const generateHTML = (pageName) => {
    return `
    <div><h1>${pageName} blocked</h1></div>
    `;
};

// let site = localStorage.getItem('site');

// switch (window.location.hostname) {
//     case site:
//         document.body.innerHTML = generateHTML(site);
//         break;
// }

chrome.storage.local.get(['myurl']).then((result) => {
    console.log('Value currently is ' + result.myurl);
    switch (window.location.hostname) {
        case result.myurl:
            document.body.innerHTML = generateHTML(result.myurl);
            break;
    }
});
