Tribute Website

A tribute website for Late Chief Israel Gilbert Osuagwu built with Next.js, TypeScript, Tailwind CSS, and Google Sheets. Users can submit tributes via a form, which are stored directly in a Google Sheet using a service account.

Features

Modern Next.js 16 app with server-side rendering and client-side interactions.

Responsive layout using Tailwind CSS.

Tribute submission form with First Name, Last Name, and Message fields.

Data is appended to a Google Sheet via Google Sheets API using a service account.

Error handling and success messages for form submissions.

Easy to deploy to Vercel.



Getting Started
1. Clone the repository
git clone <repository_url>
cd gibertOsuagwu

2. Install dependencies
npm install

3. Set up environment variables

Create a .env.local file in the root directory:

GOOGLE_SHEET_ID=your_google_sheet_id_here


Note: No API key is required. Authentication is handled via the service account JSON.

4. Add the service account JSON

Place the JSON in app/api/creds/service-account.json.

Add it to .gitignore:

app/api/creds/service-account.json


Share your Google Sheet with the service account email (xxxx@project.iam.gserviceaccount.com) with Editor access.

5. Run the development server
npm run dev


Open http://localhost:3000
 to view the website.

Deploying to Vercel

Push your project to GitHub.

Create a new project on Vercel and link it to your repository.

Add the .env variable GOOGLE_SHEET_ID in Vercel project settings.

Upload your service account JSON to Vercel via Environment Variables or Secrets (or include it in your repo locally but still ignored in Git).

Deploy.

The form will now submit tributes directly to your Google Sheet.

Dependencies

Next.js 16 – React framework

TypeScript – Type safety

Tailwind CSS – Styling

Googleapis – Google Sheets API client

Troubleshooting

Error: API keys are not supported

Solution: Make sure you are using a service account for writing to Google Sheets. API keys only support read-only access to public sheets.

Image not loading

Ensure images are in the public/images folder and paths in Image components are correct.

Form submissions fail

Make sure your Google Sheet is shared with the service account email with Editor access.

License

This project is open-source and free to use.