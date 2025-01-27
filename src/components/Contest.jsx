export default function Contest() {
  let work = [
    {
      icon: "assets/icons/contest/poem.svg",
      title: "Write a Story or Poem :",
      description:
        "Share your creativity with the world! Submit your original works and contribute to literary community.",
    },
    {
      icon: "assets/icons/contest/reward.svg",
      title: "Recive your Reward :",
      description:
        "Each published piece will be rewarded with Rs. 50-200 within 14 days. Higher engagement and quality will lead to greater rewards!.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center md:h-screen w-full mx-auto gap-10 md:gap-0">
      <div className="w-5/6 md:w-1/2 flex flex-col justify-center items-center gap-2 md:gap-4">
        <div className="font-bold text-xl md:text-2xl font-sans">
          How to Win{" "}
        </div>
        <div className="font-bold text-2xl md:text-4xl font-sans flex gap-2 md:gap-4">
          Join the contest <img src="assets/images/other/trophy.svg" alt="" />
        </div>
        <div className=" font-thin md:font-normal font-sans text-center text-[#666666]">
          The best way is by writing and sharing your creative pieces—stories,
          poems, or shayaris—and joining our Literary Ambassador Program.
        </div>
      </div>

      <div className="flex relative flex-col-reverse md:flex-row justify-end md:h-screen w-full">
        <div className="w-full md:absolute left-0 md:w-1/2">
          <img
            src="assets/images/other/contest.svg"
            alt="contest"
            className=" w-4/5"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col my-auto h-full justify-start md:justify-center items-start gap-5">
          <div className="text-2xl font-bold font-sans text-[#333333] mx-auto w-4/5 md:w-full gap-2">
            Submit Your <span className="text-grape">Work</span>
          </div>
          <div className="flex pl-10 flex-col justify-center items-center w-4/5 gap-5">
            {work.map((item) => (
              <div className="flex justify-center items-center gap-4 ">
                <img src={item.icon} alt="" />
                <div>
                  <div className="font-bold">{item.title}</div>

                  <div className="text-[#666666]">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
