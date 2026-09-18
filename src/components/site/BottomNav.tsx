import { useEffect, useState } from "react";
import { Home, Briefcase, Layers, Tag, Mail } from "lucide-react";
import { useContent } from "@/components/site/ContentProvider";

type NavItem = { id: string; label: string; icon: typeof Home };

function removeUndefined<T>(items: (T | undefined)[]): T[] {
  return items.filter((i): i is T => Boolean(i));
}

export function BottomNav() {
  const { content } = useContent();

  const byLabel: Record<string, NavItem> = {
    Services: { id: "services", label: "Services", icon: Layers },
    Work: { id: "work", label: "Work", icon: Briefcase },
    Pricing: { id: "pricing", label: "Pricing", icon: Tag },
    Contact: { id: "contact", label: "Contact", icon: Mail },
  };

  const items: NavItem[] = removeUndefined([
    { id: "top", label: "Home", icon: Home },
    ...content.navbar.links.map((l) => byLabel[l.label]),
    byLabel["Contact"],
  ]).slice(0, 5);

  const [active, setActive] = useState("top");

  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur lg:hidden">
      <div className="mx-auto flex max-w-md items-stretch justify-between px-2">
        {items.map(({ id, label, icon: Icon }) => {
          const isActive = active === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              className={`flex flex-1 flex-col items-center gap-1 py-2.5 transition-colors ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <Icon className="h-5 w-5" strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-medium leading-none">{label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
