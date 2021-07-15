export interface Assets {
  status: object;
  data: Array<AssetsData>;
}

export interface AssetsData {
  "id": number;
  "name": string;
  "symbol": string;
  "slug": string;
  "num_market_pairs": number;
  "date_added": string;
  "tags": Array<string>;
  "max_supply": number;
  "circulating_supply": number;
  "total_supply": number;
  "platform": any;
  "cmc_rank": number;
  "last_updated": string;
  "quote": {
    "USD": AssetsDataQuote
  };
}

export interface AssetsDataQuote {
  "price": number;
  "volume_24h": number;
  "percent_change_1h": number;
  "percent_change_24h": number;
  "percent_change_7d": number;
  "percent_change_30d": number;
  "percent_change_60d": number;
  "percent_change_90d": number;
  "market_cap": number;
  "last_updated": string;
}


