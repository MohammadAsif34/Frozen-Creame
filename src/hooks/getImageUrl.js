export async function getImageUrl(id) {
  const baseURL1 = "https://images.unsplash.com/photo-";
  const baseURL2 = "https://plus.unsplash.com/premium_photo-";

  try {
    const url1 = `${baseURL1}${id}`;
    const res1 = await fetch(url1, { method: "HEAD" });

    if (res1.ok) {
      return url1;
    }

    const url2 = `${baseURL2}${id}`;
    const res2 = await fetch(url2, { method: "HEAD" });

    if (res2.ok) {
      return url2;
    }

    return "/images/default_cake.png";
  } catch (err) {
    console.error("Image resolution failed:", err);
    return "/images/default_cake.png";
  }
}
