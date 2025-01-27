import { comment } from "postcss";

export default function Entries() {
  let bookImg = [
    "assets/images/books/1.svg",
    "assets/images/books/2.svg",
    "assets/images/books/3B.svg",
  ];
  let poemImg = [
    "assets/images/books/4B.svg",
    "assets/images/books/5B.svg",
    "assets/images/books/6B.svg",
  ];
  let book = {
    gerne: "Fantasy",
    title: "Supreme Magus",
    auther: "by Tarun",
    likeI: "assets/icons/Entries/like.svg",
    likeTotal: 450,
    commentI: "assets/icons/Entries/comment.svg",
    commentTotal: 44,
    date: "Aug 14, 2024 | 09:20 AM",
  };

  return (
    <div className=" flex flex-col  gap-3 w-4/5 mx-auto my-10">
      <div className="font-bold text-4xl text-center md:text-left">
        Recent Entries
      </div>

      <div className="flex justify-between items-center w-full  gap-2">
        <div className="font-semibold text-lg text-[#2F2D5C]"> Stories</div>
        <div className="underline text-grape"> View All</div>
      </div>
      <div className="flex justify-center md:justify-between w-full h-full items-start  gap-3 flex-wrap ">
        {bookImg.map((item) => (
          <div className="flex hover:cursor-pointer gap-4 h-full flex-grow hover:shadow-2xl items-stretch border-[1px] p-3 rounded-lg border-grape bg-[#F7F3FF]">
            <div>
              <img src={item} alt="" className="shadow-2xl" />
            </div>
            <div className="flex  flex-col justify-between items-start gap-4">
              <div className="flex flex-col gap-1 ">
                <div className="bg-grape w-fit rounded-2xl px-4 py-1 text-white text-xs">
                  {book.gerne}
                </div>
                <div>{book.title}</div>
                <div className="text-grape">{book.auther}</div>
                <div className=" flex gap-2  items-start">
                  <div className="flex gap-2">
                    <img src={book.likeI} alt="" />
                    <div className="text-grape">{book.likeTotal}</div>
                  </div>
                  <div className="flex gap-2">
                    <img src={book.commentI} alt="" />
                    <div className="text-grape">{book.commentTotal}</div>
                  </div>
                </div>
              </div>

              <div className="text-sm text-[#3E3E3E] ">
                {book.date}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center w-full  gap-2">
        <div className="font-semibold text-lg text-[#2F2D5C]"> Poem</div>
        <div className="underline text-grape"> View All</div>
      </div>
      <div className="flex justify-center md:justify-between w-full items-start gap-3 flex-wrap">
        {poemImg.map((item) => (
          <div className="flex gap-4 hover:cursor-pointer flex-grow h-full hover:shadow-2xl  items-stretch border-[1px] p-3 rounded-lg border-grape bg-[#F7F3FF]">
            <div>
              <img src={item} alt="" className="shadow-2xl" />
            </div>
            <div className="flex  flex-col justify-between items-start gap-4">
              <div className="flex flex-col gap-1 ">
                <div className="bg-grape w-fit rounded-2xl px-4 py-1 text-white text-xs">
                  {book.gerne}
                </div>
                <div>{book.title}</div>
                <div className="text-grape">{book.auther}</div>
                <div className=" flex gap-2  items-start">
                  <div className="flex gap-2">
                    <img src={book.likeI} alt="" />
                    <div className="text-grape">{book.likeTotal}</div>
                  </div>
                  <div className="flex gap-2">
                    <img src={book.commentI} alt="" />
                    <div className="text-grape">{book.commentTotal}</div>
                  </div>
                </div>
              </div>

              <div className="text-xs md:text-sm text-[#3E3E3E] ">
                {book.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
