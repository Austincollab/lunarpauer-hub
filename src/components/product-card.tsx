import { ArrowUpRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/products";

export function ProductCard({ product, offset = false }: { product: Product; offset?: boolean }) {
  return <article className={`group border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[6px_6px_0_var(--accent)] ${offset ? "lg:translate-y-10" : ""}`}>
    <div className="mb-7 flex items-start justify-between"><div className="grid size-12 place-items-center rounded-sm bg-foreground font-display font-bold text-background group-hover:bg-primary group-hover:text-primary-foreground">{product.glyph}</div><span className="border border-border bg-muted px-2 py-1 font-mono text-[9px] uppercase">Demo product</span></div>
    <p className="font-mono text-[10px] uppercase text-primary">{product.category}</p><h3 className="mt-2 text-2xl font-bold">{product.name}</h3><p className="mt-3 min-h-12 text-sm leading-6 text-muted-foreground">{product.description}</p>
    <dl className="my-6 grid gap-2 border-y border-border py-4 font-mono text-[10px]"><div className="flex justify-between"><dt className="text-muted-foreground">Creator</dt><dd>{product.creator}</dd></div><div className="flex justify-between"><dt className="text-muted-foreground">Stack</dt><dd>{product.stack}</dd></div><div className="flex justify-between"><dt className="text-muted-foreground">Platform</dt><dd>{product.platform}</dd></div></dl>
    <div className="flex items-center justify-between gap-3"><span className="text-xs text-muted-foreground">{product.metric}</span><Button variant="ghost" size="sm" className="rounded-sm group-hover:bg-primary"><Download />{product.action}<ArrowUpRight /></Button></div>
  </article>;
}