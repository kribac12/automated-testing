export async function complexRemoteCall() {
  const endpoints = [fetch("https://a.api.com"), fetch("https://b.api.com"), fetch("https://c.api.com")];

  return await Promise.all(endpoints);
}
