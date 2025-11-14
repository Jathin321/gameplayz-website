export default async function sitemap() {
  const base = "https://gameplayz.in";
  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    // add more when you add routes: /features, /about, /contact, etc.
  ];
}