import { Intro } from '@/components/intro/intro'
import { ProjectCard } from '@/components/project_card/project_card'
import config from '@/payload.config'
import Link from 'next/link'
import { getPayload } from 'payload'
import './styles.css'

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const [projects, home] = await Promise.all([
    payload.find({
      collection: 'projects',
      limit: 20,
    }),

    payload.findGlobal({
      slug: 'home',
    }),
  ])

  return (
    <div className="home">
      <div className="introContainer">
        <Intro tagline={home.tagline} pillOne={home.pillOne} pillTwo={home.pillTwo} />
      </div>
      <div className="projects">
        {projects.docs.map((project) => (
          <Link key={project.slug} href={`/work/${project.slug}`}>
            <ProjectCard {...project} />
            <div className="projectTitle">{project.client}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
