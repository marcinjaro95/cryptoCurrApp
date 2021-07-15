export interface Meta {
  config: {
    data: string
    type: string
  }
  data: object;
  usage: {
    day: string;
    month: string;
  }
}

export interface MetaData {
  blog_link?: any;
  coins_links?: any;
  description?: string;
  discord_link?: any;
  exclude_sections?: any;
  facebook_link?: string;
  features?: any;
  forum_link?: string;
  github_link?: string;
  gitlab_link?: any;
  header_hide_text?: any;
  header_image?: string;
  header_text?: string;
  id?: number;
  image?: string;
  instagram_link?: string;
  linkedin_link?: any;
  manager_twitter_ids?: string;
  name?: string;
  overview_promotion?: string;
  pinterest_link?: string;
  reddit_link?: string;
  sections_order?: string;
  short_summary?: string;
  symbol: string;
  team?: any;
  technology?: string;
  telegram_link?: string;
  twitter_accounts?: string;
  twitter_link?: string;
  videos?: string;
  website_link?: string;
  weibo_link?: any;
  whitepaper_link?: string;
  whitepaper_text?: any;
  youtube_link?: string;
}


