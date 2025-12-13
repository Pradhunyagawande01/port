import React from 'react';
import { Code2, Palette, Zap, Award } from 'lucide-react';

export default function About() {
  const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'] },
    { category: 'Tools & More', items: ['Git', 'Webpack', 'REST APIs', 'Figma', 'VS Code', 'npm'] },
  ];

  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing readable, maintainable, and well-structured code is my priority.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful interfaces that users actually enjoy using.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing load times and runtime performance for smooth experiences.',
    },
    {
      icon: Award,
      title: 'Problem Solving',
      description: 'Breaking down complex challenges into elegant solutions.',
    },
  ];

  return (
    <div className="text-black">
      {/* Hero Section */}
      <section id="about" className="px-6 sm:px-12 lg:px-20 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Main About */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold">About me</h1>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
              I&apos;m a passionate front-end developer with a keen eye for detail and a love for creating
              seamless digital experiences. With expertise in modern web technologies, I transform ideas
              into interactive, performant applications that users love.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
              When I&apos;m not coding, you can find me exploring new design trends, contributing to open source,
              or diving deep into web performance optimization.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map(({ icon: Icon, title, description }, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-gray-200 bg-white hover:shadow-lg transition">
                <Icon className="w-8 h-8 text-green-500 mb-3" />
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 sm:px-12 lg:px-20 py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Skills & Technologies</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {skills.map(({ category, items }, idx) => (
              <div key={idx}>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium hover:border-green-500 hover:text-green-600 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="px-6 sm:px-12 lg:px-20 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Experience</h2>

          <div className="space-y-8">
            {/* Experience Card 1 */}
            <div className="border-l-2 border-green-500 pl-6 py-2">
              <h3 className="text-xl font-semibold">Senior Front-end Developer</h3>
              <p className="text-green-600 font-medium">Company Name • 2023 - Present</p>
              <p className="text-gray-600 mt-2">
                Leading frontend development, mentoring junior developers, and architecting scalable UI components.
              </p>
            </div>

            {/* Experience Card 2 */}
            <div className="border-l-2 border-green-500 pl-6 py-2">
              <h3 className="text-xl font-semibold">Front-end Developer</h3>
              <p className="text-green-600 font-medium">Previous Company • 2021 - 2023</p>
              <p className="text-gray-600 mt-2">
                Developed and maintained multiple React applications, improved performance by 40%, and led component design system.
              </p>
            </div>

            {/* Experience Card 3 */}
            <div className="border-l-2 border-green-500 pl-6 py-2">
              <h3 className="text-xl font-semibold">Junior Front-end Developer</h3>
              <p className="text-green-600 font-medium">Startup Company • 2020 - 2021</p>
              <p className="text-gray-600 mt-2">
                Built responsive web interfaces, collaborated with designers, and implemented modern CSS techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="px-6 sm:px-12 lg:px-20 py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Education</h2>

          <div className="space-y-6">
            <div className="p-6 rounded-xl border border-gray-200 bg-white">
              <h3 className="text-lg font-semibold">Bachelor of Science in Computer Science</h3>
              <p className="text-green-600 font-medium">University Name • 2016 - 2020</p>
            </div>

            <div className="p-6 rounded-xl border border-gray-200 bg-white">
              <h3 className="text-lg font-semibold">Web Development Certification</h3>
              <p className="text-green-600 font-medium">Online Bootcamp • 2019</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
