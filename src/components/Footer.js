// components/Footer.jsx
'use client';

import Container from "./Container";
import Heading from "./Heading";
import BodyText from "./BodyText";
import { FOOTER_CONTENT } from "@/constants/footer";
import { SOCIAL_LINKS } from "@/constants/socials";
import NAV_LINKS from "@/constants/navlinks";
import { PROJECTS_DATA } from "@/constants/projects";
import { theme } from "@/theme";
import Link from "next/link";

const sectionSpacing = "space-y-3 xl:space-y-4";

export default function Footer() {
  const { company } = FOOTER_CONTENT;

  const menuLinks = NAV_LINKS.filter(({ name }) =>
    ["Home", "About", "Expertise"].includes(name)
  );
  const mediaLinks = NAV_LINKS.filter(({ name }) =>
    ["Media", "Contact Us"].includes(name)
  );

  return (
    <Container className={`bg-black text-white footer z-100 ${theme.paddingVertical}`}>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Left: Company Info */}
        <div className="col-span-12 md:col-span-4 space-y-4">
          <Heading text={company.name} size="text-base" centered={false} />
          <BodyText
            text={company.description}
            className="text-sm max-w-xs"
            centered={false}
            color="text-grayText"
          />
          <Heading text="Location:" size="text-sm" centered={false} />
          <div className="space-y-1">
            {company.location.map((line, idx) => (
              <BodyText
                key={idx}
                text={line}
                className="text-sm"
                centered={false}
                color="text-grayText"
              />
            ))}
          </div>
        </div>

        {/* Right: Footer Columns */}
        <div className="col-span-12 md:col-span-8 grid grid-cols-8 gap-8">
          {/* Menu Links */}
          <div className={`col-span-8 md:col-span-2 ${sectionSpacing}`}>
            {menuLinks.map(({ name }) => (
              <Link key={name} href={name === "Home" ? "/" : "#"}>
                <BodyText
                  text={name.toUpperCase()}
                  className="text-base"
                  centered={false}
                  color="text-white"
                />
              </Link>
            ))}
          </div>

          {/* Projects */}
          <div className={`col-span-8 md:col-span-3 ${sectionSpacing}`}>
            <Heading text="PROJECTS" size="text-base" centered={false} />
            {PROJECTS_DATA.map(({ name }) => (
              <Link key={name} href="#">
                <BodyText
                  text={name.toUpperCase()}
                  className="text-sm"
                  centered={false}
                  color="text-grayText"
                />
              </Link>
            ))}
          </div>

          {/* Media + Socials */}
          <div className={`col-span-8 md:col-span-3 ${sectionSpacing}`}>
            <Heading text="MEDIA" size="text-base" centered={false} />
            {mediaLinks.map(({ name }) => (
              <Link key={name} href="#">
                <BodyText
                  text={name.toUpperCase()}
                  className="text-sm"
                  centered={false}
                  color="text-grayText"
                />
              </Link>
            ))}

            <Heading text="CONTACT US" size="text-base" className="mt-6" centered={false} />
            <div className="flex space-x-3 mt-2">
              {SOCIAL_LINKS.map(({ icon, label, url }, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="bg-[#2b2b2b] p-3 rounded-full text-white hover:scale-110 transition"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-10 text-end">
        <BodyText
          color="text-white"
          size="text-sm"
          centered={false}
          text={`© Alpago Properties ${new Date().getFullYear()}`}
        />
      </div>

       <div className=" mt-10 text-center">
      <BodyText
  color="text-white"
  size="text-sm"
  centered={false}
text={
  <>
    Clone website created for by <a
      href="https://omerbaig.dev"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400"
    >Muhammad Omer Baig</a>. For non-commercial use only.
  </>
}

/>

      </div>
    </Container>
  );
}
