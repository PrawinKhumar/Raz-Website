// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-xl font-semibold mb-4">ALT Construction York</h2>
        <p className="mb-2">Building trust. Building quality. Building homes.</p>
        <p className="mb-4">Serving York & surrounding areas</p>
        <div className="flex justify-center space-x-4 text-sm text-gray-300">
          <a href="/" className="hover:text-white transition">Home</a>
          <a href="/about" className="hover:text-white transition">About</a>
          <a href="/services" className="hover:text-white transition">Services</a>
          <a href="/projects" className="hover:text-white transition">Projects</a>
          <a href="/contact" className="hover:text-white transition">Contact</a>
        </div>
        <p className="mt-6 text-xs text-gray-400">&copy; {new Date().getFullYear()} ALT Construction York. All rights reserved.</p>
      </div>
    </footer>
  );
}
