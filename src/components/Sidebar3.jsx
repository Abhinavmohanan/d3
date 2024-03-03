"use client";
import Image from "next/image";
import { ScrollArea } from "../../@/components/ui/scroll-area";
import asana1 from "@/assets/images/asana1.jpg";
import { useEffect } from "react";

export default function Sidebar3(props) {
  useEffect(() => {
    console.log(props.asanas);
  }, []);
  return (
    <ScrollArea className="h-[500px] w-full overflow-auto bg-[#f7f0eb]">
      <div className="space-y-12">
        <div className="group relative">
          <h2 className="text-4xl font-semibold">
            <span className="mr-2 text-gray-400">09.</span>
            Corpse Pose (Savasana)
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Lie down on your back and spread your legs slightly apart, letting
            your feet fall open. Lay your arms alongside your body with palms
            facing up. Close your eyes and breathe deeply, allowing your body to
            relax and absorb the practice. Stay in this pose for 2 minutes.
          </p>
          {/* <Image src={asana9} height={100} width={100} /> */}
        </div>
      </div>
    </ScrollArea>
  );
}