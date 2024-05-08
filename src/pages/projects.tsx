import { Project } from '../components/projects'
import { projectDetails } from '../constants/projects'
import DefaultLayout from '../layouts'

const Projects = () => {
	return (
		<DefaultLayout meta={{ title: 'Project' }} mini={false}>
			<div className="grid md:grid-cols-3 grid-cols-1">
				{Object.values(projectDetails).map(details => (
					<Project key={details.heading} {...details} />
				))}
			</div>
		</DefaultLayout>
	)
}
export default Projects
