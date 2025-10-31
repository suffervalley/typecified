import { Activity, DraftingCompass, Mail, Zap } from "lucide-react";
// import Image from "next/image";

export default function Features() {
  return (
    <section className="py-16 @md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 @md:grid-cols-2 @md:gap-12 @lg:grid-cols-5 @lg:gap-24">
          <div className="@lg:col-span-2">
            <div className="@lg:pr-0">
              <h2 className="text-4xl font-semibold @lg:text-5xl">
                AI that runs in your browser
              </h2>
              <p className="mt-6">
                Experience powerful language models running locally on your
                device. No cloud, no servers, complete privacy with native
                browser AI capabilities.
              </p>
            </div>
            <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
              <li>
                <Mail className="size-5 text-muted-foreground" />
                On-device processing
              </li>
              <li>
                <Zap className="size-5 text-muted-foreground" />
                Lightning-fast inference
              </li>
              <li>
                <Activity className="size-5 text-muted-foreground" />
                Real-time performance monitoring
              </li>
              <li>
                <DraftingCompass className="size-5 text-muted-foreground" />
                Built-in Prompt & Translation APIs
              </li>
            </ul>
          </div>
          <div className="border-border/50 relative rounded-3xl border p-3 @lg:col-span-3">
            <div className="aspect-76/59 relative rounded-2xl bg-zinc-200 dark:bg-zinc-800 to-transparent p-px">
              {/* <Image
                src="/your-image-path.png"
                className="hidden rounded-[15px] dark:block"
                alt="image dark"
                width={1024}
                height={800}
              />
              <Image
                src="/payments-light.png"
                className="rounded-[15px] shadow dark:hidden"
                alt="image light"
                width={1024}
                height={800}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
