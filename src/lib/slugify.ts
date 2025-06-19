export const slugify = (text: string | undefined | null) =>
  text
    ? text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-")
    : "";
