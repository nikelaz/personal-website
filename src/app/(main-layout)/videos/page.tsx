import VideosView from "@/components/videos-view";
import videos from "@/data/videos";

const Videos = () => {
  return (
    <VideosView
      videos={videos}
      page={1}
    />
  );
};

export default Videos;
