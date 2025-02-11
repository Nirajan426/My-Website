import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SiPython, SiCplusplus, SiC, SiHtml5, SiCss3, SiJavascript, SiPhp, SiJquery } from "react-icons/si";

const skills = [
  { name: "Python", icon: SiPython },
  { name: "C++", icon: SiCplusplus },
  { name: "C", icon: SiC },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "PHP", icon: SiPhp },
  { name: "jQuery", icon: SiJquery }
];

export default function Skills() {
  return (
    <section>
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center gap-2 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
              >
                <skill.icon className="w-12 h-12 text-primary" />
                <span className="font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
