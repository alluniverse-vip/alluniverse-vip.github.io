import { Hono } from "hono";
// import { serveStatic } from 'hono/cloudflare-pages'

const app = new Hono();

app.get('/hello', (c) => {
  return c.json({
    message: `Hello`,
    author: '墨渐生微',
    date: new Date().toLocaleString()
  })
})

app.get("*", (ctx) => ctx.env.ASSETS.fetch(ctx.req.raw));
export default app;