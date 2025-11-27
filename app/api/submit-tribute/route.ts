import { google } from "googleapis"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { firstName, lastName, message } = await req.json()

    if (!firstName || !lastName || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    const sheetId = process.env.GOOGLE_SHEET_ID
    const encodedCreds = process.env.GOOGLE_CREDENTIALS

    if (!sheetId || !encodedCreds) {
      return NextResponse.json({ error: "Missing configuration" }, { status: 500 })
    }

    // Decode the Base64 JSON
    const creds = JSON.parse(Buffer.from(encodedCreds, "base64").toString("utf-8"))

    const client = new google.auth.JWT({
      email: creds.client_email,
      key: creds.private_key,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })

    const sheets = google.sheets({ version: "v4", auth: client })

    const values = [[firstName, lastName, message, new Date().toLocaleDateString()]]

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "Sheet1!A:D",
      valueInputOption: "USER_ENTERED",
      requestBody: { values },
    })

    return NextResponse.json({ success: true, message: "Tribute submitted successfully" })
  } catch (err) {
    console.error("Error submitting tribute:", err)
    return NextResponse.json({ error: "Failed to submit tribute" }, { status: 500 })
  }
}
