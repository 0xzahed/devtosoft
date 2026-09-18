import { createContext, useContext, useState, type ReactNode } from "react";
import {
  loadContent,
  saveContent,
  resetContent,
  type SiteContent,
} from "@/lib/content";

type ContentContextValue = {
  content: SiteContent;
  setContent: (next: SiteContent) => void;
  update: (mutate: (draft: SiteContent) => SiteContent) => void;
  reset: () => void;
};

const ContentContext = createContext<ContentContextValue | null>(null);

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<SiteContent>(() => loadContent());

  const update = (mutate: (draft: SiteContent) => SiteContent) => {
    setContent((prev) => {
      const next = mutate(structuredClone(prev));
      saveContent(next);
      return next;
    });
  };

  const reset = () => {
    resetContent();
    setContent(loadContent());
  };

  return (
    <ContentContext.Provider value={{ content, setContent, update, reset }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent(): ContentContextValue {
  const ctx = useContext(ContentContext);
  if (!ctx) throw new Error("useContent must be used within ContentProvider");
  return ctx;
}