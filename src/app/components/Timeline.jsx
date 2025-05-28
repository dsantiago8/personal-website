"use client";

import { motion } from "framer-motion";

const timelineItems = [
  {
    year: "2025",
    text: "Co-Founder, CTO, and Creative Director at The Confricated Company. Oversaw ecommerce ops, platform management, and web development using Next.js, TailwindCSS, PostgreSQL, and MedusaJS.",
  },
  {
    year: "Late 2024",
    text: "Software Engineering Intern at Occidental College Biochemistry Dept. Built a scheduling app with Flask + React. Used SQLAlchemy and data analysis to improve efficiency.",
  },
  {
    year: "2023",
    text: "Interned with California Native Vote Project. Co-developed an interactive map with Leaflet.js and D3.js to support broadband in Indigenous communities.",
  },
  {
    year: "2022",
    text: "Mentor for Student-Athlete Program in Maryland. Led workshops and mentored underprivileged children in academic and social development.",
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Timeline() {
  return (
    <section id="timeline" className="bg-slate-900 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-2">My Employment History</h2>
        <p className="text-slate-400 mb-12">Here is a timeline of the organizations I have worked for.</p>

        <div className="relative border-l border-slate-700">
          {timelineItems.map((item, i) => (
            <motion.div
              key={i}
              className="mb-10 ml-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={fadeUpVariant}
              custom={i}
            >
              <div className="absolute w-3 h-3 bg-sky-400 rounded-full -left-1.5 mt-1.5 border border-slate-900" />
              <h3 className="text-xl font-bold">{item.year}</h3>
              <p className="text-slate-400 mt-1">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
