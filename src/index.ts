type OpenGraphType =
  'book'
  | 'website'
  | 'article'
  | 'profile'
  | 'music.song'
  | 'video.movie'
  | 'video.other'
  | 'music.album'
  | 'video.episode'
  | 'video.tv_show'
  | 'music.playlist'
  | 'music.radio_station';

type OpenGraphDeterminerType = '' | 'a' | 'an' | 'the' | 'auto';

type OpenGraphMediaType = {
  readonly url?: string;
  readonly alt?: string;
  readonly type?: string;
  readonly secureUrl?: string;
  readonly width?: string | number;
  readonly height?: string | number;
};

type OpenGraphTwitterType = {
  readonly site?: string;
  readonly creator?: string;
  readonly card?: 'app' | 'player' | 'summary' | 'summary_large_image';
};

type OpenGraphProfileType = {
  readonly lastName?: string;
  readonly username?: string;
  readonly firstName?: string;
  readonly gender?: 'male' | 'female';
};

type OpenGraphArticleType = {
  readonly tag?: string[];
  readonly section?: string;
  readonly modifiedTime?: string;
  readonly publishedTime?: string;
  readonly expirationTime?: string;
  readonly author?: OpenGraphProfileType[];
};

type OpenGraphBookType = {
  readonly isbn?: string;
  readonly tag?: string[];
  readonly releaseDate?: string;
  readonly author?: OpenGraphProfileType[];
};

type OpenGraphVideoType = OpenGraphMediaType & {
  readonly tag?: string[];
  readonly duration?: number;
  readonly releaseDate?: string;
};

type OpenGraphLocaleType = {
  readonly current?: string;
  readonly alternate?: string[];
};

type OpenGraphMusicType = {
  readonly disc?: number;
  readonly album?: string;
  readonly track?: number;
  readonly duration?: number;
  readonly musician?: string[];
};

type OpenGraph = {
  readonly url?: string;
  readonly title?: string;
  readonly siteName?: string;
  readonly type?: OpenGraphType;
  readonly description?: string;
  readonly book?: OpenGraphBookType;
  readonly video?: OpenGraphVideoType;
  readonly music?: OpenGraphMusicType;
  readonly locale?: OpenGraphLocaleType;
  readonly twitter?: OpenGraphTwitterType;
  readonly article?: OpenGraphArticleType;
  readonly profile?: OpenGraphProfileType;
  readonly determiner?: OpenGraphDeterminerType;
  readonly image?: OpenGraphMediaType | OpenGraphMediaType[];
};

export type {
  OpenGraph,
  OpenGraphType,
  OpenGraphBookType,
  OpenGraphMediaType,
  OpenGraphVideoType,
  OpenGraphMusicType,
  OpenGraphLocaleType,
  OpenGraphTwitterType,
  OpenGraphProfileType,
  OpenGraphArticleType,
  OpenGraphDeterminerType
};