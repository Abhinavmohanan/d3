
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FinalBar() {
  return (
    <div className="min-h-screen  bg-[#f7f0eb] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto text-center">
        <h1 className="text-4xl font-extrabold sm:text-5xl">Thank You For Practicing</h1>
        <p className="mt-4 text-xl text-gray-600">Your routine is complete. Feel the serenity in your heart.</p>
        <Link href="/">
        <Button className="mt-8 bg-black text-white" href="/">
          Back to Home
        </Button>
        </Link>
      </div>
    </div>
  )
}

