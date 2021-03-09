import { GetServerSideProps, NextPage } from 'next';
import { formModel } from '../../models';
import { ApiRoutes, Project } from '../../types';
import dummyForm from '../../utils/dummies/dummyForm.json';
import styles from './Projects.module.scss';

const createNewProject = async () => {
  await fetch(ApiRoutes.projects, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dummyForm),
  });
};

interface Props {
  projects: Project[];
}

const Projects: NextPage<Props> = () => {
  // TODO: if session is loading return Loader component (create one);
  return (
    <div className={styles.projectsWrapper}>
      <button
        className={styles.projectsBtn}
        type="button"
        onClick={createNewProject}
      >
        Create new project
      </button>
    </div>
  );
};

export default Projects;
