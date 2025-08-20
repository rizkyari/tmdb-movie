/**
 * For making TMDB image url with fallback
 * @param path string
 * @param size string
 * @return string
 */
export function getImageUrl(path: string | null, size: string = "w500"): string {
    const base = import.meta.env.VITE_TMDB_IMAGE_BASE;
    if(!path) return "/placeholder-poster.png"
    return `${base}/${size}${path}`;
}

/**
 * Format date string (YYYY-MM_DD)
 * @param dateStr string
 * @return string
 */
export function formatDate(dateStr?: string): string {
    if(!dateStr) return "-";
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
}