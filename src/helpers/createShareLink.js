export const createShareLink = (id) => {
  const originUrl = window.location.origin;
  return `${originUrl}/blog/post/${id}`;
}
