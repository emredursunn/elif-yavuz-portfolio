"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Tek tip, tutarlı animasyon - daha düzenli ve sade
const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5, ease: "easeOut" as const }
};

// Stagger child'lar için - viewport YOK, sadece parent tetiklesin (çift animasyonu önler)
const staggerChild = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" as const }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  },
  viewport: { once: true, margin: "-50px" }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf8f6]">
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-[#2d2d2d] leading-tight">
              Elif Yavuz
            </h1>
            <div className="space-y-2">
              <h2 className="text-xl md:text-2xl text-[#d4a574] font-medium">
                Logistics Specialist | Operations & Process Optimization
              </h2>
              <p className="text-lg text-[#7a7a7a] font-medium">
                Industrial Engineer
              </p>
              <p className="text-base text-[#9a9a9a]">
                Born: 15 February 2001
              </p>
            </div>
            <p className="text-lg text-[#5a5a5a] max-w-xl">
              Optimizing logistics processes to create efficient and sustainable operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <a
                href="https://linkedin.com/in/elif-yavuz-579b811b4"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#d4a574] text-white rounded-full font-medium hover:bg-[#c49563] hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl"
              >
                View LinkedIn
              </a>
              <a
                href="#contact"
                className="px-8 py-3 bg-white text-[#d4a574] rounded-full font-medium hover:bg-[#f5f5f5] hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl border border-[#e8d5c4]"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.1 }}
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96 group">
              <Image
                src="/porfolio-photo.jpeg"
                alt="Elif Yavuz"
                fill
                className="rounded-3xl object-cover shadow-2xl group-hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-[#2d2d2d] mb-8 text-center"
            {...fadeInUp}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="bg-[#faf8f6] rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-500"
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <p className="text-lg text-[#5a5a5a] leading-relaxed">
              I am a Logistics Specialist with hands-on experience in operational logistics, process optimization, and cost-conscious workflow management. Throughout my career, I have worked closely with cross-functional teams to improve operational efficiency, streamline logistics processes, and support data-driven decision-making. With a strong background in logistics operations and supply chain analysis, I enjoy transforming complex workflows into clear, efficient, and sustainable systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-[#faf8f6]">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-[#2d2d2d] mb-12 text-center"
            {...fadeInUp}
          >
            Experience
          </motion.h2>
          <motion.div 
            className="space-y-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* MR DIY Turkey - Logistics Specialist */}
            <motion.div 
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
              variants={staggerChild}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-[#2d2d2d]">Logistics Specialist</h3>
                  <p className="text-[#d4a574] font-semibold text-lg">MR DIY Turkey</p>
                </div>
                <p className="text-[#7a7a7a] mt-2 md:mt-0">January 2026 – Present | Istanbul, Turkey</p>
              </div>
              <ul className="space-y-2 text-[#5a5a5a]">
                <li className="flex items-start">
                  <span className="text-[#d4a574] mr-2">•</span>
                  <span>Managing end-to-end logistics operations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d4a574] mr-2">•</span>
                  <span>Optimizing logistics workflows and operational processes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d4a574] mr-2">•</span>
                  <span>Supporting cost management and efficiency-driven initiatives</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d4a574] mr-2">•</span>
                  <span>Monitoring daily operations and operational performance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d4a574] mr-2">•</span>
                  <span>Preparing operational reports and analyses</span>
                </li>
              </ul>
            </motion.div>

            {/* MR DIY Turkey - Assistant Specialist */}
            <motion.div 
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
              variants={staggerChild}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-[#2d2d2d]">Logistic Assistant Specialist</h3>
                  <p className="text-[#d4a574] font-semibold text-lg">MR DIY Turkey</p>
                </div>
                <p className="text-[#7a7a7a] mt-2 md:mt-0">November 2023 – January 2026 | Istanbul, Turkey</p>
              </div>
              <ul className="space-y-2 text-[#5a5a5a]">
                <li className="flex items-start">
                  <span className="text-[#d4a574] mr-2">•</span>
                  <span>Supporting logistics and warehouse operations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d4a574] mr-2">•</span>
                  <span>Coordinating shipment and stock-related processes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d4a574] mr-2">•</span>
                  <span>Assisting in workflow optimization and process improvements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d4a574] mr-2">•</span>
                  <span>Handling operational data tracking and reporting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d4a574] mr-2">•</span>
                  <span>Collaborating with internal teams to ensure smooth operations</span>
                </li>
              </ul>
            </motion.div>

            {/* SIO Automotive - Management Intern */}
            <motion.div 
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
              variants={staggerChild}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-[#2d2d2d]">Management Intern</h3>
                  <p className="text-[#d4a574] font-semibold text-lg">SIO Automotive</p>
                </div>
                <p className="text-[#7a7a7a] mt-2 md:mt-0">August 2023 – September 2023 | Çorlu, Turkey</p>
              </div>
              <ul className="space-y-2 text-[#5a5a5a]">
                <li className="flex items-start">
                  <span className="text-[#d4a574] mr-2">•</span>
                  <span>Supporting management and operational processes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d4a574] mr-2">•</span>
                  <span>Assisting in process tracking and performance analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d4a574] mr-2">•</span>
                  <span>Cross-departmental coordination support</span>
                </li>
              </ul>
            </motion.div>

            {/* SIO Automotive - Production Intern */}
            <motion.div 
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
              variants={staggerChild}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-[#2d2d2d]">Production Intern</h3>
                  <p className="text-[#d4a574] font-semibold text-lg">SIO Automotive</p>
                </div>
                <p className="text-[#7a7a7a] mt-2 md:mt-0">July 2023 – August 2023</p>
              </div>
              <ul className="space-y-2 text-[#5a5a5a]">
                <li className="flex items-start">
                  <span className="text-[#d4a574] mr-2">•</span>
                  <span>Observing and analyzing production processes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d4a574] mr-2">•</span>
                  <span>Supporting production performance tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d4a574] mr-2">•</span>
                  <span>Assisting process improvement initiatives</span>
                </li>
              </ul>
            </motion.div>

            {/* HASIR Group */}
            <motion.div 
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
              variants={staggerChild}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-[#2d2d2d]">Management Internship (Erasmus)</h3>
                  <p className="text-[#d4a574] font-semibold text-lg">HASIR Group</p>
                </div>
                <p className="text-[#7a7a7a] mt-2 md:mt-0">July 2022 – September 2022 | Berlin, Germany</p>
              </div>
              <ul className="space-y-2 text-[#5a5a5a]">
                <li className="flex items-start">
                  <span className="text-[#d4a574] mr-2">•</span>
                  <span>Supporting management and operational processes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d4a574] mr-2">•</span>
                  <span>Working with Excel-based operational and financial data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d4a574] mr-2">•</span>
                  <span>Gaining international business experience</span>
                </li>
              </ul>
            </motion.div>

            {/* Titanic Hotels */}
            <motion.div 
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
              variants={staggerChild}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-[#2d2d2d]">Management Internship (Erasmus)</h3>
                  <p className="text-[#d4a574] font-semibold text-lg">Titanic Hotels</p>
                </div>
                <p className="text-[#7a7a7a] mt-2 md:mt-0">July 2022 – September 2022 | Berlin, Germany</p>
              </div>
              <ul className="space-y-2 text-[#5a5a5a]">
                <li className="flex items-start">
                  <span className="text-[#d4a574] mr-2">•</span>
                  <span>Supporting hotel management operations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d4a574] mr-2">•</span>
                  <span>Assisting with operational coordination and time management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d4a574] mr-2">•</span>
                  <span>Active role in an English-speaking work environment</span>
                </li>
              </ul>
            </motion.div>

            {/* PNL LED Lighting Systems */}
            <motion.div 
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
              variants={staggerChild}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-[#2d2d2d]">Supply Chain Analyst</h3>
                  <p className="text-[#d4a574] font-semibold text-lg">PNL LED Lighting Systems</p>
                </div>
                <p className="text-[#7a7a7a] mt-2 md:mt-0">June 2020 – April 2021 | Istanbul, Turkey</p>
              </div>
              <ul className="space-y-2 text-[#5a5a5a]">
                <li className="flex items-start">
                  <span className="text-[#d4a574] mr-2">•</span>
                  <span>Analyzing supply chain and logistics processes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d4a574] mr-2">•</span>
                  <span>Supporting purchasing and logistics operations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d4a574] mr-2">•</span>
                  <span>Preparing operational reports and analyses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d4a574] mr-2">•</span>
                  <span>Full-time work during the pandemic period</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-[#2d2d2d] mb-12 text-center"
            {...fadeInUp}
          >
            Skills
          </motion.h2>
          <motion.div 
            className="bg-[#faf8f6] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <h3 className="text-2xl font-bold text-[#d4a574] mb-6 text-center">Technical Skills</h3>
            <motion.div 
              className="grid sm:grid-cols-2 gap-4"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div 
                className="bg-white rounded-full px-6 py-3 text-[#2d2d2d] font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
                variants={staggerChild}
              >
                Microsoft Excel
              </motion.div>
              <motion.div 
                className="bg-white rounded-full px-6 py-3 text-[#2d2d2d] font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
                variants={staggerChild}
              >
                Process Analysis
              </motion.div>
              <motion.div 
                className="bg-white rounded-full px-6 py-3 text-[#2d2d2d] font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
                variants={staggerChild}
              >
                Operational Planning
              </motion.div>
              <motion.div 
                className="bg-white rounded-full px-6 py-3 text-[#2d2d2d] font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
                variants={staggerChild}
              >
                Reporting & Data Tracking
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-[#faf8f6]">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-[#2d2d2d] mb-12 text-center"
            {...fadeInUp}
          >
            Education
          </motion.h2>
          <motion.div 
            className="space-y-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div 
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
              variants={staggerChild}
            >
              <h3 className="text-2xl font-bold text-[#2d2d2d] mb-2">BSc in Industrial Engineering</h3>
              <p className="text-[#d4a574] font-semibold text-lg mb-4">Süleyman Demirel University</p>
              <p className="text-[#5a5a5a]">
                Strong foundation in operations, systems, and process optimization
              </p>
            </motion.div>
            <motion.div 
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
              variants={staggerChild}
            >
              <h3 className="text-2xl font-bold text-[#2d2d2d] mb-2">Erasmus Internships</h3>
              <p className="text-[#d4a574] font-semibold text-lg mb-4">Berlin, Germany</p>
              <ul className="space-y-2 text-[#5a5a5a]">
                <li className="flex items-start">
                  <span className="text-[#d4a574] mr-2">•</span>
                  <span>International work experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d4a574] mr-2">•</span>
                  <span>Exposure to global operational and management practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d4a574] mr-2">•</span>
                  <span>Professional working environment in English</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-[#2d2d2d] mb-12 text-center"
            {...fadeInUp}
          >
            Contact
          </motion.h2>
          <motion.div 
            className="bg-[#faf8f6] rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-500"
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <motion.div 
              className="space-y-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div 
                className="hover:translate-x-2 transition-transform duration-300"
                variants={staggerChild}
              >
                <h3 className="text-lg font-semibold text-[#d4a574] mb-2">Email</h3>
                <a href="mailto:elifyavuz5x@gmail.com" className="text-[#2d2d2d] text-xl hover:text-[#d4a574] transition-colors">
                  elifyavuz5x@gmail.com
                </a>
              </motion.div>
              <motion.div 
                className="hover:translate-x-2 transition-transform duration-300"
                variants={staggerChild}
              >
                <h3 className="text-lg font-semibold text-[#d4a574] mb-2">LinkedIn</h3>
                <a 
                  href="https://linkedin.com/in/elif-yavuz-579b811b4" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#2d2d2d] text-xl hover:text-[#d4a574] transition-colors break-all"
                >
                  linkedin.com/in/elif-yavuz-579b811b4
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-[#2d2d2d] text-center">
        <p className="text-[#e8d5c4]">© Elif Yavuz — Logistics & Operations</p>
      </footer>
    </div>
  );
}
