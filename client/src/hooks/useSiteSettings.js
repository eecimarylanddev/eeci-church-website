// Fetches site settings from Contentful. Falls back to defaults if it fails.
import { useState, useEffect } from 'react';
import client from '../services/contentful';

const DEFAULT_SETTINGS = {
  giveLink: 'https://giving.myamplify.io/app/giving/setota',
  latestSermonUrl: 'https://www.youtube.com/embed/bngvT0n4ur0',
  aboutText: `Emmanuel Evangelical Church International (EECI) is a vibrant, multi-generational church with a passion for Jesus, people, and our city. We are a community of believers dedicated to sharing the gospel and love of Christ. Our services are filled with heartfelt worship, practical teaching from the Bible, and a welcoming atmosphere for all. We believe in building strong families and a strong community, and we offer various ministries for all ages to get connected and grow in their faith. Come as you are and experience the warmth of our church family.`,
  beliefsText: `We are a Bible-believing church committed to the historic creeds of the Christian faith and the Gospel of Jesus Christ. Our mission is to inspire, equip, and create a space for living out our faith in community.`,
  facebookUrl: 'https://www.facebook.com/people/Ethio-Emmanuel/pfbid07LJ4r13DdRn5MSNFCr7YjPLW95xyZD95ss5AR9s8WjUJX7hpk18rQFDV8CHMukhLl/',
  youtubeUrl: 'https://www.youtube.com/channel/UCljj-pkGW1Adn2ZOrib3RkA',
  tiktokUrl: 'https://www.tiktok.com/@eecimaryland',
};

// Extracts video ID from any YouTube URL format
function extractVideoId(url) {
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

export function useSiteSettings() {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchSettings() {
      try {
        console.log('[Contentful] Fetching siteSettings...');
        const response = await client.getEntries({
          content_type: 'siteSettings',
          limit: 1,
        });

        console.log('[Contentful] Raw response:', response);
        console.log('[Contentful] Items count:', response.items.length);

        if (response.items.length > 0) {
          const fields = response.items[0].fields;
          console.log('[Contentful] Fields received:', fields);
          console.log('[Contentful] Field keys:', Object.keys(fields));

          setSettings({
            giveLink: fields.giveLink || DEFAULT_SETTINGS.giveLink,
            latestSermonUrl: fields.latestSermonUrl || DEFAULT_SETTINGS.latestSermonUrl,
            aboutText: fields.aboutText || DEFAULT_SETTINGS.aboutText,
            beliefsText: fields.beliefsText || DEFAULT_SETTINGS.beliefsText,
            facebookUrl: fields.facebookUrl || DEFAULT_SETTINGS.facebookUrl,
            youtubeUrl: fields.youtubeUrl || DEFAULT_SETTINGS.youtubeUrl,
            tiktokUrl: fields.tiktokUrl || DEFAULT_SETTINGS.tiktokUrl,
          });
        } else {
          console.warn('[Contentful] No siteSettings entries found!');
        }
      } catch (err) {
        console.error('[Contentful] Failed to fetch site settings:', err);
        console.error('[Contentful] Error details:', err.message, err.details);
        setError(err);
        // Keep default settings on error
      } finally {
        setLoading(false);
      }
    }

    fetchSettings();
  }, []);

  const latestSermonVideoId = extractVideoId(settings.latestSermonUrl);

  return {
    ...settings,
    latestSermonVideoId: latestSermonVideoId || 'bngvT0n4ur0',
    loading,
    error,
  };
}
