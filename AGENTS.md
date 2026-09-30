<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project architecture
- Keep shared L&P navigation, footer, and cursor companion in `SiteChrome`; all public pages inherit it from the root route for consistency.
- Keep demo catalogue entries in `src/lib/products.ts`; the future data source can replace one structured collection without rewriting cards.
