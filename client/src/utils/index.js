/**
 * Extracts playlist ID from YouTube playlist URL
 * @param {string} url - YouTube playlist URL
 * @returns {string|null} - Playlist ID or null if not found
 */
export function extractPlaylistId(url) {
  if (!url) return null;

  // youtube.com/playlist?list=PLAYLIST_ID
  const match = url.match(/[?&]list=([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
}

/**
 * Extracts video ID from any YouTube URL format
 * @param {string} url - YouTube video URL
 * @returns {string|null} - Video ID or null if not found
 */
export function extractVideoId(url) {
  if (!url) return null;

  // Already just a video ID
  if (/^[a-zA-Z0-9_-]{11}$/.test(url)) {
    return url;
  }

  // youtube.com/embed/VIDEO_ID
  const embedMatch = url.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/);
  if (embedMatch) return embedMatch[1];

  // youtube.com/watch?v=VIDEO_ID
  const watchMatch = url.match(/youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/);
  if (watchMatch) return watchMatch[1];

  // youtu.be/VIDEO_ID
  const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
  if (shortMatch) return shortMatch[1];

  return null;
}
