export interface Music {
  music_id: string;
  artist_ids: string[];
  artist_names: string[];
  name: string;
  type: string;
  tracks: string[] | null;
  album_id: string;
  genres: string[] | null;
  preview: string;
  album_img: string;
  release_date: string;
}
