import { Keyword, Project } from '@/payload-types'
import Image from 'next/image'
import './project_card.css'

type ProjectCardProps = Pick<
  Project,
  'title' | 'cardImage' | 'heroImage' | 'overview' | 'keywords' | 'role' | 'year'
>

const KeywordPill = ({ keyword }: { keyword: Keyword }) => {
  return <span className="keywordPill">{keyword.title}</span>
}

export const ProjectCard = ({ title, cardImage, overview, keywords }: ProjectCardProps) => {
  return (
    <div className="projectCard">
      {cardImage && typeof cardImage !== 'number' && cardImage.url && (
        <Image src={cardImage.url} alt={title} fill sizes="(max-width: 768px) 100vw, 100vw" />
      )}
      <div className="projectCardOverlay">
        <h2>{title}</h2>
        <div>{overview}</div>
        <div className="keywords">
          {keywords?.map((keyword) => {
            if (typeof keyword === 'number') return null
            return <KeywordPill key={keyword.id} keyword={keyword} />
          })}
        </div>
      </div>
    </div>
  )
}
