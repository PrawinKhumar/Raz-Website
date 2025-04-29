// pages/index.js
import Head from 'next/head';
import Link from 'next/link';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>ALT Construction York</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#013958" />
      </Head>

      {/* Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-[#013958]">ALT Construction York</h1>
        <nav className="flex flex-wrap justify-end gap-6 text-[#013958]">
          <Link href="/"><span className="hover:text-[#f37021] transition-all duration-200">Home</span></Link>
          <Link href="/about"><span className="hover:text-[#f37021] transition-all duration-200">About</span></Link>
          <Link href="/services"><span className="hover:text-[#f37021] transition-all duration-200">Services</span></Link>
          <Link href="/projects"><span className="hover:text-[#f37021] transition-all duration-200">Projects</span></Link>
          <Link href="/contact"><span className="hover:text-[#f37021] transition-all duration-200">Contact</span></Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[80vh] flex items-center justify-center text-center text-white"
        style={{ backgroundImage: `url('https://source.unsplash.com/1600x900/?construction')` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Building Your Dreams into Reality
          </h2>
          <p className="text-lg mb-6">
            Reliable builders serving York and surrounding areas
          </p>
          <Link
            href="/contact"
            className="bg-[#013958] hover:bg-[#f37021] text-white py-3 px-6 rounded-full transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Projects Section */}
      <Projects />

      {/* Footer */}
      <Footer />
    </>
  );
}
