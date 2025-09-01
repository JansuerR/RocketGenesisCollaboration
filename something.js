fetch('http://99.79.77.144:3000/api/agents')
.then((response) => response.json())
  .then((data) => console.log(data))

  const movies = async () => {
  const response = await fetch(url)
  const data = await response.json()
  return data
}