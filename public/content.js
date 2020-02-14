/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */

chrome.storage.local.get("REACT_APP_AUTH01_CALLBACK", ({ REACT_APP_AUTH01_CALLBACK }) => {
  if (location.href.includes(REACT_APP_AUTH01_CALLBACK)) {
    const { hash } = location
    if (hash) {
      const callback = new Map(hash.slice(1).split('&').map(item => item.split('=')));

      chrome.storage.local.set({
        'access_token': callback.get('access_token'),
      }, () => {
        // for checking
        console.log('Value is set to');
        console.log(callback);
      });
    }
  }
});