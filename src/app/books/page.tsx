import Image from "next/image";
import Link from "next/link";
import book1 from "@/assets/book1.jpg";
import book2 from "@/assets/book2.jpg";
import book3 from "@/assets/book3.jpg";

export const metadata = {
  title: "Our Books | Menstruation is God’s Design, By Tinuade Adeyanju",
  description:
    "Menstruation is God’s Design is a book that teaches females to embrace what God has created in them. It’s a book that will liberate females from the negative effects of menstruation that might have affected their minds, health and over all well-being. Every lady deserves to live their best lives and so this book is a manual that any lady can pick up to learn more on menstrual health education and also use to educate their girl children.",
};

export default function BooksPage() {
  return (
    <main className="flex-1 mt-[150px]">
      <section className="bg-rose-50/60 border-b border-rose-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-rose-900">
            Menstruation is God’s Design
          </h1>
          <p className="mt-2 text-rose-700">by Tinuade Adeyanju</p>
          <p className="mt-4 max-w-2xl text-gray-700">
            Menstruation is God’s Design is a book that teaches females to embrace what God has created in them. It’s a book that will liberate females from the negative effects of menstruation that might have affected their minds, health and over all well-being. Every lady deserves to live their best lives and so this book is a manual that any lady can pick up to learn more on menstrual health education and also use to educate their girl children.
          </p>
          <div className="mt-6">
            <Link
              href="https://selar.com/8j8269021z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-rose-600 hover:bg-rose-700 text-white px-5 py-2 rounded-md font-medium"
            >
              Buy on Selar
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <h2 className="text-xl font-semibold text-gray-900">Gallery</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <figure className="group rounded-lg overflow-hidden bg-white shadow-sm border transition-shadow duration-300 hover:shadow-lg">
            <Image
              src={book1}
              alt="Menstruation is God’s Design – cover and display"
              className="w-full h-96 object-cover transition-transform duration-300 ease-out group-hover:scale-105 group-hover:rotate-[0.5deg] group-hover:saturate-125"
              placeholder="blur"
              sizes="(max-width: 768px) 150vw, (max-width: 1200px) 80vw, 33vw"
            />
          </figure>
          <figure className="group rounded-lg overflow-hidden bg-white shadow-sm border transition-shadow duration-300 hover:shadow-lg">
            <Image
              src={book2}
              alt="Menstruation is God’s Design – inside pages and details"
              className="w-full h-96 object-cover transition-transform duration-300 ease-out group-hover:scale-105 group-hover:rotate-[0.5deg] group-hover:saturate-125"
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </figure>
          <figure className="group rounded-lg overflow-hidden bg-white shadow-sm border transition-shadow duration-300 hover:shadow-lg">
            <Image
              src={book3}
              alt="Menstruation is God’s Design – presentation and outreach"
              className="w-full h-96 object-cover transition-transform duration-300 ease-out group-hover:scale-105 group-hover:rotate-[0.5deg] group-hover:saturate-125"
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </figure>
        </div>
      </section>
    </main>
  );
}