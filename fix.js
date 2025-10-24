const oldFetch = window.fetch;
window.fetch = function(url, ...args) {
    if (url.includes('config.php')) {
        url = url.replace('config.php', '/api/config.php');
    }
    if (url.includes('secureproxy')) {
        url = url.replace('secureproxy', '/api/secureproxy.php');
    }
    return oldFetch(url, ...args);
};