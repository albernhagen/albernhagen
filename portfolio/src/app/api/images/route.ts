export async function GET() {
  const res = await fetch("https://api.imagekit.io/v1/files", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${process.env.IMAGEKIT_PRIVATE_KEY_BASE_64}`,
    },
  });

  const data = await res.json();

  return Response.json({ data });
}
