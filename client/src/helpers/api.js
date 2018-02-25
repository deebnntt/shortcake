export function postURL(params) {
  return fetch('/urls', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  })
  .then(res => res.json())
}
