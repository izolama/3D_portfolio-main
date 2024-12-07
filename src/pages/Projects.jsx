import { Link } from 'react-router-dom';

import { CTA } from '../components';
import { projects } from '../constants';
import { arrow } from '../assets/icons';

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{' '}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Projects
        </span>
      </h1>

      <p className="text-slate-500 mt-2 leading-relaxed">
        Over the years, I’ve had the privilege of working on several meaningful
        projects, but these are the ones I’m most proud of. Built with passion
        and a dedication to excellence, many of these projects are open-source.
        If you find something that inspires you or sparks your interest, feel
        free to dive into the codebase, share your thoughts, or contribute to
        its evolution. Your ideas and collaboration are always appreciated!
      </p>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt={project.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>

              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  The source code is proprietary and restricted for internal use
                  only
                </Link>
              </div>

              {/* Embed YouTube Video */}
              <iframe
                className="w-full max-h-[300px] aspect-video object-cover rounded-lg mt-5"
                src={`https://www.youtube.com/embed/${project.videoId}`}
                title={project.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

const handleFullscreen = (videoId) => {
  const videoElement = document.getElementById(videoId);

  if (videoElement) {
    // Masuk ke mode fullscreen
    if (videoElement.requestFullscreen) {
      videoElement.requestFullscreen();
    } else if (videoElement.webkitRequestFullscreen) {
      videoElement.webkitRequestFullscreen(); // Safari
    } else if (videoElement.msRequestFullscreen) {
      videoElement.msRequestFullscreen(); // IE/Edge
    } else {
      console.error('Fullscreen API is not supported in this browser.');
    }
  }
};

export default Projects;
