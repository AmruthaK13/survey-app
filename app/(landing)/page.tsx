// Landing page
import Image from "next/image";

import LandingNavbar from "@/components/LandingNavbar";
import { LandingHero } from "@/components/LandingHero";
import { LandingContent } from "@/components/LandingContent";

export default function Home() {
  return (
    <div className="h-full">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
  );
}
