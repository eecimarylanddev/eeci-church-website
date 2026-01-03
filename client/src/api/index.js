/**
 * YouTube API service for fetching playlist and video data
 */

import contentfulClient from "../clients";
import { DEFAULT_SITE_SETTINGS } from "../constants";
import { extractPlaylistId, extractVideoId } from "../utils";

/**
 * Fetches the latest video ID from a YouTube playlist using YouTube Data API
 * @param {string} playlistId - YouTube playlist ID
 * @returns {Promise<string|null>} - Latest video ID or null if fetch fails
 */
export async function fetchLatestVideoFromPlaylist(playlistId) {
  if (!playlistId) return null;

  const API_KEY = import.meta.env.VITE_YOUTUBE_DATA_API_KEY;

  if (!API_KEY) {
    console.error('YouTube API key is not configured');
    return null;
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=1&key=${API_KEY}`,
    );

    if (!response.ok) {
      throw new Error(`YouTube API error: ${response.status}`);
    }

    const data = await response.json();

    if (data.items && data.items.length > 0) {
      return data.items[0].snippet.resourceId.videoId;
    }

    return null;
  } catch (error) {
    console.error('Failed to fetch latest video from playlist:', error);
    return null;
  }
}

export async function fetchSiteSettings() {
  const response = await contentfulClient.getEntries({
    content_type: 'siteSettings',
    limit: 1,
  });

  if (!response) {
    throw new Error('Failed to fetch site settings');
  }

  const siteSettings =
    response.items.length > 0
      ? response.items[0].fields
      : DEFAULT_SITE_SETTINGS;

  if (response.items.length === 0) {
    console.warn('[Contentful] No siteSettings entries found, using defaults');
  }

  // Fetch latest sermon from playlist or (if not available) from the sermon URL
  const playlistId = extractPlaylistId(siteSettings.sermonsPlaylist);
  const latestSermonVideoId =
    (await fetchLatestVideoFromPlaylist(playlistId)) ??
    extractVideoId(siteSettings.latestSermonUrl);

  return {
    giveLink: siteSettings.giveLink,
    latestSermonVideoId: latestSermonVideoId,
    sermonsPlaylist: siteSettings.sermonsPlaylist,
    aboutText: siteSettings.aboutText,
    beliefsText: siteSettings.beliefsText,
    facebookUrl: siteSettings.facebookUrl,
    youtubeUrl: siteSettings.youtubeUrl,
    tiktokUrl: siteSettings.tiktokUrl,
  };
}