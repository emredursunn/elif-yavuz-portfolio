import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf8f6]">
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-[#2d2d2d] leading-tight">
              Elif Yavuz
            </h1>
            <h2 className="text-xl md:text-2xl text-[#d4a574] font-medium">
              Logistics Specialist | Operations & Process Optimization
            </h2>
            <p className="text-lg text-[#5a5a5a] max-w-xl">
              Optimizing logistics processes to create efficient and sustainable operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <a
                href="https://linkedin.com/in/elif-yavuz-579b811b4"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#d4a574] text-white rounded-full font-medium hover:bg-[#c49563] transition-colors shadow-md"
              >
                View LinkedIn
              </a>
              <a
                href="#contact"
                className="px-8 py-3 bg-white text-[#d4a574] rounded-full font-medium hover:bg-[#f5f5f5] transition-colors shadow-md border border-[#e8d5c4]"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <Image
                src="/porfolio-photo.jpeg"
                alt="Elif Yavuz"
                fill
                className="rounded-3xl object-cover shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-[#2d2d2d] mb-8 text-center">About Me</h2>
          <div className="bg-[#faf8f6] rounded-3xl p-8 md:p-12 shadow-lg">
            <p className="text-lg text-[#5a5a5a] leading-relaxed">
              I am a Logistics Specialist with hands-on experience in operational logistics, process optimization, and cost-conscious workflow management. Throughout my career, I have worked closely with cross-functional teams to improve operational efficiency, streamline logistics processes, and support data-driven decision-making. With a strong background in logistics operations and supply chain analysis, I enjoy transforming complex workflows into clear, efficient, and sustainable systems.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-[#faf8f6]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-[#2d2d2d] mb-12 text-center">Experience</h2>
          <div className="space-y-8">
            {/* MR DIY Turkey - Logistics Specialist */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
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
            </div>

            {/* MR DIY Turkey - Assistant Specialist */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
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
            </div>

            {/* SIO Automotive - Management Intern */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
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
            </div>

            {/* SIO Automotive - Production Intern */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
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
            </div>

            {/* HASIR Group */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
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
            </div>

            {/* Titanic Hotels */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
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
            </div>

            {/* PNL LED Lighting Systems */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
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
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-[#2d2d2d] mb-12 text-center">Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#faf8f6] rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#d4a574] mb-6">Technical Skills</h3>
              <div className="space-y-3">
                <div className="bg-white rounded-full px-6 py-3 text-[#2d2d2d] font-medium shadow-sm">
                  Microsoft Excel
                </div>
                <div className="bg-white rounded-full px-6 py-3 text-[#2d2d2d] font-medium shadow-sm">
                  Process Analysis
                </div>
                <div className="bg-white rounded-full px-6 py-3 text-[#2d2d2d] font-medium shadow-sm">
                  Operational Planning
                </div>
                <div className="bg-white rounded-full px-6 py-3 text-[#2d2d2d] font-medium shadow-sm">
                  Reporting & Data Tracking
                </div>
              </div>
            </div>
            <div className="bg-[#faf8f6] rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#d4a574] mb-6">Soft Skills</h3>
              <div className="space-y-3">
                <div className="bg-white rounded-full px-6 py-3 text-[#2d2d2d] font-medium shadow-sm">
                  Time Management
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-[#faf8f6]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-[#2d2d2d] mb-12 text-center">Education</h2>
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#2d2d2d] mb-2">BSc in Industrial Engineering</h3>
              <p className="text-[#d4a574] font-semibold text-lg mb-4">Süleyman Demirel University</p>
              <p className="text-[#5a5a5a]">
                Strong foundation in operations, systems, and process optimization
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg">
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
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-[#2d2d2d] mb-12 text-center">Contact</h2>
          <div className="bg-[#faf8f6] rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-[#d4a574] mb-2">Email</h3>
                <a href="mailto:elifyavuz5x@gmail.com" className="text-[#2d2d2d] text-xl hover:text-[#d4a574] transition-colors">
                  elifyavuz5x@gmail.com
                </a>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#d4a574] mb-2">LinkedIn</h3>
                <a 
                  href="https://linkedin.com/in/elif-yavuz-579b811b4" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#2d2d2d] text-xl hover:text-[#d4a574] transition-colors"
                >
                  linkedin.com/in/elif-yavuz-579b811b4
                </a>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#d4a574] mb-2">Birthday</h3>
                <p className="text-[#2d2d2d] text-xl">15 February 2001</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-[#2d2d2d] text-center">
        <p className="text-[#e8d5c4]">© Elif Yavuz — Logistics & Operations</p>
      </footer>
    </div>
  );
}
