import type { CollectionEntry } from "astro:content";

export function getUniqueTags(posts: CollectionEntry<"blog">[]) {
  const allTags = new Set<string>();
  posts.forEach((post) => {
    post.data.tags?.forEach((tag: string) => allTags.add(tag));
  });
  return Array.from(allTags).sort();
}
