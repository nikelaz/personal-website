import Container from "@/components/container";
import Card from "@/components/card";
import Tag from "@/components/tag";
import Button from "@/components/button";

type VideosViewProps = Readonly<{
  videos: Video[];
  page: number;
}>;

const getPageUrl = (page: number) => {
  return page === 1 ? "/videos" : `/videos/page/${page}`;
};

const VideosView = (props: VideosViewProps) => {
  const totalVideos = props.videos.length;
  const perPage = 12;
  const totalPages = Math.ceil(totalVideos / perPage);

  const videos = props.videos.slice(perPage * (props.page - 1), perPage * props.page);

  return (
    <Container>
      <section>
        <header className="flex flex-wrap justify-between items-center gap-4 md:gap-6 mb-12">
          <h1 className="leading-none">Videos</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videos.slice(0, 12).map((video, index) => (  
            <Card key={video.id}>
              <Card.Image src={`https://i3.ytimg.com/vi/${video.id}/maxresdefault.jpg`} loading={index < 8 ? "eager"  : "lazy"} alt={`${video.title} video thumbnail`} />
              <Card.Content>
                {video.tags ? (
                  <div className="flex items-center gap-2 flex-wrap">
                    {video.tags.map(tag => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                ) : null}
                <Card.Link href={`https://youtu.be/${video.id}`} target="_blank" rel="noopener">{video.title}</Card.Link>
                <p>{video.summary}</p>
              </Card.Content>
            </Card>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center pt-10 gap-3">
          <div className="pt-10 flex items-center gap-2">
            {props.page > 1 ? (
              <Button
                href={getPageUrl(props.page - 1)}
                variant="secondary"
              >
                Previous
              </Button>
            ) : null}
            {Array.from({ length: totalPages }, (_, index) => (
              <Button
                key={index + 1}
                href={getPageUrl(index + 1)}
                disabled={props.page === index + 1}
                variant="secondary"
              >
                {index + 1}
              </Button>
            ))}
            { props.page < totalPages ? (
              <Button
                href={getPageUrl(props.page + 1)}
                variant="secondary"
              >
                Next
              </Button>
            ) : null}
          </div>
          <p className="text-xs">{totalVideos} videos total</p>
        </div>

      </section>
    </Container>
  );
};

export default VideosView;
