
export default function Benifits(){
    

    return (
      <div className="flex flex-col justify-center items-center  w-full gap-9 mb-24">
        <div className="font-bold text-2xl md:text-4xl font-sans flex justify-center items-center text-center">
          Benefits of Participating in contest:
        </div>
        <div className="flex flex-col justify-center items-center gap-2 md:gap-5 w-full md:w-4/5">
          <div className="flex flex-col md:flex-row justify-between  md:justify-center items:end md:items-center gap-2 w-full md:w-2/3 ">
            <div className="flex justify-start md:justify-center items-start md:items-center gap-3 border-0 shadow-lg  rounded-md pl-10 p-3 md:p-3 ">
              <img src="assets/icons/benifits/certificates.svg" alt="" />
              <div className="">Certificates of Achievement</div>
            </div>
            <div className="flex justify-start md:justify-center items-center gap-3 border-0 shadow-lg rounded-md pl-10 p-3 md:p-3">
              <img src="assets/icons/benifits/subscription.svg" alt="" />
              <div>Free Subscription to Premium Features</div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-center justify-evenly items:end md:items-center gap-2 w-full md:w-2/3">
            <div className="flex justify-start md:justify-center items-center gap-3 border-0 shadow-lg rounded-md pl-10 p-3 md:p-3">
              <img src="assets/icons/benifits/cash.svg" alt="" />
              <div> Instant Cash Rewards</div>
            </div>
            <div className="flex justify-start md:justify-center items-center gap-3 border-0 shadow-lg rounded-md pl-10 p-3 md:p-3">
              <img src="assets/icons/benifits/feature.svg" alt="" />
              <div>Feature on Rachayitha</div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between  md:justify-center items:end md:items-center gap-2 w-full md:w-2/3 ">
            <div className="flex justify-start md:justify-center items-center gap-3 border-0 shadow-lg rounded-md pl-10 p-3 md:p-3">
              <img src="assets/icons/benifits/social.svg" alt="" />
              <div>Social Media Promotions</div>
            </div>
            <div className="flex justify-start md:justify-center items-center gap-3 border-0 shadow-lg rounded-md pl-10 p-3 md:p-3">
              <img src="assets/icons/benifits/internship.svg" alt="" />
              <div> Internship Opportunities at Rachayitha</div>
            </div>
          </div>

          <div className="flex justify-center items:end md:items-center gap-2 w-full md:w-2/3">
            <div className="flex justify-start md:justify-center items-center gap-3 border-0 shadow-lg rounded-md pl-10 p-3 md:p-3">
              <img src="assets/icons/benifits/webinar.svg" alt="" />
              <div>Access to Free Webinars and Writing Workshops</div>
            </div>
          </div>
        </div>
      </div>
    );
}