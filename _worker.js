import { Hono } from "hono";
import { serveStatic } from 'hono/cloudflare-pages'

const app = new Hono();

// CloudflareSpeedTest
app.get('/test', (c) => {
  const url = 'https://testfileorg.netwet.net/500MB-CZIPtestfile.org.zip'
  return fetch(new Request(url, {
    method: c.req.method(),
    headers: c.req.header(),
  }));
})

// author
app.get('/hello', (c) => {
  return c.json({
    message: `Hello`,
    author: '墨渐生微',
    date: new Date().toLocaleString()
  })
})

// app.get("*", (ctx) => ctx.env.ASSETS.fetch(ctx.req.raw));
app.get("*", (ctx, next) => serveStatic()(ctx, next));
export default app;