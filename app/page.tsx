import IconCloud from "@/components/magicui/icon-cloud";
import LetterPullup from "@/components/magicui/letter-pullup";

const slugs = [
  "typescript",
  "javascript",
  "python",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "vercel",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "androidstudio",
  "figma",
  "supabase",
  "linux",
  "shadcnui",
];

export default function Home() {
  return (
    <section className="py-8">
      <div className="container">
        <h1 className="text-2xl font-bold">
          <LetterPullup words={"Welcome"} delay={0.05} />
        </h1>
        <IconCloud iconSlugs={slugs} />
      </div>
    </section>
  );
}
