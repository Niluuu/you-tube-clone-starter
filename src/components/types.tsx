export interface VideoCardProps {
  id: string;
  title: string;
  description?: string;
  watches: number;
  created: number;
  videoUrl: string;
  author: {
    profileName: string;
    profilePhoto: string;
    descriptionProfile: string;
  };
}
export interface VideoProps {
  video: VideoCardProps;
}
