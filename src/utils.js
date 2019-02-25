export function randomString(length = 16) {
  const charset =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz-._~";
  let result = "";

  while (length > 0) {
    const bytes = new Uint8Array(16);
    const random = (window.crypto || window.msCrypto).getRandomValues(bytes);

    // eslint-disable-next-line no-loop-func
    random.forEach(c => {
      if (length === 0) {
        return;
      }
      if (c < charset.length) {
        result += charset[c];
        length--;
      }
    });
  }
  return result;
}

export function setItemInLocalStorage(name, item) {
  window.localStorage.setItem(name, item);
}

export function getCookie(name) {
  return document.cookie.split("; ").reduce((r, v) => {
    const parts = v.split("=");
    return parts[0] === name ? decodeURIComponent(parts[1]) : r;
  }, "");
}

export function parseUrlHash(urlHash) {
  const hash = urlHash.substr(1);

  return hash.split("&").reduce((acc, item) => {
    const [key, value] = item.split("=");
    acc[key] = value;
    return acc;
  }, {});
}

export function toHexCode(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    result += str.charCodeAt(i).toString(16);
  }

  return result;
}
