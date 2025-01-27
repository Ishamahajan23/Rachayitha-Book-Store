export default function Hobby() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center  w-4/5 mx-auto ">
      <div className="w-full md:w-1/2 md:m-auto flex flex-col justify-center items-center md:items-start gap-4">
        <div className="text-3xl md:text-4xl font-600 font-serif text-[#2F2D5C]  text-center md:text-left">
          Pursue <span className="text-grape">Your Hobby</span>,
          <br /> Unleash Your Creativity!
        </div>
        <div className="text-lg md:text-2xl text-center md:text-left">
          Nurture Your Talent,{" "}
          <span className="text-grape">Share Your Stories,</span> and Inspire
          Others
        </div>
        <button className="px-9 md:px-4 py-2 bg-grape text-white text-center rounded-lg shadow-sm">
          Start Writing
        </button>
      </div>
      <div className="w-full md:w-1/2  md:m-auto flex justify-center items-center">
        <img src="assets/images/other/girlwithbook.svg" alt="girlwithbook" />
      </div>
    </div>
  );
}
