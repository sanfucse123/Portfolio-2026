import type { Metadata } from 'next';
import ProjectsPageShell from '@/components/projects/ProjectsPageShell';
import type { WorkspaceFilter } from '@/components/projects/WorkspaceProjectsSection';
import {
  getConfiguredGithubSourceUrl,
  getAllProjects,
} from '@/lib/github-projects';
import { getBehanceShowcaseEmbeds } from '@/lib/site-content';
import { createPageMetadata } from '@/seo/page-metadata';

interface ProjectsPageProps {
  searchParams: Promise<{ workspace?: string }>;
}

export const metadata: Metadata = createPageMetadata({
  title: "Projects | Muhammed Sanfar",
  description:
    "Explore app designs, UI/UX case studies, and 2D animation by Muhammed Sanfar, including TicketME, IoTRIX, B Good, CLiNK, and Music X.",
  path: "/projects",
  keywords: [
    "Muhammed Sanfar projects",
    "UI/UX case studies",
    "App design projects",
    "UI/UX design portfolio",
    "Figma design projects",
    "Front-end developer portfolio",
  ],
});

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const { workspace } = await searchParams;
  const initialWorkspace: WorkspaceFilter =
    workspace === 'coding' ? 'coding' : 'designing';

  const [projects, githubSourceUrl, behanceShowcaseEmbeds] = await Promise.all([
    getAllProjects(),
    Promise.resolve(getConfiguredGithubSourceUrl()),
    getBehanceShowcaseEmbeds(),
  ]);

  return (
    <ProjectsPageShell
      projects={projects}
      sourceUrl={githubSourceUrl}
      initialWorkspace={initialWorkspace}
      behanceShowcaseEmbeds={behanceShowcaseEmbeds}
    />
  );
}
