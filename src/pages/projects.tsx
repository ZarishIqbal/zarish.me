import DefaultLayout from 'layouts'
import { projectDetails } from 'constants/projects'
import { Project } from 'components/projects'

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
