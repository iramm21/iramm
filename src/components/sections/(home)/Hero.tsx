export default function Hero() {
  return (
    <section className="relative overflow-hidden py-32 px-4 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
          Hi, I&apos;m <span className="text-blue-600">Your Name</span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-6">
          I design and develop high-performance web applications using modern
          technologies.
        </p>

        <p className="text-md text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
          Specializing in React, Next.js, and TypeScript — I create fast,
          accessible, and scalable digital products with clean code and great
          UX.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-sm font-medium shadow-lg hover:bg-blue-700 transition"
          >
            Contact Me
          </a>
          <a
            href="/resume.pdf"
            className="inline-block border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 px-8 py-3 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>
      </div>

      <svg
        className="absolute bottom-0 left-0 w-full h-20 text-blue-50 dark:text-gray-900"
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
        fill="currentColor"
      >
        <path d="M0,0V46.29c47.71,22,98.07,34.85,147.85,34.85..." />
      </svg>
    </section>
  );
}
