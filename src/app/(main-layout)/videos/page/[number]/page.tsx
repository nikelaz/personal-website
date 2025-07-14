import VideosView from "@/components/videos-view";
import videos from "@/data/videos";

type VideoPageProps = Readonly<{
  params: {
    number: string;
  },
}>;

const VideoPage = (props: VideoPageProps) => { 
  const number = props.params.number ? parseInt(props.params.number, 10) : 1;

  return (
    <VideosView
      videos={videos}
      page={number}
    />
  );
};

export const generateStaticParams = async () => {
  const totalVideos = videos.length;
  const perPage = 12;
  const totalPages = Math.ceil(totalVideos / perPage);
  
  return Array.from({ length: totalPages }, (_, index) => ({
    number: (index + 1).toString(),
  })).slice(1);
};

export default VideoPage;
