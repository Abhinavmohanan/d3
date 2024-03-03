
// import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Separator } from "../../../../@/components/ui/separator"
import Sidebar from "@/components/Sidebar"


export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f7f0eb] text-[#333333]">
      <div className="flex max-w-4xl  items-center justify-center w-full my-8">
        <div className="flex-1 items-center justify-center overflow-y-auto pr-4">
          <div className="space-y-6">
            <h1 className="text-8xl font-bold">Warm up</h1>
            {/* <p className="text-lg">
              Start your yoga session with some gentle warm-up exercises to ease your body into the practice.
            </p>
            <p className="text-lg">
              Warm-up exercises help to increase body temperature, reduce the risk of injuries, and prepare the mind for
              a deeper practice.
            </p> */}
          </div>
        </div>
        <div aria-hidden="true" className="w-px bg-[#d8c3a5] mx-8" />
        <div className="flex-1">
          <Sidebar/>
          
          {/* <img
            alt="Yoga practice"
            className="w-full h-auto"
            height="500"
            src="/placeholder.svg"
            style={{
              aspectRatio: "500/500",
              objectFit: "cover",
            }}
            width="500"
          /> */}
        </div>
      </div>
      <div className="flex space-x-4 my-8">
        <Button className="bg-[#333333] text-white" variant="secondary">
          Previous
        </Button>
        <Separator  className="w-px h-8 bg-[#d8c3a5] " />
 
        <Button className="bg-[#333333] text-white" variant="secondary">
          Next
        </Button>
      </div>
    </div>
  )
}

