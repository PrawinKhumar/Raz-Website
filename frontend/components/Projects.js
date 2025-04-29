// components/Projects.js
const projects = [
  {
    title: 'Modern Patio Design',
    image: 'https://source.unsplash.com/400x300/?patio',
  },
  {
    title: 'Home Extension - York',
    image: 'https://source.unsplash.com/400x300/?house',
  },
  {
    title: 'Landscaping Project',
    image: 'https://source.unsplash.com/400x300/?landscape',
  },
  {
    title: 'Driveway Installation',
    image: 'https://source.unsplash.com/400x300/?driveway',
  },
];

export default function Projects() {
  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">Recent Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-6">
        {projects.map((project, index) => (
          <div key={index} className="rounded shadow hover:shadow-lg transition overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-left">
              <h3 className="font-semibold text-blue-700">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
