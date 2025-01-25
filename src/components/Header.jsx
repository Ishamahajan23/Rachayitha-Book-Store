export default function Header() {
  const HeaderLinks = [
    {
      label: "Explore",
      link: "Browse.svg",
    },
    {
      label: "Ranking",
      link: "ranking.svg",
    },
    {
      label: "Create",
      link: "create.svg",
    },
    {
      label: "Library",
      link: "library 1.svg",
    },
    {
      label: "Shorts",
      link: "shorts-removebg-preview 1.svg",
    },
    {
      label: "",
      link: "Frame 2273.svg",
    },
  ];
  return (
    <header class="bg-white shadow-sm">
      <div class="container mx-auto py-4">
        <div class="flex  items-center w-full justify-between gap-5">
          <div class="flex gap-5 w-1/2 items-center space-x-4">
            <img src="assets/icons/header/image 66.svg" alt="Logo" />
            <div class="flex w-full items-center space-x-4">
              <div class="relative w-full">
                <div class="relative w-full flex items-center h-12 border-2 rounded-full border-grape focus-within:shadow-lg bg-white overflow-hidden">
                  <div class="grid place-items-center h-full w-12 text-gray-300">
                    <img src="assets/icons/header/Vector.svg" alt="Logo" />
                  </div>

                  <input
                    class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                    type="text"
                    id="search"
                    placeholder="Search novels, poems and many more.."
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-self-end space-x-4">
            <div class="flex gap-10">
              {HeaderLinks.map((link) => (
                <a
                  href="#"
                  class="text-gray-600 flex gap-2 items-center hover:text-purple-600"
                >
                  <img
                    src={`assets/icons/header/${link.link}`}
                    alt={link.label}
                  />
                  <div>{link.label}</div>
                </a>
              ))}
            </div>
            <div class="relative">
              <img
                src="assets/icons/header/Ellipse 251.svg"
                alt="User Avatar"
                class="w-8 h-8 rounded-full border-2 border-gray-200"
              />
              <div class="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
