const baseUrl = "/api"

const token = import.meta.env.VITE_TMDB_TOKEN
const bearer = "Bearer " + token

const useMovie = () => {
  const getMovies = async () => {
    const url = `${baseUrl}/movie/popular?language=en-US&page=1`
    const res = await fetch(url, {
      method: "GET",
      credentials: "include",
      headers: {
        Authorization: bearer,
        "Content-Type": "application/json",
      },
    })
    const data = await res.json()
    return data
  }

  return { getMovies }
}

export default useMovie
