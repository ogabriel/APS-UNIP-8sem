const currentUrl = new URL(window.location);
const query = new URLSearchParams(currentUrl.search);

if (query) {
  const error = query.get('error');

  if (error) {
    window.alert(error);
  }
}
