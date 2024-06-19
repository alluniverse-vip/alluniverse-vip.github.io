export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // CloudflareSpeedTest
    if (url.pathname == "/test" && url.search == "") {
      url.href = "https://testfileorg.netwet.net/500MB-CZIPtestfile.org.zip"
      let request = new Request(url, request);
      return fetch(request);
    }

    // author
    if (url.pathname == "/hello") {
      return Response.json({
        message: `Hello`,
        author: '墨渐生微',
        date: new Date().toLocaleString()
      });
    }

    // Otherwise, serve the static assets.
    return env.ASSETS.fetch(request);
  },
}