import Image from 'next/image';
import { motion } from "framer-motion";
import Timeline from "./components/Timeline";



export default function Home() {
  return (
    <main id="top" className="text-slate-800 bg-white">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-6 py-20 max-w-6xl mx-auto">
        <div>
          <h1 className="text-4xl sm:text-6xl font-bold mb-6"> FullStack Developer</h1>
          <p className="text-lg sm:text-xl text-slate-600 mb-6">
            I build clean, fast, and user-friendly applications — combining design and development with clarity and care.
          </p>
          <div className="flex gap-4">
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-slate-800 transition">Hire Me</button>
            <button className="border border-black px-4 py-2 rounded hover:bg-slate-100 transition">My GitHub</button>
          </div>
          <div className="mt-6 text-sm text-slate-500">
            Other socials: [YouTube] [LinkedIn] [Email Icon]
          </div>
        </div>
        <img
          src="/hero-image.jpg" // profile picture
          alt="Hero"
          width={320}
          height={320}
          className="w-80 h-auto rounded-lg shadow"
        />
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50 py-16 px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm uppercase tracking-wide text-slate-500">About Me</span>
          <h2 className="text-3xl font-semibold mt-2 mb-4">Designing With Purpose</h2>
          <p className="text-slate-600">
            I'm passionate about helping people express themselves through technology, language, and care. My work blends design, research, and community connection.
          </p>
        </div>
      </section>

      {/* Project Cards */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold">Projects Showcase</h2>
          <p className="text-slate-600 mt-2">A few highlights from recent work</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: "Sleep Tracker App", desc: "iOS app using Swift & HealthKit." },
            { title: "Community Listings", desc: ".NET + PostgreSQL app for local resource sharing." },
            { title: "TBD", desc: "Interactive phonetics visualizer built in Python." },
            { title: "TBD", desc: "AI chatbot to help with language learning." }
          ].map((proj, i) => (
            <div key={i} className="bg-white border rounded-xl p-4 shadow hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">{proj.title}</h3>
              <p className="text-slate-600 text-sm">{proj.desc}</p>
            </div>
          ))}
        </div>
      </section>

    {/* Timeline Section */}
    <Timeline />


      {/* Call to Action */}
      <section id="contact" className="bg-slate-100 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Interested in Working Together?</h2>
          <p className="mb-6 text-slate-600">Let’s talk about how I can help bring your ideas to life.</p>
          <div className="flex justify-center gap-6 flex-wrap">
            <button className="bg-black text-white px-6 py-3 rounded hover:bg-slate-800 transition">Schedule a Call</button>
            <button className="border border-black px-6 py-3 rounded hover:bg-slate-200 transition">View My Work</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-slate-500 text-sm mt-10 py-6 border-t">
        © {new Date().getFullYear()} Diego Santiago — Built with Next.js
      </footer>
    </main>
  );
}
