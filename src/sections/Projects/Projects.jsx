import styles from './ProjectsStyles.module.css';
import blink from '../../assets/blink.png';
import jobportal from '../../assets/Capture.jpg'
import quickchat from '../../assets/quickchat.jpg'
import giphy from '../../assets/giphy.png';
import newsapp from '../../assets/newsapp.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={jobportal}
          link="https://job-portal-1jtc.onrender.com"
          h3="Job Portal"
          p="You can post job as a recruiter or apply for jobs as a Student"
        />
        <ProjectCard
          src={giphy}
          link="https://giphy-pi-jet.vercel.app/"
          h3="Giphy-Clone"
          p="AweSome Gifs Just click & see the magic"
        />
        <ProjectCard
          src={quickchat}
          link="https://quickchat-kgb4.onrender.com/signup"
          h3="QuickChat"
          p="Chatting App, One on One chat in real time"
        />
        <ProjectCard
          src={newsapp}
          link="https://github.com/praveenpatidar171/NewsApp"
          h3="NewsApp"
          p="See your daily dose of fresh news!!"
        />

      </div>
    </section>
  );
}

export default Projects;
