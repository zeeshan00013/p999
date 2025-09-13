export async function GET() {
  const body = `User-agent: *
Allow: /

Sitemap: https://www.w567game.cc/sitemap.xml
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
