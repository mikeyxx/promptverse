import "@styles/globals.css";
import Head from "next/head";

import Nav from "@components/Nav";
import Provider from "@components/Provider";

// Set Metadata of our application for SEO
export const metadata = {
  title: "PromptVerse",
  description: "Discover & Share AI Prompts",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="icon"
          type="image/svg+xml"
          href="/public/assets/images/logo.svg"
        />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>

      <body>
        <Provider>
          <div className="main">
            <div className="gradient" /> {/* To change the background */}
          </div>

          <main className="app">
            {<Nav />}
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}

export default RootLayout;
