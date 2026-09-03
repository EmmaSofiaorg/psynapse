/**
 * Client-side routing only applies to in-app paths. Anything else — absolute
 * URLs, mailto:, tel:, or an href that hasn't loaded yet — must fall back to a
 * plain anchor, because next/link throws on an undefined href and has no reason
 * to intercept non-route destinations.
 */
export default function isInternalHref(href) {
  return typeof href === "string" && href.startsWith("/");
}
