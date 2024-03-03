import { ScrollArea } from "../../@/components/ui/scroll-area";

export default function Sidebar() {
  return (
    <ScrollArea className="h-[500px] w-full overflow-auto bg-[#f7f0eb]">
      <div className="space-y-12">
        <div className="group relative">
          <h2 className="text-4xl font-semibold">
            <span className="mr-2 text-gray-400">01.</span>
            BALASANA{"\n              "}
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Begin by sitting on your heels, fold forward to rest your forehead
            on the mat, stretching your arms forward. This pose helps to calm
            the mind and gently stretches the hips, thighs, and ankles. Hold for
            1 minute.
          </p>
          <img
            alt="Hatha Yoga"
            className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
            height="400"
            src="/placeholder.svg"
            style={{
              aspectRatio: "800/400",
              objectFit: "cover",
            }}
            width="800"
          />
        </div>
        <div className="group relative">
          <h2 className="text-4xl font-semibold">
            <span className="mr-2 text-gray-400">02.</span>
            BITILASANA{"\n              "}
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Come to a table-top position, align your wrists under shoulders and
            your knees under hips. Inhale, arch your back, and look up for Cow
            pose; exhale, round your spine, and tuck your chin to your chest for
            Cat pose.  Repeat for 1 minute, flowing with your breath.
          </p>
          <img
            alt="Hatha Yoga with Tibetan Bowls"
            className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
            height="400"
            src="src/images/yogapose1.jpeg"
            style={{
              aspectRatio: "800/400",
              objectFit: "cover",
            }}
            width="800"
          />
        </div>
      </div>
    </ScrollArea>
  );
}
