"use client";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import TypewriterComponent from "typewriter-effect";
import { Button } from "./ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();
  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>Unleashing the Power of AI in Scientific Surveys</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-sky-900 to-teal-300">
          <TypewriterComponent
            options={{
              strings: [
                "Unparalleled Accuracy.",
                "Customizable Templates.",
                "Real-Time Data Analysis.",
                "User-Friendly Interface.",
                "Advanced Analytics & Insights.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        Create scientific surveys 10x faster.
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button
            variant="premium"
            className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
          >
            Start Generating For Free
          </Button>
        </Link>
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal">
        No credit card required.
      </div>
    </div>
  );
};
