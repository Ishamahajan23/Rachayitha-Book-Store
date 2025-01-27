
export default function Rules(){
      let icon="assets/icons/rules/rightstick.svg";
      let rule = [
        " Provide detailed and thoughtful critiques or submissions.",
        " Ensure all content is original, avoiding plagiarism.",
        " Focus on literary works like stories, poems, and shayaris.",
        " Support your work with relevant references and authentic information.",
        " High-quality, well-crafted submissions are more likely to be featured and rewarded.",
      ];

      return (
        <div className="flex flex-col items-center justify-center md:h-screen w-full  gap-10 md:gap-0 ">
          <div className="font-bold text-2xl md:text-4xl font-sans flex justify-center items-center ">
            Rules and Guidelines
          </div>

          <div className="flex relative flex-col-reverse md:flex-row justify-center md:h-2/3 w-full">
            <div className="w-full  md:w-1/2 my-2 flex justify-center items-center">
              <img
                src="assets/images/other/rules.svg"
                alt="rules"
                className=" w-4/5"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col  mx-10 md:mx-0 justify-start md:justify-center items-start gap-7">
              <div className="text-xl font-bold font-sans text-[#333333]  w-4/5 md:w-full gap-2">
                Key Points
              </div>
              <div className="flex flex-col justify-center items-start text-600 w-4/5 gap-5">
                {rule.map((item) => (
                  <div className="flex gap-2">
                    <img src={icon} alt="" />
                    <div className="text-[#666666]">{item}</div>
                  </div>
                ))}
              </div>
              <button
                type="button"
                className="py-1 px-5 text-xs text-grape rounded-md border-grape border-2 mx-10 md:mx-0"
              >
                Read Terms & Guidelines
              </button>
            </div>
          </div>
        </div>
      );
}