import Footer from "@/components/Footer";
import Header from "@/components/Header";
import './globals.css';
import Link from "next/link";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='flex flex-col  text-gray-800'>
      {/* Announcement marquee */}
      <Link
        href="https://selar.com/8j8269021z"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Menstruation is God’s Design — Buy on Selar"
        className="block bg-amber-50 text-amber-900 border-b border-amber-200 py-1"
      >
        <div className="overflow-hidden">
          <div className="marquee inline-block whitespace-nowrap px-4 font-medium hover:underline">
            📣 Book Launch: Menstruation is God’s Design — Click to buy on Selar
          </div>
        </div>
      </Link>
      <Header />
        {children}
      <Footer />
      </body>
    </html>
  );
}
