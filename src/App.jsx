
import { useState } from "react";
import "./style.css";

function App() {
  const [active, setActive] = useState("Dashboard");

  const [resume, setResume] = useState(null);
  const [analyzed, setAnalyzed] = useState(false);

  const [jobRole, setJobRole] = useState("Java Developer");
  const [difficulty, setDifficulty] = useState("Medium");
  const [questions, setQuestions] = useState([]);

  const [careerRole, setCareerRole] = useState("Java Developer");
  const [skillsGenerated, setSkillsGenerated] = useState(false);

  const [roadmapRole, setRoadmapRole] = useState("Java Developer");
  const [roadmapGenerated, setRoadmapGenerated] = useState(false);

  const features = [
    {
      title: "Resume Review",
      icon: "📄",
      description: "Analyze your resume and get an ATS-friendly score.",
      button: "Review Resume",
    },
    {
      title: "Interview Questions",
      icon: "🎤",
      description: "Practice interview questions for your target job.",
      button: "Start Practice",
    },
    {
      title: "Career Roadmap",
      icon: "🗺️",
      description: "Get a step-by-step roadmap for your career goal.",
      button: "View Roadmap",
    },
    {
      title: "Skill Gap Analysis",
      icon: "🧩",
      description: "Find important skills you need to improve.",
      button: "Check Skills",
    },
    {
      title: "Job Recommendations",
      icon: "💼",
      description: "Explore jobs related to your skills and career goal.",
      button: "Find Jobs",
    },
    {
      title: "Career Progress",
      icon: "📈",
      description: "Track your learning and career preparation progress.",
      button: "View Progress",
    },
  ];

  const questionBank = {
    "Java Developer": {
      Easy: [
        "What is Java and what are its main features?",
        "What is the difference between a class and an object?",
        "What is inheritance in Java?",
        "What is the purpose of a constructor?",
        "What is the difference between == and equals()?",
      ],
      Medium: [
        "Explain the four pillars of Object-Oriented Programming.",
        "What is the difference between ArrayList and LinkedList?",
        "How does exception handling work in Java?",
        "What is the difference between an interface and an abstract class?",
        "Explain method overloading and method overriding.",
      ],
      Hard: [
        "How does HashMap work internally in Java?",
        "Explain the Java Memory Model.",
        "What is multithreading and how does synchronization work?",
        "Explain garbage collection in Java.",
        "What are the differences between HashMap, HashSet and TreeMap?",
      ],
    },

    "Frontend Developer": {
      Easy: [
        "What is HTML used for?",
        "What is CSS and why is it important?",
        "What is JavaScript?",
        "What is the difference between id and class in HTML?",
        "What is responsive web design?",
      ],
      Medium: [
        "What is the difference between let, const and var?",
        "Explain the JavaScript event loop.",
        "What are React components?",
        "What is state in React?",
        "What is the difference between props and state?",
      ],
      Hard: [
        "Explain the React Virtual DOM.",
        "What are React hooks and why are they used?",
        "How can you optimize a React application?",
        "Explain closures in JavaScript.",
        "What are promises and async/await?",
      ],
    },

    "Data Scientist": {
      Easy: [
        "What is data science?",
        "What is the difference between AI and Machine Learning?",
        "What is a dataset?",
        "What is supervised learning?",
        "Why is data visualization useful?",
      ],
      Medium: [
        "Explain classification and regression.",
        "What is overfitting and how can it be prevented?",
        "What is feature engineering?",
        "What is the difference between precision and recall?",
        "Why is data preprocessing important?",
      ],
      Hard: [
        "Explain the bias-variance tradeoff.",
        "How does cross-validation work?",
        "Explain gradient descent.",
        "How would you handle an imbalanced dataset?",
        "How would you select important features for a model?",
      ],
    },

    "Full Stack Developer": {
      Easy: [
        "What is frontend development?",
        "What is backend development?",
        "What is an API?",
        "What is a database?",
        "What is the difference between frontend and backend?",
      ],
      Medium: [
        "What is a REST API?",
        "Explain HTTP GET and POST methods.",
        "How does authentication work?",
        "What is the difference between SQL and NoSQL?",
        "What is middleware in Express.js?",
      ],
      Hard: [
        "How would you design a scalable full-stack application?",
        "Explain JWT authentication.",
        "How would you improve API security?",
        "What is database indexing?",
        "How would you optimize a slow web application?",
      ],
    },
  };

  const skillData = {
    "Java Developer": {
      required: ["Java", "OOP", "DSA", "SQL", "Spring Boot"],
      learning: ["Spring Boot", "Advanced DSA", "REST APIs"],
      progress: 70,
    },
    "Frontend Developer": {
      required: ["HTML", "CSS", "JavaScript", "React", "Git"],
      learning: ["React Hooks", "TypeScript", "Advanced JavaScript"],
      progress: 65,
    },
    "Data Scientist": {
      required: ["Python", "Statistics", "SQL", "Machine Learning", "Pandas"],
      learning: ["Machine Learning", "Statistics", "Model Deployment"],
      progress: 55,
    },
    "Full Stack Developer": {
      required: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
      learning: ["Node.js", "REST APIs", "MongoDB"],
      progress: 60,
    },
  };

  const roadmapData = {
    "Java Developer": [
      "Learn Core Java",
      "Master OOP and Collections",
      "Practice DSA",
      "Learn SQL and Databases",
      "Learn Spring Boot",
      "Build Full Stack Projects",
    ],
    "Frontend Developer": [
      "Master HTML and CSS",
      "Learn JavaScript",
      "Learn React",
      "Practice React Projects",
      "Learn Git and GitHub",
      "Build Portfolio Projects",
    ],
    "Data Scientist": [
      "Learn Python",
      "Learn Statistics",
      "Learn SQL",
      "Study Machine Learning",
      "Build ML Projects",
      "Learn Model Deployment",
    ],
    "Full Stack Developer": [
      "Learn HTML and CSS",
      "Master JavaScript",
      "Learn React",
      "Learn Node.js and Express",
      "Learn MongoDB",
      "Build Full Stack Projects",
    ],
  };

  const jobs = [
    {
      title: "Java Developer Intern",
      company: "Software Company",
      skills: "Java • SQL • Spring Boot",
    },
    {
      title: "Frontend Developer Intern",
      company: "Technology Startup",
      skills: "React • JavaScript • CSS",
    },
    {
      title: "Full Stack Developer Intern",
      company: "IT Solutions",
      skills: "React • Node.js • MongoDB",
    },
    {
      title: "AI/ML Intern",
      company: "AI Technology Company",
      skills: "Python • Machine Learning • SQL",
    },
  ];

  const handleResumeUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      setResume(file);
      setAnalyzed(false);
    }
  };

  const handleAnalyze = () => {
    if (!resume) {
      alert("Please upload your resume first.");
      return;
    }

    setAnalyzed(true);
  };

  const generateQuestions = () => {
    setQuestions(questionBank[jobRole][difficulty]);
  };

  const generateSkills = () => {
    setSkillsGenerated(true);
  };

  const generateRoadmap = () => {
    setRoadmapGenerated(true);
  };

  const renderDashboard = () => (
    <>
      <section className="hero">
        <div>
          <p className="small-label">AI CAREER ASSISTANT</p>

          <h1>Welcome back, Harish! 👋</h1>

          <p>
            Build your skills, improve your resume and prepare for your dream
            career with AI-powered guidance.
          </p>
        </div>

        <div className="hero-badge">
          <strong>AI</strong>
          <span>Career Coach</span>
        </div>
      </section>

      <section className="stats">
        <div className="stat-card">
          <span>📄</span>

          <div>
            <h3>Resume Score</h3>
            <strong>{analyzed ? "78%" : "--"}</strong>
          </div>
        </div>

        <div className="stat-card">
          <span>🎯</span>

          <div>
            <h3>Skills Matched</h3>
            <strong>{skillsGenerated ? "12 / 20" : "--"}</strong>
          </div>
        </div>

        <div className="stat-card">
          <span>🎤</span>

          <div>
            <h3>Interview Practice</h3>
            <strong>
              {questions.length > 0 ? "5 Questions" : "Not Started"}
            </strong>
          </div>
        </div>
      </section>

      <div className="section-heading">
        <h2>Career Tools</h2>

        <p>Choose a tool to continue your career preparation.</p>
      </div>

      <section className="feature-grid">
        {features.map((feature) => (
          <div className="feature-card" key={feature.title}>
            <div className="feature-icon">{feature.icon}</div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

            <button onClick={() => setActive(feature.title)}>
              {feature.button} →
            </button>
          </div>
        ))}
      </section>
    </>
  );

  const renderResumeReview = () => (
    <section className="resume-page">
      <div className="page-header">
        <p className="small-label">RESUME ANALYZER</p>

        <h1>Resume Review</h1>

        <p>
          Upload your resume and check its ATS compatibility.
        </p>
      </div>

      <div className="resume-upload-card">
        <div className="upload-icon">📄</div>

        <h2>Upload Your Resume</h2>

        <p>Supported formats: PDF, DOC, DOCX</p>

        <label className="upload-button">
          Choose Resume

          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleResumeUpload}
          />
        </label>

        {resume && (
          <div className="selected-file">
            <span>📎 {resume.name}</span>

            <small>
              {(resume.size / 1024).toFixed(1)} KB
            </small>
          </div>
        )}

        <button className="analyze-button" onClick={handleAnalyze}>
          ✨ Analyze Resume
        </button>
      </div>

      {analyzed && (
        <div className="analysis-section">
          <div className="ats-card">
            <div>
              <p className="small-label">ATS SCORE</p>

              <h2>Your Resume Score</h2>

              <p>
                Your resume has a good foundation. A few improvements can make
                it more ATS-friendly.
              </p>
            </div>

            <div className="score-circle">
              <strong>78</strong>
              <span>/ 100</span>
            </div>
          </div>

          <div className="suggestions-card">
            <h2>Improvement Suggestions</h2>

            <div className="suggestion">
              <span>✓</span>

              <div>
                <h3>Add more job-specific keywords</h3>

                <p>
                  Include relevant keywords from the job description to improve
                  ATS matching.
                </p>
              </div>
            </div>

            <div className="suggestion">
              <span>✓</span>

              <div>
                <h3>Improve project descriptions</h3>

                <p>
                  Add technologies used and clearly explain your contribution.
                </p>
              </div>
            </div>

            <div className="suggestion">
              <span>✓</span>

              <div>
                <h3>Keep the resume concise</h3>

                <p>
                  Use clear sections and short bullet points for better
                  readability.
                </p>
              </div>
            </div>

            <div className="suggestion">
              <span>✓</span>

              <div>
                <h3>Highlight technical skills</h3>

                <p>
                  Clearly mention programming languages, frameworks and
                  databases.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );

  const renderInterviewQuestions = () => (
    <section className="interview-page">
      <div className="page-header">
        <p className="small-label">INTERVIEW PRACTICE</p>

        <h1>Interview Questions</h1>

        <p>
          Select a job role and difficulty level to practice interview
          questions.
        </p>
      </div>

      <div className="interview-controls">
        <div className="form-group">
          <label>Job Role</label>

          <select
            value={jobRole}
            onChange={(e) => {
              setJobRole(e.target.value);
              setQuestions([]);
            }}
          >
            <option>Java Developer</option>
            <option>Frontend Developer</option>
            <option>Data Scientist</option>
            <option>Full Stack Developer</option>
          </select>
        </div>

        <div className="form-group">
          <label>Difficulty</label>

          <select
            value={difficulty}
            onChange={(e) => {
              setDifficulty(e.target.value);
              setQuestions([]);
            }}
          >
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>

        <button className="generate-button" onClick={generateQuestions}>
          ✨ Generate Questions
        </button>
      </div>

      {questions.length > 0 && (
        <div className="questions-section">
          <div className="questions-header">
            <div>
              <h2>Practice Questions</h2>

              <p>
                {jobRole} • {difficulty} Level
              </p>
            </div>

            <span>5 Questions</span>
          </div>

          {questions.map((question, index) => (
            <div className="question-card" key={question}>
              <div className="question-number">{index + 1}</div>

              <p>{question}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );

  const renderRoadmap = () => (
    <section className="tool-page">
      <div className="page-header">
        <p className="small-label">CAREER ROADMAP</p>

        <h1>Career Roadmap</h1>

        <p>Choose your target role and generate a learning roadmap.</p>
      </div>

      <div className="tool-controls">
        <div className="form-group">
          <label>Target Job Role</label>

          <select
            value={roadmapRole}
            onChange={(e) => {
              setRoadmapRole(e.target.value);
              setRoadmapGenerated(false);
            }}
          >
            <option>Java Developer</option>
            <option>Frontend Developer</option>
            <option>Data Scientist</option>
            <option>Full Stack Developer</option>
          </select>
        </div>

        <button className="generate-button" onClick={generateRoadmap}>
          🗺️ Generate Roadmap
        </button>
      </div>

      {roadmapGenerated && (
        <div className="roadmap-list">
          {roadmapData[roadmapRole].map((step, index) => (
            <div className="roadmap-step" key={step}>
              <div className="step-number">{index + 1}</div>

              <div>
                <h3>{step}</h3>

                <p>
                  Complete this step to move closer to your {roadmapRole} goal.
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );

  const renderSkillGap = () => {
    const data = skillData[careerRole];

    return (
      <section className="tool-page">
        <div className="page-header">
          <p className="small-label">SKILL ANALYSIS</p>

          <h1>Skill Gap Analysis</h1>

          <p>
            Check the skills required for your target career and identify areas
            to improve.
          </p>
        </div>

        <div className="tool-controls">
          <div className="form-group">
            <label>Target Job Role</label>

            <select
              value={careerRole}
              onChange={(e) => {
                setCareerRole(e.target.value);
                setSkillsGenerated(false);
              }}
            >
              <option>Java Developer</option>
              <option>Frontend Developer</option>
              <option>Data Scientist</option>
              <option>Full Stack Developer</option>
            </select>
          </div>

          <button className="generate-button" onClick={generateSkills}>
            🧩 Analyze Skills
          </button>
        </div>

        {skillsGenerated && (
          <div className="skill-analysis">
            <div className="progress-card">
              <h2>Skill Match</h2>

              <div className="progress-value">{data.progress}%</div>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${data.progress}%` }}
                ></div>
              </div>

              <p>Your current skill match for {careerRole}.</p>
            </div>

            <div className="skills-card">
              <h2>Required Skills</h2>

              <div className="skill-list">
                {data.required.map((skill) => (
                  <span key={skill}>✓ {skill}</span>
                ))}
              </div>

              <h2 className="learning-title">Recommended to Improve</h2>

              <div className="skill-list">
                {data.learning.map((skill) => (
                  <span key={skill}>+ {skill}</span>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
    );
  };

  const renderJobs = () => (
    <section className="tool-page">
      <div className="page-header">
        <p className="small-label">JOB DISCOVERY</p>

        <h1>Job Recommendations</h1>

        <p>Explore sample opportunities based on common developer skills.</p>
      </div>

      <div className="job-list">
        {jobs.map((job) => (
          <div className="job-card" key={job.title}>
            <div className="job-icon">💼</div>

            <div className="job-info">
              <h2>{job.title}</h2>

              <p>{job.company}</p>

              <span>{job.skills}</span>
            </div>

            <button onClick={() => alert("Job details coming soon!")}>
              View Job →
            </button>
          </div>
        ))}
      </div>
    </section>
  );

  const renderProgress = () => (
    <section className="tool-page">
      <div className="page-header">
        <p className="small-label">CAREER TRACKER</p>

        <h1>Career Progress</h1>

        <p>Track your current preparation across important career areas.</p>
      </div>

      <div className="progress-grid">
        <div className="progress-item">
          <div>
            <h3>Java & Programming</h3>
            <strong>75%</strong>
          </div>

          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "75%" }}></div>
          </div>
        </div>

        <div className="progress-item">
          <div>
            <h3>Web Development</h3>
            <strong>65%</strong>
          </div>

          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "65%" }}></div>
          </div>
        </div>

        <div className="progress-item">
          <div>
            <h3>AI & Machine Learning</h3>
            <strong>55%</strong>
          </div>

          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "55%" }}></div>
          </div>
        </div>

        <div className="progress-item">
          <div>
            <h3>Interview Preparation</h3>
            <strong>45%</strong>
          </div>

          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "45%" }}></div>
          </div>
        </div>
      </div>
    </section>
  );

  const renderContent = () => {
    if (active === "Dashboard") return renderDashboard();
    if (active === "Resume Review") return renderResumeReview();
    if (active === "Interview Questions") return renderInterviewQuestions();
    if (active === "Career Roadmap") return renderRoadmap();
    if (active === "Skill Gap Analysis") return renderSkillGap();
    if (active === "Job Recommendations") return renderJobs();
    if (active === "Career Progress") return renderProgress();

    return renderDashboard();
  };

  return (
    <div className="app">
      <header className="navbar">
        <div>
          <h2>AI Career Coach</h2>
          <span>Smart Career Guidance Platform</span>
        </div>

        <div className="profile">HB&nbsp;&nbsp; Harish Baser</div>
      </header>

      <div className="layout">
        <aside className="sidebar">
          <p className="menu-title">MAIN MENU</p>

          {[
            ["Dashboard", "🏠"],
            ["Resume Review", "📄"],
            ["Interview Questions", "🎤"],
            ["Career Roadmap", "🗺️"],
            ["Skill Gap Analysis", "🧩"],
            ["Job Recommendations", "💼"],
            ["Career Progress", "📈"],
          ].map(([name, icon]) => (
            <button
              key={name}
              className={active === name ? "active" : ""}
              onClick={() => setActive(name)}
            >
              {icon} {name}
            </button>
          ))}
        </aside>

        <main className="main">{renderContent()}</main>
      </div>
    </div>
  );
}

export default App;
