import { isMswInstalled } from "./msw-utils"
import popularMovies from "../movie/popular.json"

export async function getHandlers() {
  const isInstalled = await isMswInstalled()
  if (isInstalled) {
    try {
      const { http, HttpResponse } = await import("msw")
      const handlers = [
        http.get("/api/movie/popular?language=en-US&page=1", () => {
          const response = HttpResponse.json(popularMovies)
          return response
        }),
      ]
      return handlers
    } catch (err) {
      console.error("Failed to import the package:", err)
      throw err
    }
  } else {
    console.log("Package is not installed.")
    return []
  }
}
