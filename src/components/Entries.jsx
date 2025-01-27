import { comment } from "postcss";

export default function Entries(){
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
    let book= 
      {
        gerne: "Fantacy",
        title: "Supreme Magus",
        auther: "by Tarun",
        likeI: "assets/icons/Entries/like.svg",
        likeTotal: 450,
        commentI: "assets/icons/Entries/comment.svg",
        commentTotal: 44,
        date: "Aug 14, 2024 | 09:20 AM",
      };
    
    return (
      <div className=" md:h-screen w-4/5 mx-auto">
        <div className="font-bold text-4xl text-left">Recent Entries</div>
        <div className="flex justify-between items-center">
          <div>Stories</div>
          <div>View All</div>
        </div>
        {bookImg.map((item) => (
          <div className="flex gap-2 justify-center items-center">
            <img src={item} alt="" />
            <div>
              <div className="">
                <div>{book.gerne}</div>
                <div>{book.title}</div>
                <div>{book.auther}</div>
                <div className=" flex gap-2 justify-center items-center">
                  <div className="flex gap-2">
                    <img src={book.likeI} alt="" />
                    <div>{book.likeTotal}</div>
                  </div>
                  <div className="flex gap-2">
                    <img src={book.commentI} alt="" />
                    <div>{book.commentTotal}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
}