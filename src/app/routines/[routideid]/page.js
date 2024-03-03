"use client"
// import { ScrollArea } from "@/components/ui/scroll-area"
import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Separator } from "../../../../@/components/ui/separator"
import Sidebar from "@/components/Sidebar"


import Sidebar3 from "@/components/Sidebar3";
import Sidebar1 from "@/components/Sidebar2";
import FinalBar from "@/components/FinalBar";


export default function Component() {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return <h1 className="text-8xl font-bold">Warm up</h1>;
      case 1:
        return <h1 className="text-8xl font-bold">Main Routine</h1>;
      case 2:
        return <h1 className="text-8xl font-bold">Cool Down</h1>;
        case 3:
        return <h1 className="text-8xl font-bold">End</h1>;
      default:
        return <h1 className="text-8xl font-bold">Warm up</h1>;
    }
  };
  const renderSidebar = () => {
    switch (step) {
      case 0:
        return <Sidebar/>
      case 1:
        return <Sidebar1/>
      case 2:
        return <Sidebar3/>
      case 3:
        return <FinalBar/>
      default:
        return <Sidebar/>
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f7f0eb] text-[#333333]">
      <div className="flex max-w-4xl  items-center justify-center w-full my-8">
        <div className="flex-1 items-center justify-center pr-4">
          <div className="space-y-6">
            {renderStep()}
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
          {renderSidebar()}


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
        <Button onClick={prevStep} className="bg-[#333333] text-white" variant="secondary">
          Previous
        </Button>
        <Separator className="w-px h-8 bg-[#d8c3a5] " />

        <Button onClick={nextStep} className="bg-[#333333] text-white" variant="secondary">
          Next
        </Button>
      </div>
    </div>
  )
}
