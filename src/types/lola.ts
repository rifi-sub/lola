export interface Profile {
  username: string;
  display_name: string;
  bio: string;
  location: string | null;
  website: string | null;
  joined_date: string | null;
  profile_image_url: string;
  banner_image_url: string | null;
  is_verified: boolean;
  followers_count: number;
  following_count: number | null;
  tweet_count: number | null;
  like_count: number | null;
  languages_used: string[];
}

export interface ContentSummary {
  main_themes: string[];
  fetishes_and_kinks: string[];
  limits_and_boundaries: string[];
  dominance_style: string;
  target_audience: string[];
  tone_of_voice: string[];
  recurrent_mottos_or_phrases: string[];
}

export interface MediaExample {
  type: 'video' | 'photo';
  tweet_id: string;
  tweet_url: string;
  media_url: string;
  description: string;
}

export interface VisualStyle {
  dominant_colors: string[];
  fashion_elements: string[];
  props_and_symbols: string[];
  overall_aesthetic: string;
  media_examples: MediaExample[];
}

export interface TweetMedia {
  type: 'photo' | 'video';
  media_url: string;
  alt_text: string | null;
}

export interface TweetMetrics {
  like_count: number;
  retweet_count: number;
  reply_count: number;
  view_count: number;
}

export interface Tweet {
  tweet_id: string;
  tweet_url: string;
  created_at: string;
  text: string;
  language: string;
  is_reply: boolean;
  is_retweet: boolean;
  is_quote: boolean;
  is_pinned: boolean | null;
  media: TweetMedia[];
  metrics: TweetMetrics;
  topics_tags: string[];
  dominance_signal: string | null;
}

export interface ImplementationNotes {
  ideal_stack: string[];
  seo_keywords: string[];
  content_to_highlight_first: string[];
  privacy_and_boundaries: string[];
}

export interface LolaProfileData {
  profile: Profile;
  content_summary: ContentSummary;
  visual_style: VisualStyle;
  tweets: Tweet[];
  implementation_notes: ImplementationNotes;
}
