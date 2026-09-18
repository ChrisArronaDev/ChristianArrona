import type { IconType } from "react-icons";
import { FaJava } from "react-icons/fa6";
import {
  SiAngular,
  SiBootstrap,
  SiCss,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNestjs,
  SiNetlify,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandOpenai, TbDatabase } from "react-icons/tb";

const technologyIcons: Record<string, IconType> = {
  HTML5: SiHtml5,
  CSS3: SiCss,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Java: FaJava,
  Python: SiPython,
  PHP: SiPhp,
  Angular: SiAngular,
  "Node.js": SiNodedotjs,
  NestJS: SiNestjs,
  Bootstrap: SiBootstrap,
  React: SiReact,
  "Tailwind CSS": SiTailwindcss,
  TypeORM: TbDatabase,
  MySQL: SiMysql,
  "SQL Server": TbDatabase,
  PostgreSQL: SiPostgresql,
  GitHub: SiGithub,
  Netlify: SiNetlify,
  Scrum: TbDatabase,
  "IA aplicada": TbBrandOpenai,
};

export function TechnologyIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = technologyIcons[name];
  return Icon ? <Icon className={className} aria-hidden="true" /> : null;
}
