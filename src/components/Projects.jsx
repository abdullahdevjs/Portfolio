import "./Projects.css";

import { motion } from "framer-motion";

import {
  FiArrowUpRight,
  FiGithub,
  FiExternalLink,
  FiDatabase,
  FiCpu,
  FiCode,
  FiShield,
  FiBarChart2,
  FiActivity,
  FiLayers,
  FiPieChart,
  FiFileText,
  FiTarget,
  FiSearch,
} from "react-icons/fi";


/* =========================================================
   PROJECT DATA
   ========================================================= */

const projects = [

  /* =======================================================
     01 — AI FINANCE MANAGER
     ======================================================= */

  {
    id: "01",

    type: "FEATURED / DATA & AI",

    status: "COMPLETED",

    title: "AI Finance Manager",

    subtitle:
      "Personal finance analytics, budgeting and intelligent insights.",

    description:
      "A Python-based personal finance management application built with Streamlit. It helps users track expenses, manage budgets, analyze financial data, generate reports and understand spending patterns through interactive analytics and intelligent insights.",

    category:
      "PYTHON · FINANCE · DATA ANALYTICS",

    icon: <FiBarChart2 />,

    visualType: "finance",

    technologies: [
      "Python",
      "Streamlit",
      "Pandas",
      "NumPy",
      "Data Visualization",
    ],

    features: [
      {
        icon: <FiDatabase />,
        title: "Expense Tracking",
        text:
          "Record and organize financial transactions.",
      },

      {
        icon: <FiTarget />,
        title: "Budget Management",
        text:
          "Monitor spending against defined budgets.",
      },

      {
        icon: <FiBarChart2 />,
        title: "Financial Analytics",
        text:
          "Analyze spending patterns and financial trends.",
      },

      {
        icon: <FiFileText />,
        title: "Reports",
        text:
          "Generate structured financial summaries and reports.",
      },

      {
        icon: <FiPieChart />,
        title: "Visual Insights",
        text:
          "Understand financial data through interactive visualizations.",
      },

      {
        icon: <FiCpu />,
        title: "Intelligent Insights",
        text:
          "Surface useful observations from financial activity.",
      },
    ],

    github:
      "https://github.com/abdullahdevjs/Expense-tracker",

    live:
      "",

    featured: true,
  },


  /* =======================================================
     02 — FINANCIAL FRAUD DETECTION
     ======================================================= */

  {
    id: "02",

    type: "DATA SCIENCE / MACHINE LEARNING",

    status: "IN PROGRESS",

    title:
      "Financial Fraud Detection System",

    subtitle:
      "Machine learning for detecting suspicious financial activity.",

    description:
      "A machine-learning based financial fraud detection system currently under development. The project focuses on financial transaction data, identifying suspicious patterns and developing a practical machine-learning workflow for fraud classification.",

    category:
      "MACHINE LEARNING · FINANCE",

    icon: <FiShield />,

    visualType: "fraud",

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Machine Learning",
      "Statistics",
    ],

    features: [
      {
        icon: <FiDatabase />,
        title: "Transaction Data",
        text:
          "Work with structured financial transaction data.",
      },

      {
        icon: <FiSearch />,
        title: "Pattern Analysis",
        text:
          "Explore transaction behaviour and suspicious patterns.",
      },

      {
        icon: <FiActivity />,
        title: "Risk Signals",
        text:
          "Identify characteristics associated with potentially fraudulent activity.",
      },

      {
        icon: <FiCpu />,
        title: "ML Pipeline",
        text:
          "Develop a workflow for model training and evaluation.",
      },
    ],

    github:
      "",

    live:
      "",

    featured: false,
  },


  /* =======================================================
     03 — QUIZ APPLICATION
     ======================================================= */

  {
    id: "03",

    type: "WEB APPLICATION",

    status: "COMPLETED",

    title:
      "Quiz Application",

    subtitle:
      "Interactive quiz platform built around a structured user experience.",

    description:
      "A web-based quiz application focused on interactive question answering, application logic and a clean user experience. This project represents my broader software and web-development experience alongside my primary data-focused direction.",

    category:
      "WEB DEVELOPMENT · APPLICATION",

    icon: <FiCode />,

    visualType: "quiz",

    technologies: [
      "React",
      "JavaScript",
      "CSS",
      "Web Development",
    ],

    features: [
      {
        icon: <FiLayers />,
        title: "Interactive UI",
        text:
          "Structured interface for an engaging quiz experience.",
      },

      {
        icon: <FiActivity />,
        title: "User Interaction",
        text:
          "Handle question selection and application flow.",
      },

      {
        icon: <FiCode />,
        title: "Application Logic",
        text:
          "Implement frontend logic for quiz functionality.",
      },
    ],

    github:
      "https://github.com/abdullahdevjs/quiz",

    live:
      "",

    featured: false,
  },

];


/* =========================================================
   FINANCE VISUAL
   ========================================================= */

function FinanceVisual() {

  return (

    <div className="project-visual project-visual-finance">

      <div className="visual-grid" />

      <div className="finance-orbit orbit-a" />

      <div className="finance-orbit orbit-b" />


      {/* =================================================
          MAIN FINANCE DASHBOARD
      ================================================= */}

      <div className="finance-dashboard">


        <div className="dashboard-top">

          <span>
            AI FINANCE MANAGER
          </span>

          <i />

        </div>


        <div className="dashboard-value">

          <small>
            FINANCIAL OVERVIEW
          </small>

          <strong>
            ₹ 84,240
          </strong>

        </div>


        {/* ANALYTICS CHART */}

        <div className="dashboard-chart">

          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />

        </div>


        {/* KPI */}

        <div className="dashboard-bottom">


          <div>

            <small>
              BUDGET
            </small>

            <b>
              72%
            </b>

          </div>


          <div>

            <small>
              SAVINGS
            </small>

            <b>
              +18.4%
            </b>

          </div>


        </div>


        {/* FINANCE MODULES */}

        <div className="dashboard-modules">


          <span>

            <FiPieChart />

            EXPENSES

          </span>


          <span>

            <FiTarget />

            BUDGET

          </span>


          <span>

            <FiFileText />

            REPORTS

          </span>


        </div>


      </div>


      {/* DATA POINTS */}

      <div className="visual-data-point point-a" />

      <div className="visual-data-point point-b" />

      <div className="visual-data-point point-c" />

    </div>

  );

}


/* =========================================================
   FRAUD DETECTION VISUAL
   ========================================================= */

function FraudVisual() {

  return (

    <div className="project-visual project-visual-fraud">


      <div className="fraud-network">

        <span className="network-node n1" />
        <span className="network-node n2" />
        <span className="network-node n3" />
        <span className="network-node n4" />
        <span className="network-node n5" />
        <span className="network-node n6" />


        <span className="network-line l1" />
        <span className="network-line l2" />
        <span className="network-line l3" />
        <span className="network-line l4" />
        <span className="network-line l5" />

      </div>


      <div className="fraud-analysis-card">


        <div className="fraud-card-header">

          <span>
            TRANSACTION ANALYSIS
          </span>

          <FiActivity />

        </div>


        <div className="fraud-score">


          <div className="fraud-score-circle">

            <span>
              ML
            </span>

          </div>


          <div>

            <small>
              MODEL SIGNAL
            </small>

            <strong>
              RISK ANALYSIS
            </strong>

          </div>


        </div>


        <div className="fraud-bars">

          <span />
          <span />
          <span />
          <span />
          <span />

        </div>


        <div className="fraud-status">

          <i />

          MODEL DEVELOPMENT

        </div>


      </div>


    </div>

  );

}


/* =========================================================
   QUIZ VISUAL
   ========================================================= */

function QuizVisual() {

  return (

    <div className="project-visual project-visual-quiz">


      <div className="quiz-interface">


        <div className="quiz-header">

          <span>
            QUIZ APPLICATION
          </span>

          <FiLayers />

        </div>


        <div className="quiz-question">

          <small>
            QUESTION 05
          </small>

          <strong>
            Select the correct answer
          </strong>

        </div>


        <div className="quiz-options">

          <span>
            A&nbsp;&nbsp; Option
          </span>

          <span>
            B&nbsp;&nbsp; Option
          </span>

          <span>
            C&nbsp;&nbsp; Option
          </span>

        </div>


        <div className="quiz-progress">

          <i />

        </div>


      </div>


    </div>

  );

}


/* =========================================================
   PROJECT VISUAL SWITCHER
   ========================================================= */

function ProjectVisual({ type }) {

  if (type === "finance") {

    return (
      <FinanceVisual />
    );

  }


  if (type === "fraud") {

    return (
      <FraudVisual />
    );

  }


  return (
    <QuizVisual />
  );

}


/* =========================================================
   PROJECT CARD
   ========================================================= */

function ProjectCard({
  project,
  index,
}) {

  return (

    <motion.article

      className={`project-card ${
        project.featured
          ? "project-card-featured"
          : ""
      }`}

      initial={{
        opacity: 0,
        y: 25,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      viewport={{
        once: true,
        amount: 0.12,
      }}

      transition={{
        duration: 0.65,
        delay:
          index * 0.08,
      }}

    >


      {/* =================================================
          CARD HEADER
      ================================================= */}

      <div className="project-card-header">


        <div className="project-meta">

          <span className="project-number">
            {project.id}
          </span>

          <span className="project-type">
            {project.type}
          </span>

        </div>


        <span
          className={`project-status ${
            project.status === "IN PROGRESS"
              ? "project-status-progress"
              : ""
          }`}
        >

          <i />

          {project.status}

        </span>


      </div>


      {/* =================================================
          VISUAL
      ================================================= */}

      <ProjectVisual
        type={project.visualType}
      />


      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="project-content">


        <div className="project-title-block">


          <div className="project-icon">

            {project.icon}

          </div>


          <div>


            <span className="project-category">

              {project.category}

            </span>


            <h3>
              {project.title}
            </h3>


            <h4>
              {project.subtitle}
            </h4>


          </div>


        </div>


        {/* DESCRIPTION */}

        <p className="project-description">

          {project.description}

        </p>


        {/* =================================================
            FEATURES
        ================================================= */}

        <div className="project-feature-grid">


          {project.features.map(
            (feature) => (

              <div
                className="project-feature"
                key={feature.title}
              >


                <div className="project-feature-icon">

                  {feature.icon}

                </div>


                <div>

                  <strong>
                    {feature.title}
                  </strong>

                  <span>
                    {feature.text}
                  </span>

                </div>


              </div>

            )
          )}


        </div>


        {/* =================================================
            TECHNOLOGIES
        ================================================= */}

        <div className="project-technologies">


          {project.technologies.map(
            (technology) => (

              <span
                key={technology}
              >

                <i />

                {technology}

              </span>

            )
          )}


        </div>


        {/* =================================================
            ACTIONS
        ================================================= */}

        <div className="project-actions">


          {project.github ? (

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link project-link-primary"
            >

              <FiGithub />

              <span>
                View Code
              </span>

              <FiArrowUpRight />

            </a>

          ) : (

            <span
              className="project-link project-link-disabled"
            >

              <FiCode />

              <span>
                Repository in progress
              </span>

            </span>

          )}


          {project.live ? (

            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link project-link-secondary"
            >

              <FiExternalLink />

              <span>
                Live Demo
              </span>

            </a>

          ) : null}


        </div>


      </div>


    </motion.article>

  );

}


/* =========================================================
   PROJECTS COMPONENT
   ========================================================= */

function Projects() {

  return (

    <section
      className="projects-section"
      id="projects"
    >


      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div
        className="projects-background"
        aria-hidden="true"
      >

        <span className="projects-bg-grid" />

        <span className="projects-bg-glow glow-one" />

        <span className="projects-bg-glow glow-two" />

        <span className="projects-bg-node node-one" />

        <span className="projects-bg-node node-two" />

        <span className="projects-bg-node node-three" />

      </div>


      <div className="container projects-container">


        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <motion.div
          className="projects-heading"

          initial={{
            opacity: 0,
            y: 25,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
            amount: 0.2,
          }}

          transition={{
            duration: 0.65,
          }}
        >


          <div>


            <div className="section-eyebrow">

              <span />

              05 / SELECTED WORK

            </div>


            <h2>

              Projects built

              <span>
                around real problems.
              </span>

            </h2>


          </div>


          <div className="projects-heading-copy">


            <span>
              DATA · AI · SOFTWARE
            </span>


            <p>

              A selection of practical projects across
              data analytics, financial technology,
              machine learning and software development.

            </p>


          </div>


        </motion.div>


        {/* =================================================
            PROJECT LIST
        ================================================= */}

        <div className="projects-list">


          {projects.map(
            (project, index) => (

              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />

            )
          )}


        </div>


        {/* =================================================
            CURRENT DIRECTION
        ================================================= */}

        <motion.div
          className="projects-footer"

          initial={{
            opacity: 0,
            y: 15,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.55,
          }}
        >


          <div className="projects-footer-icon">

            <FiCpu />

          </div>


          <div>

            <span>
              CURRENT DIRECTION
            </span>

            <strong>
              Data Science · Machine Learning · AI Engineering
            </strong>

          </div>


          <div className="projects-footer-line">

            <i />

          </div>


        </motion.div>


      </div>


    </section>

  );

}


export default Projects;