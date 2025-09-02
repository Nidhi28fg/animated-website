const Video = () => {
  return (
    <div className="w-full h-full">
      <video
        autoPlay
        muted
        loop
       className="h-full w-full object-cover"
        src="https://download-video-ak.vimeocdn.com/v3-1/playback/a278bb9c-996c-4760-8ca1-dd0abff308f7/83c745cf?__token__=st=1756824540~exp=1756828140~acl=%2Fv3-1%2Fplayback%2Fa278bb9c-996c-4760-8ca1-dd0abff308f7%2F83c745cf%2A~hmac=90b0d60023a8fb7ae5730dc25fc4c105d10ac5be17702aba850f72f5c0518f7c&r=dXMtd2VzdDE%3D"
      ></video>
    </div>
  );
};

export default Video;
