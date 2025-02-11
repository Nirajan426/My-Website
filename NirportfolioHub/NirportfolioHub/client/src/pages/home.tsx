import Hero from "@/components/sections/hero";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  return (
    <ScrollArea className="h-screen w-full">
      <main className="container mx-auto px-4 py-8">
        <Hero />
      </main>
    </ScrollArea>
  );
}