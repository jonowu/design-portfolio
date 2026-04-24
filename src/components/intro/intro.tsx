import { Home, Media } from '@/payload-types'
import flower from './assets/flower.svg'
import star from './assets/star.svg'
import './intro.css'
import Image from 'next/image'

type IntroProps = {
  tagline: Home['tagline']
  pillOne?: Home['pillOne']
  pillTwo?: Home['pillTwo']
}

export const Intro = ({ tagline, pillOne, pillTwo }: IntroProps) => {
  return (
    <div className="intro">
      <div className="row">
        <img src={flower.src} width={127} />
        <span className="heading">I'm</span>
        {pillOne && typeof pillOne !== 'number' && pillOne.url && (
          <Image
            src={pillOne.url}
            alt=""
            width={177}
            height={108}
            objectFit="fill"
            className="pillImage"
          />
        )}
      </div>
      <div className="row">
        {pillTwo && typeof pillTwo !== 'number' && pillTwo.url && (
          <Image
            src={pillTwo.url}
            alt=""
            width={177}
            height={108}
            objectFit="fill"
            className="pillImage"
          />
        )}
        <span className="heading">Chloe</span>
        <img src={star.src} width={127} />
      </div>
      <div className="tagline">{tagline}</div>
    </div>
  )
}
