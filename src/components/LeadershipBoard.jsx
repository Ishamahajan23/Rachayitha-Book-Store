"use client";
export default function LeadershipBoard() {
  const leaderboardData = [
    {
      rank: 1,
      name: "Suraj Khandwal",
      location: "Jaipur, Rajsthan",
      avatar: "assets/icons/leaderboard/avatar.svg",
      metrics: {
        documents: 4,
        views: 3450,
        likes: 3450,
      },
    },
    {
      rank: 2,
      name: "Suraj Khandwal",
      location: "Jaipur, Rajsthan",
      avatar: "assets/icons/leaderboard/avatar.svg",
      metrics: {
        documents: 4,
        views: 3450,
        likes: 3450,
      },
    },
    {
      rank: 3,
      name: "Suraj Khandwal",
      location: "Jaipur, Rajsthan",
      avatar: "assets/icons/leaderboard/avatar.svg",
      metrics: {
        documents: 4,
        views: 3450,
        likes: 3450,
      },
    },
    {
      rank: 4,
      name: "Suraj Khandwal",
      location: "Jaipur, Rajsthan",
      avatar: "assets/icons/leaderboard/avatar.svg",
      metrics: {
        documents: 4,
        views: 3450,
        likes: 3450,
      },
    },
    {
      rank: 5,
      name: "Suraj Khandwal",
      location: "Jaipur, Rajsthan",
      avatar: "assets/icons/leaderboard/avatar.svg",
      metrics: {
        documents: 4,
        views: 3450,
        likes: 3450,
      },
    },
    {
      rank: 6,
      name: "Suraj Khandwal",
      location: "Jaipur, Rajsthan",
      avatar: "assets/icons/leaderboard/avatar.svg",
      metrics: {
        documents: 4,
        views: 3450,
        likes: 3450,
      },
    },
    {
      rank: 7,
      name: "Suraj Khandwal",
      location: "Jaipur, Rajsthan",
      avatar: "assets/icons/leaderboard/avatar.svg",
      metrics: {
        documents: 4,
        views: 3450,
        likes: 3450,
      },
    },
    {
      rank: 8,
      name: "Suraj Khandwal",
      location: "Jaipur, Rajsthan",
      avatar: "assets/icons/leaderboard/avatar.svg",
      metrics: {
        documents: 4,
        views: 3450,
        likes: 3450,
      },
    },
  ];
  return (
    <div
      style={{
        background: `url("assets/backgrounds/gradient-bg.svg")`,
      }}
      className="mb-10 !bg-cover !bg-center"
    >
      <div className="flex items-center md:items-start flex-col md:flex-row justify-center md:justify-end">
        <div className="mt-10 w-full md:w-3/5">
          <div className="p-2 md:p-4">
            <div className="max-w-4xl flex flex-col justify-start mx-auto space-y-6">
              <h1 className="text-lg md:text-4xl font-bold text-white leading-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
                Select Competition to view leadership board
              </h1>
              <button className="w-full flex justify-between items-center border-8 border-grape border-r-8 border-opacity-80 bg-white rounded-lg p-6 transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-lg">
                <h2 className="text-xl md:text-2xl text-left font-bold text-grape">
                  Novel Writing Competition
                </h2>
                <img src="/assets/icons/leaderboard/dropdown.svg" />
              </button>
              <div className="text-white text-lg md:text-xl font-medium">
                <span className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
                  Read | Write | Participate & Compete
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src="/assets/icons/leaderboard/leaderboard-banner.svg" />
        </div>
      </div>
      <div className="w-full p-2 md:p-0 md:w-4/5 -md:mt-20 pb-40 md:pb-96 mx-auto">
        <div className="flex flex-col md:flex-row justify-start items-start md:items-center gap-2">
          <div className="text-white w-full md:w-fit text-3xl md:text-4xl text-bold">
            Engagement Leaderboard
          </div>
          <div className="relative w-full md:w-1/3">
            <div className="relative w-full flex items-center h-12 border-2 rounded-lg border-grape focus-within:shadow-lg bg-white overflow-hidden">
              <div className="grid place-items-center h-full w-12 text-gray-300">
                <img src="/assets/icons/header/Vector.svg" alt="Logo" />
              </div>

              <input
                className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                type="text"
                id="search"
                placeholder="Search your rank by writing your book name.."
              />
            </div>
          </div>
        </div>
        <div className="flex text-[7px] md:text-lg my-10 flex-col gap-6 shadow-md">
          {leaderboardData.map((entry) => (
            <div
              key={entry.rank}
              className="flex items-center bg-black bg-opacity-20 shadow-xl backdrop-blur-sm justify-between p-4 rounded-xl"
            >
              <div className="flex items-center justify-center gap-4">
                <div className="relative w-12 h-12">
                  {
                    <img
                      className="w-6 m-auto h-6 md:w-12 md:h-12"
                      src={`assets/icons/leaderboard/${
                        entry.rank === 1 ? "Vector-1" : "Vector-5"
                      }.svg`}
                      alt=""
                    />
                  }
                  <span className="text-white/80 font-bold w-fit absolute m-auto top-3 bottom-0 right-0 left-0">
                    {entry.rank}
                  </span>
                </div>
                <img className="w-8 h-8 md:w-12 md:h-12" src={entry.avatar} />
                <div className="flex flex-col">
                  <span className="text-white font-semibold">{entry.name}</span>
                  <span className="text-white/60">{entry.location}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-6">
                <div className="flex items-center  gap-1 md:gap-2 px-3 py-1.5 bg-purple-950/50 rounded-full">
                  <img
                    className="w-4 h-4 md:w-6 md:h-6"
                    src="/assets/icons/leaderboard/Vector-4.svg"
                    alt=""
                  />

                  <span className="text-white font-medium">
                    {entry.metrics.documents}
                  </span>
                </div>
                <div className="flex items-center  gap-1 md:gap-2 px-3 py-1.5 bg-purple-950/50 rounded-full">
                  <img
                    className="w-4 h-4 md:w-6 md:h-6"
                    src="/assets/icons/leaderboard/view.svg"
                    alt=""
                  />
                  <span className="text-white font-medium">
                    {entry.metrics.views.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center  gap-1 md:gap-2 px-3 py-1.5 bg-purple-950/50 rounded-full">
                  <img
                    className="w-4 h-4 md:w-6 md:h-6"
                    src="/assets/icons/leaderboard/Vector-3.svg"
                    alt=""
                  />
                  <span className="text-white font-medium">
                    {entry.metrics.likes.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="px-9 md:px-4 py-2 bg-grape text-white font-semibold text-center rounded-lg shadow-sm">
            View full Leadership Board
          </button>
        </div>
      </div>
    </div>
  );
}
