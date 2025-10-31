"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  LayoutGrid,
  Users,
  Star,
  MessageSquare,
  HelpCircle,
  Link2,
  Grid3x3,
  DollarSign,
  Menu,
  Activity,
  Sparkles,
  AlertTriangle,
  ShieldCheck,
  FileText,
  Info,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/containers/theme-toggle";
import { Logo } from "@/components/logo";

interface SidebarItem {
  name: string;
  icon: React.ReactNode;
  href: string;
}

const iconMap: Record<string, React.ReactNode> = {
  features: <LayoutGrid className="size-4" />,
  team: <Users className="size-4" />,
  testimonials: <Star className="size-4" />,
  faqs: <HelpCircle className="size-4" />,
  "logo-client": <Link2 className="size-4" />,
  integrations: <Grid3x3 className="size-4" />,
  pricing: <DollarSign className="size-4" />,
  authentication: <ShieldCheck className="size-4" />,
  navbar: <Menu className="size-4" />,
  stats: <Activity className="size-4" />,
  "call-to-action": <MessageSquare className="size-4" />,
  hero: <Star className="size-4" />,
  "ai-elements": <Sparkles className="size-4" />,
  "error-pages": <AlertTriangle className="size-4" />,
  templates: <FileText className="size-4" />,
  about: <Info className="size-4" />,
};

// Main menu items
const mainMenuItems: SidebarItem[] = [
  { name: "Hero", icon: iconMap.hero, href: "/hero" },
  { name: "Navbar", icon: iconMap.navbar, href: "/navbar" },
  {
    name: "Logo Clients",
    icon: iconMap["logo-client"],
    href: "/logo-client",
  },
  {
    name: "Features",
    icon: iconMap.features,
    href: "/features",
  },
  {
    name: "Testimonials",
    icon: iconMap.testimonials,
    href: "/testimonials",
  },
  { name: "FAQs", icon: iconMap.faqs, href: "/faqs" },
  {
    name: "Integrations",
    icon: iconMap.integrations,
    href: "/integrations",
  },
  { name: "Team", icon: iconMap.team, href: "/team" },
  {
    name: "Pricing",
    icon: iconMap.pricing,
    href: "/pricing",
  },
  {
    name: "Authentication",
    icon: iconMap.authentication,
    href: "/authentication",
  },
  { name: "Stats", icon: iconMap.stats, href: "/stats" },
  {
    name: "Call to Action",
    icon: iconMap["call-to-action"],
    href: "/call-to-action",
  },
  {
    name: "AI Elements",
    icon: iconMap["ai-elements"],
    href: "/ai-elements",
  },
  {
    name: "Errors",
    icon: iconMap["error-pages"],
    href: "/errors",
  },
];

// Secondary menu items
const secondaryMenuItems: SidebarItem[] = [
  { name: "Templates", icon: iconMap.templates, href: "/templates" },
  { name: "About", icon: iconMap.about, href: "/about" },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "group fixed left-0 top-0 z-40 hidden h-screen w-50 bg-background md:block"
      )}
    >
      <div className="flex h-full flex-col">
        {/* Header */}
        <div className="flex h-16 items-center px-4">
          <Link
            href="/"
            aria-label="home"
            className="flex items-center space-x-2"
          >
            <Logo />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex flex-1 flex-col justify-center overflow-y-auto p-2">
          {/* Main Menu */}
          <div className="mb-4">
            <h3 className="mb-2 px-2 text-xs font-semibold uppercase text-muted-foreground">
              Blocks
            </h3>
            <div className="space-y-1">
              {mainMenuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 rounded-lg py-1.5 px-2 transition-colors",
                    pathname === item.href
                      ? "bg-primary/8 text-primary"
                      : "text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground"
                  )}
                >
                  <div className="shrink-0">{item.icon}</div>
                  <span
                    className={cn(
                      "whitespace-nowrap text-sm font-medium transition-opacity duration-300 text-foreground"
                    )}
                  >
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Secondary Menu */}
          <div>
            <h3 className="my-2 px-2 text-xs font-semibold uppercase text-muted-foreground">
              Others
            </h3>
            <div className="space-y-1">
              {secondaryMenuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 rounded-lg py-1.5 px-2 transition-colors",
                    pathname === item.href
                      ? "bg-primary/8 text-primary"
                      : "text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground"
                  )}
                >
                  <div className="shrink-0">{item.icon}</div>
                  <span
                    className={cn(
                      "whitespace-nowrap text-sm font-medium transition-opacity duration-300 text-foreground"
                    )}
                  >
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Theme Toggle at Bottom */}
        <div className="p-4">
          <ThemeToggle />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
