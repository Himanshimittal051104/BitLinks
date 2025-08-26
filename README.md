BitLinks — short links, big ease

Hey there! 👋
This is BitLinks, the little URL shortener I whipped up with Next.js. Click it. Shorten it. Track it. Share it. It’s clean, lightweight, and perfect if you're tired of huge unwieldy URLs.

What’s inside?

Shorten URLs and get bite-sized links.

Automatic redirects using Next.js middleware (fast and snappy).

Simple stats—like click count. (You can build more later!)

Custom slugs—make your URL /promo or /go.

Built with Next.js, Tailwind CSS, and MongoDB, so it’s easy to tweak.

Project structure
bitlinks/
├── app/                # Next.js app/router (pages + APIs)
├── components/         # UI building blocks
├── lib/                # Helpers, DB connection, middleware
├── public/             # Static files (icons, etc.)
├── README.md           # (that’s this file—hi!)
├── next.config.mjs
├── tailwind.config.js
├── package.json
└── ...other config files

How to run it locally

Clone the repo (already set to your project):

git clone https://github.com/Himanshimittal051104/BitLinks.git
cd BitLinks


Install everything:

npm install


Create a .env.local file at the project root:

MONGODB_URL=your_mongodb_connection_string
NEXTAUTH_URL=http://localhost:3000        # if you add auth later
NEXTAUTH_SECRET=supersecret               # optional
APP_URL=http://localhost:3000


Start the development server:

npm run dev


Then head to http://localhost:3000 in your browser to check it out. 🎉

Quick API test

Want to test link creation via curl? Here’s how:

curl -X POST http://localhost:3000/api/links \
  -H "Content-Type: application/json" \
  -d '{"url":"https://some-long-site.com/page","slug":"go"}'


You’ll get back something like:

{ "shortUrl": "http://localhost:3000/go" }


Visit that URL to see the redirect. Boom, short link magic.

Screenshots (Coming soon)

Home page with input box and shortened URL result.

Dashboard or API results page (if you add stats).

QR code modal or link detail view (future touch).

Why this project exists

I wanted a shortener that’s self-hosted, lightweight, and easy to modify. Also, it’s a playground for Next.js middleware and edge routing. No shady tracking, no ads—just straight-up functionality.

Want to help?

Bug fixes

Little features like QR codes or analytics

Styling improvements or themes

Anything else you think fits—PRs are welcome!

License

MIT — do whatever you want with it. Just don’t sue me if it breaks. 😉
