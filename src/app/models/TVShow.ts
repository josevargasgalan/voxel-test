import { Image } from "./Image";
import { Rating } from "./Rating";

export interface TVShow {
  show: TVShowDetail;
}

export interface TVShowDetail {
  name: string;
  image: Image;
  rating: Rating;
  id?: number;
  summary?: string;
  genres?: string[]
}
