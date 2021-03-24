import React from 'react';
import { FiPlay } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function SingleProject({ projects, modal, handleFilter }) {
  //   const [id, tech] = projects;
  return (
    <div className="single">
      <div className="single-data">
        <img
          onClick={() => handleFilter(projects.name)}
          src={projects.img}
          alt=""
        />
        <h4 onClick={() => handleFilter(projects.name)}>{projects.name}</h4>
        {modal ? (
          <div className="description">
            <p>{projects.desc}</p>
            <div className="project-content">
              <div className="techs">{projects.techs}</div>
              <div className="links-project">
                <Link
                  to={{ pathname: projects.linkGit }}
                  target="_blank"
                  className="icon-project"
                >
                  <FaGithub className="github-project" />
                </Link>
                <Link
                  to={{ pathname: projects.linkPage }}
                  target="_blank"
                  className="icon-project"
                >
                  <FiPlay className="play-project" />
                </Link>
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default SingleProject;
