export default {
  async fetch(request, env) {
    console.log(request)
    console.log(env)
    const url = new URL(request.url);
    if (url.pathname.startsWith('/api/')) {
      // TODO: Add your custom /api/* logic here.
      const data = {
        hello: "world",
      };
      return Response.json(data);
    }
    // Otherwise, serve the static assets.
    // Without this, the Worker will error and no assets will be served.
    return env.ASSETS.fetch(request);
  },
}