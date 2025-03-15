import Image from "@/components/Image";
import Link from "next/link";

const iconArr = [
  {
    id: 1,
    name: "Homepage",
    link: "/",
    icon: "home.svg",
  },
  {
    id: 2,
    name: "Explore",
    link: "/",
    icon: "explore.svg",
  },
  {
    id: 3,
    name: "Notification",
    link: "/",
    icon: "notification.svg",
  },
  {
    id: 4,
    name: "Messages",
    link: "/",
    icon: "message.svg",
  },
  {
    id: 5,
    name: "Bookmarks",
    link: "/",
    icon: "bookmark.svg",
  },
  {
    id: 6,
    name: "Jobs",
    link: "/",
    icon: "job.svg",
  },
  {
    id: 7,
    name: "Communities",
    link: "/",
    icon: "community.svg",
  },
  {
    id: 8,
    name: "Premium",
    link: "/",
    icon: "logo.svg",
  },
  {
    id: 9,
    name: "Profile",
    link: "/",
    icon: "profile.svg",
  },
  {
    id: 10,
    name: "More",
    link: "/",
    icon: "more.svg",
  },
];

export const LeftBar = () => {
  return (
    <div className="flex flex-col justify-between h-screen sticky top-0 pt-2 pb-8">
      <div className="pt-2 pl-2">
        {/* LOGO */}
        <Link href={"/"}>
          <Image path="/icons/logo.svg" alt="logo" w={24} h={24} />
        </Link>
      </div>
      <div className=" flex flex-1 flex-col my-2 gap-2 item pt-4 cursor-pointer">
        {/* MENU */}
        {iconArr.map((item) => (
          <Link
            href={item.link}
            key={item.id}
            className="flex items-center p-2 transition-colors duration-300 hover:bg-[#181818]  rounded-full"
          >
            <Image path={`/icons/${item.icon}`} alt={item.name} w={24} h={24} />
            <span className="hidden xxl:inline pl-6">{item.name}</span>
          </Link>
        ))}

        <Link
          href="/compose/post"
          className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center xxl:hidden"
        >
          <Image path="icons/post.svg" alt="new post" w={24} h={24} />
        </Link>
        <Link
          href="/compose/post"
          className="hidden xxl:block bg-white text-black rounded-full font-bold py-2 px-20"
        >
          Post
        </Link>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 relative rounded-full overflow-hidden">
            <Image
              path="/general/avatar.png"
              alt="lama dev"
              w={100}
              h={100}
              tr={true}
            />
          </div>
          <div className="hidden xxl:flex flex-col">
            <span className="font-bold">Ankan Biswas</span>
            <span className="text-sm text-textGray">@Ankandada</span>
          </div>
        </div>
        <div className="hidden xxl:block cursor-pointer font-bold">...</div>
      </div>
    </div>
  );
};
