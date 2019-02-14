export default function isAuthenticated() {
  const expiresAt = JSON.parse(localStorage.getItem("expires_at"));

  return new Date().getTime() < expiresAt;
}

// TODO: call this function when user is authenticated
export function scheduleTokenRenewal() {
  const delay = localStorage.getItem("expires_at") - Date.now();
  if (delay > 0) {
    // setTimeout(() => renewToken(), delay);
  }
}
