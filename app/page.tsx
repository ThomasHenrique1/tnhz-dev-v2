import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Profile from "@/components/sections/profile";
import Stack from "@/components/sections/Stack";
import Contato from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Profile />
      <Stack />
      <Contato />
    </>
  );
}