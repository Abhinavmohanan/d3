"use client"
import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"
import home1 from "@/assets/images/home_image_3.jpg"
import home2 from "@/assets/images/home_image_2.jpg"
import Image from "next/image"
import { useRouter } from "next/navigation"


export default function Component() {
  const router = useRouter();
  return (
    <div className="bg-[#f4f1ea] h-screen">
      <header className="flex justify-between items-center py-6 px-10">
        <div className="flex items-center space-x-4">
          <button className="uppercase tracking-widest font-semibold text-sm">Menu</button>
          <div className="flex items-center space-x-1">
            <LocateIcon className="text-gray-500" />
            <span className="text-xs">Kochi, Kerala </span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span className="font-bold text-lg">Zenflow</span>
        </div>
        <div className="flex items-center space-x-4">
          {/* <div className="flex space-x-1">
            <Link className="text-xs uppercase" href="#">
              En
            </Link>
            <span className="text-xs">/</span>
            <Link className="text-xs uppercase" href="#">
              Ru
            </Link>
          </div> */}
          <Button className="border border-black text-white text-xs uppercase py-2 px-4 transition-colors hover:bg-[#e5e2db] hover:text-[#1a1a1a]">
            Login
          </Button>
        </div>
      </header>
      <main className="flexjustify-center items-center px-10 py-20">
        <div className="max-w-screen max-h-screen flex justify-center items-center space-x-4">
          <Image src={home2} width={250} style={{ borderRadius: "50%", position: "absolute", right: "8%", top: "45%", zIndex: 1 }} />
          <div style={{ zIndex: 2 }}>
            <div className="flex flex-row" >
              <h1 className="font-serif leading-none tracking-tighter mb-4" style={{ fontSize: "11rem" }}>Zenflow Yoga</h1>
              <h2 className="font-serif text-8xl  text-red-500 leading-none tracking-tighter">
                <PlusIcon className="w-12 h-12 hover:animate-spin" />
              </h2>
            </div>
            <p className="font-serif text-4xl leading-none tracking-tighter mt-4">Unleashing Serenity, In the Heart of Kochi</p>
          </div>
          <Image src={home1} width={400} style={{ padding: "10px", left: "5%", bottom: "12%", position: "absolute", zIndex: 1 }} />
        </div>
      </main>
      <footer className="flex justify-center items-center py-6">
        <Button onClick={() => {
          router.push("/routines")
        }} className="border border-black text-white text-xs uppercase py-2 px-4  transition-colors hover:bg-[#c4c1ba] hover:text-[#2d2d2d]">
          Get yoga routines
        </Button>
      </footer>

    </div>
  )
}

function LocateIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}