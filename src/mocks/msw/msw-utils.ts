export const isMswInstalled = async (): Promise<boolean> => {
  try {
    await import("msw")
    return true
  } catch (_) {
    return false
  }
}
