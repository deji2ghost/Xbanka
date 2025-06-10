const AboutUs = () => {
  return (
    <div className="py-[148px] px-[120px] flex flex-col gap-[48px]">
      <h1 className="font-[400] text-[48px] text-center">A little about us</h1>
      <video controls width="1272" height="539">
        <source src="path/to/video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default AboutUs;
