import React from 'react';
import { Code2, Layout, Database, Wrench, Sparkles, TrendingUp } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend Development',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 85 },
        { name: 'Next.js', level: 80 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
      ],
    },
    {
      icon: Layout,
      title: 'UI & Styling',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Material-UI', level: 85 },
        { name: 'Styled Components', level: 80 },
        { name: 'SASS/SCSS', level: 85 },
        { name: 'CSS Modules', level: 80 },
        { name: 'Responsive Design', level: 95 },
      ],
    },
    {
      icon: Database,
      title: 'Backend & Database',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Express', level: 70 },
        { name: 'MongoDB', level: 65 },
        { name: 'REST APIs', level: 85 },
        { name: 'GraphQL', level: 60 },
        { name: 'Firebase', level: 70 },
      ],
    },
    {
      icon: Wrench,
      title: 'Tools & Workflow',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Webpack', level: 75 },
        { name: 'Vite', level: 85 },
        { name: 'npm/yarn', level: 90 },
        { name: 'Figma', level: 80 },
      ],
    },
  ];

  const additionalSkills = [
    'Redux & State Management',
    'React Router',
    'Axios & Fetch API',
    'Web Performance',
    'Accessibility (a11y)',
    'SEO Optimization',
    'Responsive Design',
    'Cross-browser Testing',
    'Jest & Testing Library',
    'Chrome DevTools',
    'Agile/Scrum',
    'CI/CD',
  ];

  return (
    <div className="text-black">
      {/* Hero Section */}
      <section className="px-6 sm:px-12 lg:px-20 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-sm text-green-700">
            <Sparkles size={18} className="text-green-500" />
            <span>Technical Expertise</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold">Skills & Proficiency</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, tools, and frameworks I work with
            to build modern web applications.
          </p>
        </div>
      </section>

      {/* Skills Categories */}
      <section className="px-6 sm:px-12 lg:px-20 py-12">
        <div className="max-w-6xl mx-auto space-y-12">
          {skillCategories.map(({ icon: Icon, title, color, skills }, idx) => (
            <div key={idx} className="space-y-6">
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${color}`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-semibold">{title}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map(({ name, level }, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-800">{name}</span>
                      <span className="text-sm text-gray-500">{level}%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Skills */}
      <section className="px-6 sm:px-12 lg:px-20 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="w-6 h-6 text-green-500" />
            <h2 className="text-2xl sm:text-3xl font-semibold">Additional Competencies</h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {additionalSkills.map((skill, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium hover:border-green-500 hover:shadow-md transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Learning & Growth */}
      <section className="px-6 sm:px-12 lg:px-20 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Continuous Learning</h2>
          <p className="text-lg text-gray-700">
            I&apos;m always exploring new technologies and improving my craft. Currently diving deeper into
            advanced React patterns, Web3 technologies, and performance optimization techniques.
          </p>
          <div className="flex flex-wrap gap-3 justify-center pt-4">
            <span className="px-4 py-2 rounded-full bg-green-500/10 text-green-700 font-medium">
              Currently Learning: Three.js
            </span>
            <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-700 font-medium">
              Exploring: Remix
            </span>
            <span className="px-4 py-2 rounded-full bg-purple-500/10 text-purple-700 font-medium">
              Improving: System Design
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
