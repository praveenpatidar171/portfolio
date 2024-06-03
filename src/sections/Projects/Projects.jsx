import styles from './ProjectsStyles.module.css';
import blink from '../../assets/blink.png';
import giphy from '../../assets/giphy.png';
import newsapp from '../../assets/newsapp.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={blink}
          link="https://github.com/praveenpatidar171/chat-app"
          h3="BlinkChat"
          p= "Chatting App, it uses Socket.io for real-time communication"
        />
        <ProjectCard
          src={giphy}
          link="https://giphy-pi-jet.vercel.app/"
          h3="Giphy-Clone"
          p="AweSome Gifs Just click & see the magic"
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
