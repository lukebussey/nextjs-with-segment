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
    <>
      {slug}
      <Button/>
    </>
  )
}