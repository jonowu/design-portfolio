import { Project } from '@/payload-types'
import './project_overview.css'

type ProjectOverviewProps = {
  overview: Project['overview']
  keywords: Project['keywords']
  role: Project['role']
  year: Project['year']
}

export const ProjectOverview = ({ overview, keywords, role, year }: ProjectOverviewProps) => {
  return (
    <div className="projectOverview">
      <div>
        <div className="projectOverviewTitle">Overview</div>
        <div>{overview}</div>
      </div>
      <div>
        <div className="projectOverviewTitle">Keywords</div>
        <div>
          {keywords
            ?.map((keyword) => {
              if (typeof keyword === 'number') return null
              return keyword.title
            })
            .join(', ')}
        </div>
      </div>
      <div>
        <div>
          <div className="projectOverviewTitle">Role</div>
          <div>{role}</div>
        </div>
        <div>
          <div>Year</div>
          <div>{year}</div>
        </div>
      </div>
    </div>
  )
}
