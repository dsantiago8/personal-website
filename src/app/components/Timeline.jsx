"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const timelineItems = [
  { year: "May 2025", text: "Graduation! Computer Science and Spanish Studies double major @Occidental College" },
  { year: "Late 2024", text: "BioChem Website" },
  { year: "2023", text: "Interned with California Native Vote Project. Co-developed an interactive map with Leaflet.js and D3.js to support broadband in Indigenous communities." },
  { year: "2022", text: "Mentor for Student-Athlete Program in Maryland. Led workshops and mentored underprivileged children in academic and social development." },
  { year: "2021", text: "Mentor for Student-Athlete Program in Maryland. Led workshops and mentored underprivileged children in academic and social development." }
];

export default function Timeline() {
  return (
    <section id="timeline" className="bg-slate-900 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-2">Projects and Experience</h2>
        <p className="text-slate-400 mb-12">Here is a timeline of my .</p>

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
