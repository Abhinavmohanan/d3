// import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import Link from "next/link";
import { Button } from "../../../@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../../../@/components/ui/card";

export default function Component() {
  return (
    <div className="bg-[#f4f1ea]">
      <nav className="flex justify-between items-center py-6 px-8">
        <div className="flex items-center space-x-4">
          <button className="uppercase tracking-widest font-semibold text-sm">
            Menu
          </button>
          <span className="text-sm">
            <LocateIcon className="inline-block w-4 h-4 mr-1" />
            Kochi, Kerala
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/">
            <span className="font-bold text-lg">Zenflow</span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Link
              className="text-xs uppercase"
              href="/pricing
          "
            >
              Pricing
            </Link>
          </div>
          <Button className="border border-black text-white text-xs uppercase py-2 px-4 transition-colors hover:bg-[#e5e2db] hover:text-[#1a1a1a]">
            Login
          </Button>
        </div>
      </nav>
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold uppercase tracking-widest mb-6">
          Pricing
        </h1>
        <p className="text-lg mb-12">Choose the plan that's right for you</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
          <Card className="w-full bg-[#f8f0e3] rounded-lg shadow-lg transition-transform transform-gpu hover:scale-105 dark:bg-gray-900">
            <CardHeader className="bg-[#f8f0e3] p-4 rounded-t-lg dark:bg-gray-900">
              <CardTitle className="text-xl font-bold">Basic</CardTitle>
              <CardDescription>For beginners</CardDescription>
            </CardHeader>
            <CardContent className="p-6 dark:bg-gray-900">
              <p className="text-4xl font-bold mb-4">$19</p>
              <p className="text-sm mb-8">Per month</p>
              <ul className="text-left mb-8">
                <li className="mb-2">5 classes per month</li>
                <li className="mb-2">Access to online resources</li>
                <li className="mb-2">Email support</li>
              </ul>
            </CardContent>
            <CardFooter className="flex justify-center bg-[#f8f0e3] p-4 rounded-b-lg dark:bg-gray-900">
              <Button variant="default">Choose Basic</Button>
            </CardFooter>
          </Card>
          <Card className="w-full bg-[#f8f0e3] rounded-lg shadow-lg transition-transform transform-gpu hover:scale-105 dark:bg-gray-900">
            <CardHeader className="bg-[#f8f0e3] p-4 rounded-t-lg dark:bg-gray-900">
              <CardTitle className="text-xl font-bold">Standard</CardTitle>
              <CardDescription>Most popular</CardDescription>
            </CardHeader>
            <CardContent className="p-6 dark:bg-gray-900">
              <p className="text-4xl font-bold mb-4">$49</p>
              <p className="text-sm mb-8">Per month</p>
              <ul className="text-left mb-8">
                <li className="mb-2">10 classes per month</li>
                <li className="mb-2">Access to online resources</li>
                <li className="mb-2">Priority email support</li>
              </ul>
            </CardContent>
            <CardFooter className="flex justify-center bg-[#f8f0e3] p-4 rounded-b-lg dark:bg-gray-900">
              <Button variant="default">Choose Standard</Button>
            </CardFooter>
          </Card>
          <Card className="w-full bg-[#f8f0e3] rounded-lg shadow-lg transition-transform transform-gpu hover:scale-105 dark:bg-gray-900">
            <CardHeader className="bg-[#f8f0e3] p-4 rounded-t-lg dark:bg-gray-900">
              <CardTitle className="text-xl font-bold">Premium</CardTitle>
              <CardDescription>For enthusiasts</CardDescription>
            </CardHeader>
            <CardContent className="p-6 dark:bg-gray-900">
              <p className="text-4xl font-bold mb-4">$99</p>
              <p className="text-sm mb-8">Per month</p>
              <ul className="text-left mb-8">
                <li className="mb-2">Unlimited classes</li>
                <li className="mb-2">Access to all online resources</li>
                <li className="mb-2">24/7 support</li>
              </ul>
            </CardContent>
            <CardFooter className="flex justify-center bg-[#f8f0e3] p-4 rounded-b-lg dark:bg-gray-900">
              <Button variant="default">Choose Premium</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  );
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
  );
}
