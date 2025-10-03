import React from "react";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-blue-600 text-white p-6 text-center font-bold text-3xl shadow">
        Sai Chandra Portfolio
      </header>

      <main className="flex-1">
        <section className="p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">My Projects</h2>
          <Projects />
        </section>

        <section className="p-8 bg-gray-100">
          <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
          <ContactForm />
        </section>
      </main>

      <footer className="bg-gray-800 text-white text-center p-4 mt-4">
        © 2025 Sai Chandra | Built with React & Tailwind
      </footer>
    </div>
  );
}

export default App;
