import { Category, Technology } from '@/interfaces';
import { CiServer } from 'react-icons/ci';
import { FaLayerGroup } from 'react-icons/fa';
import { IoMdBrowsers } from 'react-icons/io';
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiReact, SiPostgresql, SiMongodb, SiPrisma, SiMongoose, SiMysql   } from 'react-icons/si';

export const technologies : Technology[] = [
  { id: 1, name: 'HTML', category: 1, icon: SiHtml5, color: 'text-orange-500' },
  { id: 2, name: 'CSS', category: 1, icon: SiCss3, color: 'text-blue-500' },
  { id: 3, name: 'JavaScript', category: 1, icon: SiJavascript, color: 'text-yellow-500' },
  { id: 4, name: 'TypeScript', category: 1, icon: SiTypescript, color: 'text-blue-700' },
  { id: 5, name: 'Next.js', category: 3, icon: SiNextdotjs, color: 'text-gray-700' },
  { id: 6, name: 'TailwindCSS', category: 1, icon: SiTailwindcss, color: 'text-cyan-500' },
  { id: 7, name: 'Node.js', category: 2, icon: SiNodedotjs, color: 'text-green-500' },
  { id: 8, name: 'React', category: 1, icon: SiReact, color: 'text-blue-600' },
  { id: 9, name: 'PostgreSQL', category: 2, icon: SiPostgresql, color: 'text-blue-600' },
  { id: 10, name: 'MySQL', category: 2, icon: SiMysql, color: 'text-sky-700' },
  { id: 11, name: 'MongoDB', category: 2, icon: SiMongodb, color: 'text-green-600' },
  { id: 12, name: 'Mongoose', category: 2, icon: SiMongoose, color: 'text-red-800' },
  { id: 13, name: 'Prisma', category: 2, icon: SiPrisma, color: 'text-slate-800' },
];

export const categories : Category[] = [
  { id: 1, name: 'Frontend', icon: IoMdBrowsers, color: 'text-blue-600'},
  { id: 2, name: 'Backend', icon: CiServer, color: 'text-orange-600'},
  { id: 3, name: 'FullStack', icon: FaLayerGroup, color: 'text-purple-600'}
]