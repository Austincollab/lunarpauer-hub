import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDownRight, ArrowRight, Check, Play, Sparkles } from "lucide-react";
import labImage from "@/assets/lp-software-lab.jpg";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "L&P — Build It. Ship It. Let People Use It." },
    { name: "description", content: "L&P is a home for vibe-coded products. Build with AI, publish your creation, and put it in front of real users." },
    { property: "og:title", content: "L&P — Build It. Ship It. Let People Use It." },
    { property: "og:description", content: "Build with AI. Publish for real users. Turn your experiments into products." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: HomePage,
});

const pipeline = ["Idea", "Vibe code", "Build", "Publish", "Users", "Feedback", "V2"];
const feed = ["Published a new build", "Released v0.3", "First user joined", "Shipped an AI feature"];

function HomePage() {
  return <main>
    <section className="relative overflow-hidden px-5 py-16 md:py-24"><div className="pointer-events-none absolute inset-0 flex items-center justify-center font-display text-[28vw] font-bold text-foreground/[0.025]">L&P</div>
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12">
        <div className="animate-reveal lg:col-span-7"><div className="mb-7 inline-flex items-center gap-2 border border-primary/30 bg-accent px-3 py-1 font-mono text-[10px] uppercase text-primary"><span className="size-2 rounded-full bg-primary" />The home for vibe-coded products</div>
          <h1 className="text-6xl font-bold leading-[.9] md:text-8xl">Vibe Code It.<br/><span className="text-primary">Ship It.</span><br/>Let People Use It.</h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">Build with AI. Publish for real users. Turn your experiments into products.</p>
          <div className="mt-9 flex flex-wrap gap-4"><Button asChild variant="signal" size="xl"><Link to="/publish">Publish your build <ArrowRight /></Link></Button><Button asChild variant="outline" size="xl"><Link to="/explore">Explore products <ArrowDownRight /></Link></Button></div>
        </div>
        <div className="relative lg:col-span-5 lg:translate-x-8"><div className="absolute -left-7 -top-7 size-36 border border-primary bg-accent"/><div className="relative overflow-hidden rounded-lg border border-foreground bg-foreground p-2 shadow-2xl"><img src={labImage} width={1280} height={900} alt="A polished software build pipeline moving an app from code to production" className="aspect-[4/3] w-full rounded-sm object-cover"/><div className="flex items-center justify-between px-2 pb-1 pt-3 font-mono text-[9px] uppercase text-background/60"><span>Build pipeline / Live</span><span className="text-primary">Ready to ship</span></div></div></div>
      </div>
    </section>

    <section className="border-y border-border bg-background px-5"><div className="mx-auto flex max-w-7xl flex-wrap">{pipeline.map((item,index)=><div key={item} className="flex min-w-32 flex-1 items-center border-r border-border px-4 py-6 last:border-r-0"><span className="mr-3 font-mono text-[9px] text-primary">0{index+1}</span><span className="font-display text-xs font-bold uppercase">{item}</span></div>)}</div></section>

    <section className="px-5 py-24"><div className="mx-auto max-w-7xl"><div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="font-mono text-[10px] uppercase text-primary">Demo catalogue · No real statistics</p><h2 className="mt-3 text-4xl font-bold md:text-5xl">Things people actually built.</h2></div><Button asChild variant="outline"><Link to="/explore">View the index <ArrowRight/></Link></Button></div><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">{products.map((product,index)=><ProductCard key={product.name} product={product} offset={index % 2 === 1}/>)}</div></div></section>

    <section className="bg-foreground px-5 py-24 text-background"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12"><div className="lg:col-span-4"><p className="font-mono text-[10px] uppercase text-primary">L&P manifesto</p><div className="mt-8 h-px w-24 bg-primary"/></div><div className="lg:col-span-8"><blockquote className="font-display text-4xl font-bold leading-tight md:text-6xl">“Vibe coding is not a crime until you publish some real build.”</blockquote><p className="mt-10 max-w-xl text-lg text-background/60">We’re not here to judge how you built it. We’re here to help you ship it.</p></div></div></section>

    <section className="px-5 py-24"><div className="mx-auto max-w-7xl"><div className="grid gap-12 lg:grid-cols-12"><div className="lg:col-span-5"><p className="font-mono text-[10px] uppercase text-primary">From prototype to product</p><h2 className="mt-4 text-5xl font-bold">Three steps.<br/>No permission needed.</h2></div><div className="grid gap-px border border-border bg-border lg:col-span-7 md:grid-cols-3">{[["01","Build","AI, code, no-code, caffeine, questionable architecture."],["02","Publish","Package your project and put it in front of real people."],["03","Grow","Listen, improve the product, and keep shipping."]].map(([n,t,d])=><div key={n} className="bg-background p-8"><span className="font-mono text-xs text-primary">{n}</span><h3 className="mt-12 text-2xl font-bold uppercase">{t}</h3><p className="mt-4 text-sm leading-6 text-muted-foreground">{d}</p></div>)}</div></div></div></section>

    <section className="border-y border-border bg-muted px-5 py-24"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2"><div><p className="font-mono text-[10px] uppercase text-primary">Builders building in public</p><h2 className="mt-4 text-5xl font-bold">A living ecosystem,<br/>one release at a time.</h2><p className="mt-6 max-w-lg text-muted-foreground">Demo activity shows the kind of momentum L&P is designed to make visible.</p></div><div className="border-l-2 border-primary pl-7">{feed.map((item,index)=><div key={item} className="flex items-center gap-5 border-b border-border py-5"><span className="font-mono text-[9px] text-muted-foreground">{String(14-index*2).padStart(2,"0")}:{index%2?"45":"22"}</span><span className="size-2 rounded-full bg-primary"/><span className="text-sm">Demo builder {item.toLowerCase()}</span></div>)}</div></div></section>

    <section className="px-5 py-24"><div className="mx-auto max-w-7xl"><div className="relative aspect-video overflow-hidden rounded-lg border border-foreground bg-foreground text-background"><div className="absolute inset-0 math-grid opacity-20"/><div className="relative flex h-full flex-col items-center justify-center p-8 text-center"><Button variant="outline" size="icon" className="mb-8 size-16 rounded-full border-background/30 bg-background/10 text-background"><Play className="ml-1 size-6"/></Button><p className="font-mono text-[10px] uppercase text-primary">Future brand film</p><h2 className="mt-4 text-4xl font-bold md:text-6xl">Build something worth using.</h2><p className="mt-5 text-background/60">One idea. One build. One real user. Then keep going.</p></div></div></div></section>

    <section className="px-5 pb-24"><div className="mx-auto grid max-w-7xl border-2 border-primary bg-background p-10 shadow-[8px_8px_0_var(--foreground)] md:grid-cols-[1fr_auto] md:items-center md:p-16"><div><Sparkles className="mb-6 text-primary"/><h2 className="text-4xl font-bold md:text-6xl">Built something weird?</h2><p className="mt-5 max-w-2xl text-muted-foreground">Good. Your first project doesn’t need to be perfect. Publish it, let someone use it, learn, then build the next version.</p></div><Button asChild variant="signal" size="xl" className="mt-8 md:mt-0"><Link to="/publish">Start building <Check/></Link></Button></div></section>
  </main>;
}