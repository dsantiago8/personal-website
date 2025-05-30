"use client";
import Image from 'next/image';
import { motion } from "framer-motion";
import Timeline from "./components/Timeline";
import {
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPython,
  SiSwift,
  SiDotnet,
  SiFlask,
  SiGit,
  SiApple,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
} from "react-icons/si";
import { FaJava, FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";


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
            <a
              href="https://github.com/dsantiago8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-black px-4 py-2 rounded hover:bg-slate-100 transition"
            >
              <FaGithub className="text-lg" />
              My GitHub
            </a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-xl text-slate-600">
            <a href="https://www.linkedin.com/in/diego-santiago-128963287/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">
              <FaLinkedin />
            </a>
            <a href="mailto:dsantruiz@gmail.com" className="hover:text-black transition">
              <FaEnvelope />
            </a>
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
          I began coding in high school, where I built my first project, a simple Pong clone, and quickly discovered a passion for creating things with code. Since then, I've pursued this interest both academically and creatively, earning a degree in Computer Science (with a concentration in software development) and another in Spanish Studies from Occidental College.

          Outside of tech, I enjoy playing soccer and was part of my school’s soccer club. I'm also an avid chess player, sci-fi reader, and pool enthusiast. In my free time, I like to draw and write poetry—sometimes blending the two to create visual poems or illustrated pieces. My love for building and storytelling, whether through code or art, continues to shape how I approach both technical challenges and creative projects.
          </p>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="bg-white text-slate-800 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center">Tech Stack</h2>

          <div className="grid grid-cols-2 max-w-3xl mx-auto gap-16">
            {/* Programming Languages */}
            <div className="text-right">
              <h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex justify-end items-center gap-2"><SiCplusplus /> C++</li>
                <li className="flex justify-end items-center gap-2"><SiHtml5 /> HTML/CSS</li>
                <li className="flex justify-end items-center gap-2"><FaJava /> Java</li>
                <li className="flex justify-end items-center gap-2"><SiJavascript /> JavaScript</li>
                <li className="flex justify-end items-center gap-2"><SiPython /> Python</li>
                <li className="flex justify-end items-center gap-2"><SiSwift /> Swift</li>
              </ul>
            </div>

            {/* Tools & Frameworks */}
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4">Tools & Frameworks</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center gap-2"><SiDotnet /> ASP.NET</li>
                <li className="flex items-center gap-2"><SiFlask /> Flask</li>
                <li className="flex items-center gap-2"><SiGit /> Git</li>
                <li className="flex items-center gap-2"><SiApple /> HealthKit</li>
                <li className="flex items-center gap-2"><SiMysql /> MySQL</li>
                <li className="flex items-center gap-2"><SiNextdotjs /> Next.js</li>
                <li className="flex items-center gap-2"><SiPostgresql /> PostgreSQL</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Project Cards */}
      <section id="projects" className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-semibold">Projects Showcase</h2>
            <p className="text-slate-600 mt-2">A few highlights from recent work</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "NocOps: Sleep Better", desc: "iOS sleep tracker app developed using Swift & HealthKit." },
              { title: "Community Listings", desc: ".NET + PostgreSQL app for local resource sharing." },
              { title: "Track-n-Snap", desc: "Arduino-based Face Tracker." },
              { title: "Saving Dorado", desc: "Visual novel built using RenPy." }
            ].map((proj, i) => (
              <div key={i} className="bg-white border rounded-xl p-4 shadow hover:shadow-md transition">
                <h3 className="font-semibold text-lg mb-2">{proj.title}</h3>
                <p className="text-slate-600 text-sm">{proj.desc}</p>
              </div>
            ))}
          </div>
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
            <a
              href="https://calendly.com/dsantruiz/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-3 rounded hover:bg-slate-800 transition"
            >
              Schedule a Call
            </a>
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
