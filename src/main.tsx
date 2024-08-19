import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./app.tsx"
import { isMswInstalled } from "./mocks/msw/msw-utils.js"
import React from "react"

// const isMockEnabled = import.meta.env.VITE_MOCK_ENABLED

const deferRender = async () => {
  if (import.meta.env.VITE_MOCK_ENABLED === "true") {
    const hasMsw = await isMswInstalled()
    if (!hasMsw) {
      return
    }
    const { getWorker } = await import("./mocks/msw/browser.ts")
    const worker = await getWorker()
    return worker.start()
  }
}

deferRender().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>
  )
})
