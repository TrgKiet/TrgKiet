'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Palette, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skills = [
    {
      category: 'Design',
      icon: <Palette className="w-6 h-6" />,
      items: ['Figma', 'Photoshop', 'Illustrator', 'Sketch', 'Principle'],
    },
    {
      category: 'Development',
      icon: <Code className="w-6 h-6" />,
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    },
    {
      category: 'Strategy',
      icon: <Lightbulb className="w-6 h-6" />,
      items: ['User Research', 'Product Strategy', 'Design Systems', 'A/B Testing'],
    },
    {
      category: 'Collaboration',
      icon: <Users className="w-6 h-6" />,
      items: ['Workshop Facilitation', 'Stakeholder Management', 'Team Leadership', 'Mentoring'],
    },
  ];

  const experience = [
    {
      role: 'Senior Product Designer',
      company: 'TechFlow Inc.',
      duration: '2022 - Present',
      description: 'Led design for flagship product serving 50K+ users. Redesigned user onboarding flow, increasing conversion by 35%.',
    },
    {
      role: 'UX/UI Designer',
      company: 'StartupLab',
      duration: '2020 - 2022',
      description: 'Designed mobile-first experiences for 3 successful product launches. Collaborated with cross-functional teams of 15+ members.',
    },
    {
      role: 'Visual Designer',
      company: 'Creative Agency',
      duration: '2018 - 2020',
      description: 'Created brand identities and marketing materials for 25+ clients across various industries.',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-neutral-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating digital experiences that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Profile Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full flex items-center justify-center">
                  <span className="text-6xl font-bold text-primary-600">AC</span>
                </div>
              </div>
              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-500 rounded-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <span className="text-white font-bold text-lg">👋</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-6">
              My Story
            </h3>
            <div className="space-y-4 text-lg text-neutral-600 leading-relaxed">
              <p>
                With over 5 years of experience in design and development, I've had the privilege 
                of working with startups and established companies to create digital products 
                that users love.
              </p>
              <p>
                My journey began with a fascination for how design can solve complex problems. 
                I believe that great design is not just about aesthetics—it's about creating 
                meaningful experiences that connect with people on a deeper level.
              </p>
              <p>
                When I'm not designing, you can find me exploring new technologies, mentoring 
                aspiring designers, or hiking with my camera to capture the beauty of nature.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 text-center mb-12">
            Skills & Expertise
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-neutral-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary-100 rounded-lg text-primary-600">
                    {skill.icon}
                  </div>
                  <h4 className="font-semibold text-neutral-900">{skill.category}</h4>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-neutral-600 text-sm">
                      • {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 text-center mb-12">
            Experience
          </h3>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="flex flex-col md:flex-row gap-6 p-6 bg-neutral-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="md:w-1/3">
                  <h4 className="font-bold text-neutral-900 text-lg">{exp.role}</h4>
                  <p className="text-primary-600 font-medium">{exp.company}</p>
                  <p className="text-neutral-500 text-sm">{exp.duration}</p>
                </div>
                <div className="md:w-2/3">
                  <p className="text-neutral-600 leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center mt-16"
        >
          <motion.button
            onClick={() => {
              const contactSection = document.querySelector('#contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-medium text-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Let's Work Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;