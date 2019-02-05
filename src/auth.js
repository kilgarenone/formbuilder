export default function isAuthenticated() {
  const expiresAt = JSON.parse(localStorage.getItem("expires_at"));

  return new Date().getTime() < expiresAt;
}
