import React from 'react';
import VideoCard from './VideoCard';
import MkdSDK from '../utils/MkdSDK';

const VideoComponent = (props) => {
  const [videoData, setVideoData] = React.useState({});
  //methods
  const fetchVideo = (page = 1) => {
    const sdk = new MkdSDK();

    sdk._table = 'video';
    sdk
      .callRestAPI(
        {
          page,
        },
        'PAGINATE'
      )
      .then((data) => {
        setVideoData(data);
      });
  };

  React.useEffect(() => {
    fetchVideo();

    return () => {};
  }, []);

  return (
    <>
      {videoData.list && videoData.list.length > 0 ? (
        <>
          {videoData.list.map((video, i) => (
            <VideoCard
              key={i}
              number={`${i + 1 >= 10 ? i + 1 : `0${i + 1}`}`}
              src={video.photo}
              details={video.title}
              srcSide={video.photo}
              author={video.username}
              like={video.like}
              srcArrow="/icons/arrow.svg"
            />
          ))}

          <div className="flex items-center justify-center p-6 pt-10 pb-20 space-x-6">
            <button
              className="flex items-center justify-center w-32 h-12 gap-2 p-3 rounded-full bg-lightGreen"
              onClick={() =>
                fetchVideo(videoData.page - 1 < 0 ? 1 : videoData.page - 1)
              }
            >
              <span className="text-sm leading-5 tracking-tight font-inter">
                PREV
              </span>
            </button>
            <button
              className="flex items-center justify-center w-32 h-12 gap-2 p-3 rounded-full bg-lightGreen"
              onClick={() =>
                fetchVideo(
                  videoData.page + 1 > videoData.num_pages
                    ? videoData.num_pages
                    : videoData.page + 1
                )
              }
            >
              <span className="text-sm leading-5 tracking-tight font-inter">
                NEXT
              </span>
            </button>
          </div>
        </>
      ) : (
        <div className="w-full">
          <p className="text-xl font-thin text-center text-upText">
            No data to display
          </p>
        </div>
      )}
    </>
  );
};

export default VideoComponent;
