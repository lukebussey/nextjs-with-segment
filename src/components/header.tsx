import Link from "next/link"

export default function Header() {
  return (
    <header className="m-4 space-x-4">
      <Link href="/">Home</Link>
      <Link href="/page1">Page 1</Link>
      <Link href="/page2?query=test">Page 2</Link>
    </header>
  )
}