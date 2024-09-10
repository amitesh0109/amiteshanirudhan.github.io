const { useState } = React;
const { LinkedIn, GitHub, Mail, Phone, MapPin } = lucide;

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <header className="p-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Amitesh Anirudhan</h1>
        <nav className="space-x-4">
          <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
          <a href="#experience" className="hover:text-indigo-600 transition-colors">Experience</a>
          <a href="#skills" className="hover:text-indigo-600 transition-colors">Skills</a>
          <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
          <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
            {isDarkMode ? '🌞' : '🌙'}
          </button>
        </nav>
      </header>
      <main className="container mx-auto px-6 py-12">
        <section id="about" className="mb-20">
          <h2 className="text-4xl font-bold mb-6">Project Engineer</h2>
          <p className="text-xl mb-4">
            Driven individual with a year of experience in the corporate sector, specifically with
            handling data in the utility industry. Strong intuition on providing background and
            implementing technical solutions for KPI's related to various business processes.
          </p>
          <p className="text-xl">
            As a mathematics major, a natural instinct of looking at problems in tech and business,
            through the lens of empirical reasoning and guesstimates has been my practice towards
            delivering an ideal output.
          </p>
        </section>
        
        <section id="experience" className="mb-20">
          <h2 className="text-3xl font-bold mb-6">Experience</h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
            <h3 className="text-2xl font-semibold mb-2">Developer</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Wipro | Bengaluru, India | May 2022 - May 2023</p>
            <ul className="list-disc list-inside">
              <li>Crunched data of an American utility company to provide insights on change of tenancy and supplier rates.</li>
              <li>Developed dashboards on Power BI and Tableau, showcasing relevant KPI's.</li>
              <li>Developed and converted Java code to Groovy for CIS migration projects.</li>
              <li>Conducted knowledge transfer sessions on Groovy.</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Power BI Developer Intern</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Techneith | Toronto, Canada | 2021 - 2022</p>
            <ul className="list-disc list-inside">
              <li>Developed budget and sales dashboards for clients.</li>
              <li>Handled and modelled required data for tasks.</li>
              <li>Interacted directly with clients for input and feedback.</li>
              <li>Conducted R&D on Power BI service and Windows server requirements.</li>
            </ul>
          </div>
        </section>
        
        <section id="skills" className="mb-20">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['Groovy', 'Java', 'Python', 'PL SQL', 'Power BI', 'Tableau', 'Excel', 'Linear algebra', 'Statistics', 'Probability'].map((skill) => (
              <div key={skill} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold">{skill}</h3>
              </div>
            ))}
          </div>
        </section>
        
        <section id="contact">
          <h2 className="text-3xl font-bold mb-6">Contact</h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Mail className="mr-2" /> <a href="mailto:amitesh.anirudhan29@gmail.com" className="hover:text-indigo-600">amitesh.anirudhan29@gmail.com</a>
            </div>
            <div className="flex items-center mb-4">
              <Phone className="mr-2" /> <a href="tel:9618508656" className="hover:text-indigo-600">9618508656</a>
            </div>
            <div className="flex items-center mb-4">
              <MapPin className="mr-2" /> Hyderabad, Telengana, India
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.linkedin.com/in/amitesh-anirudhan/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">
                <LinkedIn />
              </a>
              <a href="https://github.com/amitesh0109" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">
                <GitHub />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
