import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimatedText from "@/components/ui/animated-text";
import ProfileImage from "@/components/ui/profile-image";
import SocialLinks from "@/components/ui/social-links";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        {/* Light mode background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-200/40 via-purple-200/40 to-pink-200/40 dark:opacity-0 transition-opacity duration-500" />
        {/* Floating orbs for light mode */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/20 to-blue-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000" />

        {/* Dark mode background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-blue-900/20 to-purple-900/20 opacity-0 dark:opacity-100 transition-opacity duration-500" />
      </div>

      <Card className="w-full max-w-4xl bg-background/60 dark:bg-background/40 backdrop-blur-md relative z-10 border-2">
        <CardContent className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <ProfileImage />
          </div>
          <div className="space-y-6 text-center md:text-left">
            <AnimatedText 
              text="Hi, I am Nirajan Chaudhary"
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
            />
            <p className="text-lg text-muted-foreground">
              Engineering student passionate about coding and building amazing things.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button 
                className="w-full sm:w-auto bg-gradient-to-r from-primary to-blue-600 hover:opacity-90 transition-opacity"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <SocialLinks />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}