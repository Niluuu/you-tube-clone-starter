interface Comments {
  picture: string;
  email: string;
  date: number;
  comment: string;
}
interface Author {
  profileName: string;
  profilePhoto: string;
  descriptionProfile: string;
  subscibers: number;
}
export interface VideoCardProps {
  id: string;
  title: string;
  description?: string;
  watches: number;
  created: number;
  videoUrl: string;
  author: Author;
  comments: Array<Comments>;
}
export interface VideoProps {
  video: VideoCardProps;
}
