export async function booksFetch() {
  return await fetch("src/mocks/books.json")
  .then(response => {
    return response.json()
  })
}
