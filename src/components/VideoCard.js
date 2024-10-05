import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info);
    const { snippet, statistics } = info;
    const { title, channelTitle, thumbnails } = snippet;
  return (
    <div className='p-2 m-1 w-80 shadow-sm'>
        <img alt='thumbnails' className='rounded-lg' src={thumbnails.medium.url}/>
        <ul>
            <li className='font-bold p-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
        VideoCard
    </div>
  );
};

export const AdVideoCard = ({info}) => {
  return (
    <div className='border border-red-800'>
      <VideoCard info={info}/>
    </div>
  );
};

export default VideoCard
