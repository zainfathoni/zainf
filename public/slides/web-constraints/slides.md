# Navigating The Web in A World Full of Constraints

CityJS Singapore 2023

---

## About Me

**Zain Fathoni**
- Senior Software Engineer
- Building web applications for 8+ years
- Obsessed with finding the right tool for the job

---

## The Reality of Web Development

Every project comes with constraints:

- **Budget** limitations
- **Time** pressures  
- **Team** expertise
- **Technical** requirements
- **Business** priorities

---

## Constraint #1: Budget & Time

### The Static Site Challenge

**Project**: Company landing page
**Constraints**: 
- $0 hosting budget
- 2-week deadline
- No backend needed

**Solution**: Gatsby + Netlify

---

## Why Gatsby + Netlify?

```javascript
// gatsby-config.js
module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
```

- **Free hosting** on Netlify
- **Built-in performance** optimizations
- **CMS integration** with Contentful
- **Deploy previews** for client feedback

---

## Constraint #2: Team Expertise

### The PHP Legacy System

**Project**: E-commerce modernization
**Constraints**:
- Team only knows PHP
- Existing MySQL database
- Can't rewrite everything

**Solution**: Laravel + Livewire

---

## Laravel + Livewire Benefits

```php
<?php

class ProductSearch extends Component
{
    public $search = '';
    public $products = [];

    public function updatedSearch()
    {
        $this->products = Product::where('name', 'like', '%'.$this->search.'%')
            ->limit(10)
            ->get();
    }

    public function render()
    {
        return view('livewire.product-search');
    }
}
```

- **Familiar PHP** syntax
- **Reactive UI** without JavaScript complexity
- **Database integration** with Eloquent
- **Gradual adoption** possible

---

## Constraint #3: Performance Requirements

### The Real-Time Dashboard

**Project**: Analytics dashboard
**Constraints**:
- Sub-second data updates
- 10,000+ concurrent users
- Complex data relationships

**Solution**: Next.js + SWR + WebSockets

---

## Real-Time Architecture

```javascript
// hooks/useRealTimeData.js
import useSWR from 'swr'
import { useEffect } from 'react'

export function useRealTimeData(endpoint) {
  const { data, mutate } = useSWR(endpoint, fetcher)
  
  useEffect(() => {
    const ws = new WebSocket('wss://api.example.com/live')
    
    ws.onmessage = (event) => {
      const update = JSON.parse(event.data)
      mutate(update, false) // Update without revalidation
    }
    
    return () => ws.close()
  }, [mutate])
  
  return data
}
```

---

## Constraint #4: SEO & Accessibility

### The Content-Heavy Site

**Project**: News publication
**Constraints**:
- Must rank well in search
- Accessibility compliance
- Fast loading on mobile

**Solution**: Remix + Progressive Enhancement

---

## Remix for Content Sites

```typescript
// app/routes/articles.$slug.tsx
export const loader: LoaderFunction = async ({ params }) => {
  const article = await getArticle(params.slug)
  
  return json({
    article,
    relatedArticles: await getRelatedArticles(article.tags)
  })
}

export default function Article() {
  const { article, relatedArticles } = useLoaderData<typeof loader>()
  
  return (
    <article>
      <h1>{article.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
      <RelatedArticles articles={relatedArticles} />
    </article>
  )
}
```

---

## Why Remix Won?

- **Server-side rendering** by default
- **Progressive enhancement** philosophy
- **Nested routing** for complex layouts
- **Web standard** APIs (FormData, Response, etc.)

---

## Constraint #5: Developer Experience

### The Rapid Prototyping Need

**Project**: MVP for startup
**Constraints**:
- Weekly feature releases
- Single developer
- Unknown scale requirements

**Solution**: T3 Stack (Next.js + tRPC + Prisma)

---

## T3 Stack Magic

```typescript
// server/api/routers/posts.ts
export const postsRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.post.findMany({
      orderBy: { createdAt: 'desc' }
    })
  }),
  
  create: protectedProcedure
    .input(z.object({ title: z.string(), content: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.post.create({
        data: { ...input, authorId: ctx.session.user.id }
      })
    })
})

// client/components/Posts.tsx
const { data: posts } = api.posts.getAll.useQuery()
```

---

## Decision Framework

When choosing technology, consider:

1. **Team capabilities** - Can we maintain this?
2. **Project timeline** - How quickly do we need to ship?
3. **Budget constraints** - What can we afford?
4. **Performance needs** - What are the requirements?
5. **Future scalability** - How will this grow?

---

## Tools in My Toolbox

- **Static Sites**: Gatsby, Next.js Static Export, Astro
- **Server-Rendered**: Remix, Next.js, SvelteKit
- **Real-Time**: Socket.io, Pusher, Supabase Realtime
- **Styling**: Tailwind, Stitches, Vanilla Extract
- **Data**: Prisma, Supabase, PlanetScale

---

## Anti-Patterns to Avoid

- **Over-engineering** for current needs
- **Under-engineering** for known growth
- **Technology for technology's sake**
- **Ignoring team capabilities**
- **Not considering maintenance**

---

## Case Study: WargaBantuWarga

**Context**: COVID-19 mutual aid platform
**Constraints**:
- 2-week deadline
- Volunteer team
- High traffic expected
- Zero budget

**Solution**: Next.js + Airtable + Vercel

---

## Why This Stack Worked

```javascript
// pages/api/resources.js
export default async function handler(req, res) {
  const records = await airtable('Resources')
    .select({ view: 'Published' })
    .all()
  
  const resources = records.map(record => ({
    id: record.id,
    ...record.fields
  }))
  
  res.setHeader('Cache-Control', 's-maxage=60')
  res.json(resources)
}
```

- **Fast deployment** with Vercel
- **No-code CMS** with Airtable
- **Automatic scaling** handled by platform
- **Free tier** sufficient for launch

---

## Lessons Learned

1. **Perfect is the enemy of good**
2. **Constraints breed creativity**
3. **Right tool > Latest tool**
4. **Maintenance matters more than features**
5. **Team happiness affects product quality**

---

## Questions to Ask

Before choosing your stack:

- What problem are we actually solving?
- Who will maintain this in 2 years?
- What happens if we need to scale 10x?
- How will we debug this in production?
- Can we hire for these technologies?

---

## The Meta-Constraint

The biggest constraint is often **decision paralysis**

Sometimes **good enough** is perfect

---

## Thank You!

**Zain Fathoni**
- Website: zainf.dev
- Twitter: @zainfathoni
- GitHub: github.com/zainfathoni

*Questions?*