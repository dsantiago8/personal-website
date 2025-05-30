"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const timelineItems = [
  { year: "May 2025", text: "Graduation! Computer Science and Spanish Studies double major." },
  { year: "2024", text: "Developed an iOS app using Swift to provide users with in-depth sleep insights and actionable recommendations, utilizing fuzzy set logic to interpret complex sleep patterns." },
  { year: "2024", text: "Worked as a full-stack developer, implementing database routes, models, and designing the user interface." },
  { year: "2023", text: "Won Best Overall Project for building a responsive web application that uses AI language models to parse through text files, video transcripts, and article URLs to generate reader-friendly summaries." },
  { year: "2021", text: "Start of programming journey at Occidental College." }
];

export default function Timeline() {
  return (
    <section id="timeline" className="bg-slate-900 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-2">Projects and Experience</h2>
        <p className="text-slate-400 mb-12">Here is a timeline of my programming experience during my time in college.</p>

        <div className="relative before:absolute before:left-2 before:top-0 before:bottom-0 before:w-px before:bg-slate-800 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
            {timelineItems.map((item, i) => {
            const { ref, inView } = useInView({
            threshold: 1.0, // fully visible
            rootMargin: "-40% 0% -40% 0%", // only trigger when near vertical center
            });

            return (
              <motion.div
                ref={ref}
                key={i}
                className={`mb-10 ml-4 transition-opacity duration-500 ${
                  inView ? "opacity-100" : "opacity-40"
                }`}
              >
                <div className="absolute w-3 h-3 bg-sky-400 rounded-full -left-1.5 mt-1.5 border border-slate-900" />
                <h3
                className={`text-xl font-bold transition duration-500 ${
                    inView ? "text-white drop-shadow-glow" : "text-slate-300"
                }`}
                >
                {item.year}
                </h3>
                <p className="text-slate-400 mt-1">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
