import Button from "@/components/button"

export default function Page({
  params: {
    slug
  }
}: {
  params: {
    slug: string
  }
}) {
  return (
    <main className="m-4">
      <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mb-4">{slug}</h1>
      <Button/>
    </main>
  )
}