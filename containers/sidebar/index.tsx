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
  LogIn,
  UserPlus,
  KeyRound,
  Menu,
  Activity,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/containers/theme-toggle";

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
  login: <LogIn className="size-4" />,
  register: <UserPlus className="size-4" />,
  "forgot-password": <KeyRound className="size-4" />,
  navbar: <Menu className="size-4" />,
  stats: <Activity className="size-4" />,
  "call-to-action": <MessageSquare className="size-4" />,
  hero: <Star className="size-4" />,
};

// Static menu items based on your registry structure
const menuItems: SidebarItem[] = [
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
  {
    name: "Register",
    icon: iconMap.register,
    href: "/register",
  },
  { name: "Team", icon: iconMap.team, href: "/team" },
  {
    name: "Forgot Password",
    icon: iconMap["forgot-password"],
    href: "/forgot-password",
  },
  {
    name: "Pricing",
    icon: iconMap.pricing,
    href: "/pricing",
  },
  { name: "Login", icon: iconMap.login, href: "/login" },
  { name: "Stats", icon: iconMap.stats, href: "/stats" },
  {
    name: "Call to Action",
    icon: iconMap["call-to-action"],
    href: "/call-to-action",
  },
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
          <LayoutGrid className="size-4" />
        </div>

        {/* Navigation */}
        <nav className="flex flex-1 items-center overflow-y-auto p-2">
          <div className="w-full space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg p-2 transition-colors",
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
