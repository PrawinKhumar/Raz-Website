// components/Services.js
const services = [
  {
    title: 'House Extensions',
    desc: 'High-quality home extensions tailored to your needs.',
    icon: '🏠',
  },
  {
    title: 'Driveways & Patios',
    desc: 'Durable and stylish outdoor spaces.',
    icon: '🚗',
  },
  {
    title: 'Landscaping',
    desc: 'Transform your garden with our landscaping services.',
    icon: '🌿',
  },
  {
    title: 'Renovations',
    desc: 'Interior and exterior renovation experts.',
    icon: '🔧',
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 max-w-6xl mx-auto">
        {services.map((s, index) => (
          <div
            key={index}
            className="bg-white shadow p-6 rounded-lg text-left border hover:shadow-lg transition"
          >
            <div className="text-4xl mb-3">{s.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-blue-700">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
