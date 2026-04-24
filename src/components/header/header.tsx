import Link from 'next/link'
import './header.css'

export const Header = () => {
  return (
    <header className="header">
      <Link href="/">chloe leung</Link>
      <div className="headerLinks">
        <Link href="/">Work</Link>
        <Link href="/">Play</Link>
        <Link href="/">About</Link>
      </div>
    </header>
  )
}
