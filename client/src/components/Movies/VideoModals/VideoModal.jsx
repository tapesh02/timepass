import React from "react";

import MobileVideoModal from "./MobileVideoModal";
import DesktopVideoModal from "./DesktopVideoModal";

const VideoModal = ({ handleWatchClose, movieVideoId, handleWatchCloseTv, tvId }) => {
    return (
        <>
            <DesktopVideoModal movieVideoId={movieVideoId} tvId={tvId} handleWatchCloseTv={handleWatchCloseTv} handleWatchClose={handleWatchClose} />
            <MobileVideoModal movieVideoId={movieVideoId} tvId={tvId} handleWatchCloseTv={handleWatchCloseTv} handleWatchClose={handleWatchClose} />
        </>
    );
};

export default VideoModal;
