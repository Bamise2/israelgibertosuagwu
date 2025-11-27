"use client"

import type React from "react"
import { useState } from "react"

export default function TributeForm() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setError("")
  setSubmitted(false)

  if (!firstName.trim() || !lastName.trim() || !message.trim()) {
    setError("Please fill in all fields")
    return
  }

  setLoading(true)

  try {
    const response = await fetch("/api/submit-tribute", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, message }),
    })

    const data = await response.json()
    console.log("API Response:", data, "Status:", response.status) // ← log here

    if (!response.ok) {
      throw new Error(data.error || "Failed to submit tribute")
    }

    setFirstName("")
    setLastName("")
    setMessage("")
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  } catch (err: any) {
    console.error("Submit error:", err)
    setError(err.message || "Failed to submit your tribute. Please try again.")
  } finally {
    setLoading(false)
  }
}


  return (
    <section className="mb-12">
      <div
        className="p-8 rounded-lg"
        style={{ backgroundColor: "#fff9f3", border: "2px solid #d4a574" }}
      >
        <h2 className="text-3xl font-bold mb-6" style={{ color: "#d4a574" }}>
          Share Your Tribute
        </h2>
        <p className="mb-6 text-lg" style={{ color: "#4a3728" }}>
          Please share your memories and kind words about Late Chief Israel Gilbert Osuagwu
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Name */}
          <div>
            <label className="block text-sm font-semibold mb-2" style={{ color: "#2d1810" }}>
              First Name
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your first name"
              className="w-full px-4 py-3 text-base rounded-lg border"
              style={{ borderColor: "#d4a574", backgroundColor: "white", color: "#2d1810" }}
              required
              disabled={loading}
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-semibold mb-2" style={{ color: "#2d1810" }}>
              Last Name
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your last name"
              className="w-full px-4 py-3 text-base rounded-lg border"
              style={{ borderColor: "#d4a574", backgroundColor: "white", color: "#2d1810" }}
              required
              disabled={loading}
            />
          </div>

          {/* Tribute */}
          <div>
            <label className="block text-sm font-semibold mb-2" style={{ color: "#2d1810" }}>
              Your Tribute
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Share your memories, stories, or kind words..."
              rows={6}
              className="w-full px-4 py-3 text-base rounded-lg border"
              style={{ borderColor: "#d4a574", backgroundColor: "white", color: "#2d1810" }}
              required
              disabled={loading}
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 text-lg font-bold rounded-lg transition hover:opacity-90 disabled:opacity-60"
            style={{ backgroundColor: "#d4a574", color: "white" }}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Share Tribute"}
          </button>
        </form>

        {submitted && (
          <div className="mt-4 p-4 rounded-lg text-center" style={{ backgroundColor: "#e8f5e9", color: "#2d6a2e" }}>
            Thank you for sharing your tribute!
          </div>
        )}

        {error && (
          <div className="mt-4 p-4 rounded-lg text-center" style={{ backgroundColor: "#ffebee", color: "#c62828" }}>
            {error}
          </div>
        )}
      </div>
    </section>
  )
}
