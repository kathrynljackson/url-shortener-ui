export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
}

export const postData = (longURL, theTitle) => {
  return fetch('http://localhost:3001/api/v1/urls', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      long_url: longURL,
      title: theTitle
    })
  })
  .then(response => response.json())
  .catch(err => console.log('ERROR IN POST DATA')) 
}
