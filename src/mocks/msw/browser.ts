import { isMswInstalled } from "./msw-utils"

export async function getWorker() {
  const isInstalled = await isMswInstalled()

  if (!isInstalled) {
    throw new Error("MSW package is not installed.")
  }

  try {
    const mswBrowser = await import("msw/browser")

    const { setupWorker } = mswBrowser

    const { getHandlers } = await import("./handlers")
    const handlers = await getHandlers()

    if (!handlers || handlers.length === 0) {
      throw new Error("No valid handlers returned from getHandlers.")
    }

    return setupWorker(...handlers)
  } catch (err) {
    console.error("Failed to import the package or setup worker:", err)
    throw err // Ensure errors are propagated to be handled by the caller
  }
}
