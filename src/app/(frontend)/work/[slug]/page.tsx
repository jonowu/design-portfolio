import { ProjectOverview } from '@/components/project_overview/project_overview'
import config from '@/payload.config'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'

export async function generateStaticParams() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const projects = await payload.find({
    collection: 'projects',
    draft: false,
    limit: 1000,
    select: {
      slug: true,
    },
  })

  return projects.docs.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { slug } = await params

  const projects = await payload.find({
    collection: 'projects',
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  if (!projects.docs.length) {
    notFound()
  }

  const project = projects.docs[0]

  return (
    <div>
      <h1>{project.title}</h1>
      {project.heroImage && typeof project.heroImage !== 'number' && project.heroImage.url && (
        <Image src={project.heroImage.url} alt={project.title} width={1191} height={753.84} />
      )}
      <ProjectOverview
        overview={project.overview}
        keywords={project.keywords}
        role={project.role}
        year={project.year}
      />
    </div>
  )
}
