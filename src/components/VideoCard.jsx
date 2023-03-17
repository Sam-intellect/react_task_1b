import React from "react";

const VideoCard = (props) => {
  return (
    <>
      <div className="flex justify-between w-full p-5 border border-[#848484] border-opacity-25 border-solid rounded-[15px] h-28">
        <div className="flex gap-3">
          <p className="p-5 text-sm font-normal leading-5 text-upText">{props.number}</p>
          <img className="h-16 rounded-lg w-144" src={props.src} alt={props.alt} />
          <p className="flex items-center text-base font-thin leading-7 text-white w-80 font-inter">
            {props.details}
          </p>
          <div className="flex gap-2 p-5">
            <img className="w-6 h-6 rounded-lg" src={props.srcSide} alt={props.altSide} />
            <h1 className="text-base font-thin leading-5 capitalize font-inter font-salt text-secondary text-lemon">
              {props.author}
            </h1>
          </div>
        </div>

        <div className="flex gap-1 p-6 ">
          <p className="font-sans text-sm font-normal leading-5 text-right text-white font-feature-salt">
            {props.like}
          </p>
          <div className="w-3 h-3">
            <img src={props.srcArrow} alt={props.altArrow} />
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
