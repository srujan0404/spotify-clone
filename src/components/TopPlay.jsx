import { useEffect, useRefs } from "react";
import {Link} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import {Swiper,SwiperSlide} from 'swiper/react';
import {FreeMode} from 'swiper';

import PlayPause from "./PlayPause";
import { playPause,setActiveSong } from "../redux/features/playerSlice";
import { useGetTopChartsQuery } from "../redux/services/ShazamCore";

import 'swiper/css';
import 'swiper/css/free-mode';
import { useRef } from "react";

const TopPlay = () =>
{
  const dispatch = useDispatch();
  const {activeSong, isPlaying } = useSelector((state) => state.player);
  const {data} = useGetTopChartsQuery();
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({behaviour: 'smooth'})
  })

  const topPlays = data?.slice(0,5);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div ref={divRef} className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex felx-col">
      <div></div>
    </div>
  );
};

export default TopPlay;
