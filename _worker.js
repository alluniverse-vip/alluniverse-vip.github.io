import { Hono } from "hono";
import { serveStatic } from 'hono/cloudflare-pages'

const app = new Hono();

// CloudflareSpeedTest
app.get('/test1', async (c) => {
  const fetchUrl = 'https://testfileorg.netwet.net/500MB-CZIPtestfile.org.zip'
  const response = await fetch(fetchUrl)
  return response;
})

addEventListener("fetch", event => {
  let url = new URL(event.request.url);
  if (url.pathname == "/test" && url.search == "") {
    url.href="https://testfileorg.netwet.net/500MB-CZIPtestfile.org.zip"
    let request = new Request(url, event.request);
    event.respondWith(fetch(request));
  }
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