import { useRef } from "react";

function VideoPlayer() {

  const videoRef = useRef(null);

  function playVideo() {
    videoRef.current.play();
  }

  function pauseVideo() {
    videoRef.current.pause();
  }

  function forwardVideo() {
    videoRef.current.currentTime += 5;
  }

  function rewindVideo() {
    videoRef.current.currentTime -= 5;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}> 
      
      <video
        ref={videoRef}
        width="500"
        controls={false}
      >
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/>
      </video>

      <br/><br/>

      <button onClick={playVideo}>▶ Play</button>
      <button onClick={pauseVideo}>⏸ Pause</button>
      <button onClick={forwardVideo}>⏩ +5s</button>
      <button onClick={rewindVideo}>⏪ -5s</button>

    </div>
  );
}

export default VideoPlayer;


