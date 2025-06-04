import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-white dark:bg-gray-900 py-24 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div className="flex justify-center">
          <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-100 shadow-lg">
            <Image
              src="/profile.jpg"
              alt="Your Name"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
            I&apos;m a passionate web developer who loves building fast,
            accessible, and beautifully designed websites and applications. With
            experience in modern frameworks like{" "}
            <span className="font-medium text-blue-600">Next.js</span> and{" "}
            <span className="font-medium text-blue-600">React</span>, I focus on
            performance, scalability, and clean code.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Whether it&apos;s a portfolio, a SaaS product, or a full-stack
            application, I aim to craft solutions that are user-focused and
            developer-friendly. Currently, I&apos;m expanding my full-stack
            skills and contributing to open-source.
          </p>
        </div>
      </div>
    </section>
  );
}
