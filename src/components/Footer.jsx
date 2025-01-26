"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const footerLinks = {
  Discover: [
    { href: "/", label: "Home" },
    { href: "/novels", label: "Novels" },
    { href: "/authors", label: "Authors" },
    { href: "/subjects", label: "Subjects" },
    { href: "/collections", label: "Collections" },
    { href: "/search", label: "Advanced Search" },
    { href: "#top", label: "Return to Top" },
  ],
  Resources: [
    { href: "/tags", label: "Tags" },
    { href: "/apps", label: "Download Apps" },
    { href: "/author", label: "Be an Author" },
    { href: "/help", label: "Help Center" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/keywords", label: "Keywords" },
  ],
  Help: [
    { href: "/support", label: "Support Us" },
    { href: "/help", label: "Help Center" },
    { href: "/report", label: "Report a Problem" },
    { href: "/suggest", label: "Suggesting Edits" },
  ],
  "Change Website Language": [
    { href: "?lang=en", label: "English" },
    { href: "?lang=hi", label: "Hindi" },
  ],
};

export default function Footer() {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <footer className="w-6/7 m-auto border-t bg-background py-12">
      <div className="container m-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-5 lg:gap-12 text-center md:text-left">
        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category} className="space-y-4">
            <h2
              className="text-lg flex gap-2 items-center text-nowrap  justify-center font-semibold cursor-pointer md:cursor-default"
              onClick={() => toggleCategory(category)}
            >
              {category}{" "}
              <img
                className={`block md:hidden ${
                  openCategory === category ? "rotate-180" : ""
                }`}
                src="/assets/icons/footer/arrow-down.svg"
                alt="Arrow"
              />
            </h2>
            <ul
              className={`space-y-2 ${
                openCategory === category ? "block" : "hidden"
              } md:block`}
            >
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:underline flex justify-center"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="space-y-4 h-full">
          <h2 className="text-lg font-semibold">Follow us</h2>
          <div className="flex justify-center md:justify-start space-x-4">
            <Link href="#" className="text-purple-600 hover:text-purple-700">
              <Image
                src="/assets/icons/footer/fb.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-purple-600 hover:text-purple-700">
              <Image
                src="/assets/icons/footer/ig.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-purple-600 hover:text-purple-700">
              <Image
                src="/assets/icons/footer/tw.svg"
                alt="Twitter"
                width={24}
                height={24}
              />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
          <div className="pt-4 flex w-full justify-center">
            <Image
              src="/assets/icons/header/image 66.svg"
              alt="Rachayitha Logo"
              width={150}
              height={40}
              className="h-auto w-auto"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
