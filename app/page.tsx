import { PreviewCode } from "@/components/preview-code";
import Sidebar from "@/containers/sidebar";
import Features from "@/registry/blocks/features/one";
import { Navbar } from "@/registry/blocks/navbar/one";

export default function Home() {
  return (
    <>
      <Sidebar />
      <main className="flex-1 lg:ml-52 border-x mx-4 lg:mx-8 min-h-screen">
        <div className="max-w-5xl mx-auto">
          <section className="relative py-16">
            <div className="mx-auto px-6">
              <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                <div>
                  <h2 className="text-5xl font-medium">
                    Build faster with production-ready shadcn blocks.
                  </h2>
                  <p className="text-muted-foreground my-8 text-lg font-normal">
                    copy, paste, ship.
                  </p>
                  <div
                    className="group flex items-center gap-3 transition-all duration-500"
                    aria-label="Scroll to explore blocks"
                  >
                    <div className="relative flex h-9 w-6 items-start justify-center rounded-full border border-foreground/20 p-1.5 transition-colors group-hover:border-foreground/40">
                      <div className="size-1 animate-scroll-down rounded-full bg-foreground/60" />
                    </div>
                    <span className="text-sm font-medium">
                      Scroll down to explore blocks
                    </span>
                  </div>
                </div>

                <div className="space-y-6 text-base text-foreground/80">
                  <p>
                    Stop reinventing the wheel. Access a growing collection of
                    beautiful, accessible components built with modern web
                    standards. Each block is crafted for real-world use—fully
                    responsive, customizable, and ready to drop into your
                    projects.
                  </p>
                  <p>
                    <span className="font-bold">
                      100% free and open source.
                    </span>{" "}
                    No dependencies, no complexity, no subscriptions. Just
                    clean, well-documented code that works. From hero sections
                    to pricing tables, we&apos;ve got the building blocks you
                    need to ship faster.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <PreviewCode
            title="A simple Navigation"
            filePath="registry/blocks/navbar/one/index.tsx"
            registryName="navbar-1"
          >
            <Navbar />
          </PreviewCode>

          <PreviewCode
            title="A simple Features"
            filePath="registry/blocks/features/one/index.tsx"
            registryName="features-1"
          >
            <Features />
          </PreviewCode>
        </div>
      </main>
    </>
  );
}
