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
