const { useState } = React;

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <header className="p-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Amitesh Anirudhan</h1>
        <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
          {isDarkMode ? '🌞' : '🌙'}
        </button>
      </header>
      <main className="container mx-auto px-6 py-12">
        <section id="about" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Project Engineer</h2>
          <p className="mb-4">
            Driven individual with a year of experience in the corporate sector, specifically with
            handling data in the utility industry. Strong intuition on providing background and
            implementing technical solutions for KPI's related to various business processes.
          </p>
          <p>
            As a mathematics major, a natural instinct of looking at problems in tech and business,
            through the lens of empirical reasoning and guesstimates has been my practice towards
            delivering an ideal output.
          </p>
        </section>
        
        <section id="experience" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Experience</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Developer</h3>
            <p className="text-gray-600 dark:text-gray-400">Wipro | Bengaluru, India | May 2022 - May 2023</p>
            <ul className="list-disc list-inside mt-2">
              <li>Crunched data of an American utility company to provide insights on change of tenancy and supplier rates.</li>
              <li>Developed dashboards on Power BI and Tableau, showcasing relevant KPI's.</li>
              <li>Developed and converted Java code to Groovy for CIS migration projects.</li>
              <li>Conducted knowledge transfer sessions on Groovy.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Power BI Developer Intern</h3>
            <p className="text-gray-600 dark:text-gray-400">Techneith | Toronto, Canada | 2021 - 2022</p>
            <ul className="list-disc list-inside mt-2">
              <li>Developed budget and sales dashboards for clients.</li>
              <li>Handled and modelled required data for tasks.</li>
              <li>Interacted directly with clients for input and feedback.</li>
              <li>Conducted R&D on Power BI service and Windows server requirements.</li>
            </ul>
          </div>
        </section>
        
        <section id="skills" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {['Groovy', 'Java', 'Python', 'PL SQL', 'Power BI', 'Tableau', 'Excel', 'Linear algebra', 'Statistics', 'Probability'].map((skill) => (
              <span key={skill} className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </section>
        
        <section id="contact">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p>Email: <a href="mailto:amitesh.anirudhan29@gmail.com" className="text-blue-500 hover:underline">amitesh.anirudhan29@gmail.com</a></p>
          <p>Phone: <a href="tel:9618508656" className="text-blue-500 hover:underline">9618508656</a></p>
          <p>Location: Hyderabad, Telengana, India</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/amitesh-anirudhan/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Profile</a></p>
          <p>GitHub: <a href="https://github.com/amitesh0109" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">amitesh0109</a></p>
        </section>
      </main>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
