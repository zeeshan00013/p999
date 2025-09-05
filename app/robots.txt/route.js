export async function GET() {
  const body = `User-agent: *
Allow: /

Sitemap: https://www.lucky101.com.pk.com/sitemap.xml
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
