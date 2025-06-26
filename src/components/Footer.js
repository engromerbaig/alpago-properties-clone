'use client';

import Container from "./Container";
import Heading from "./Heading";
import BodyText from "./BodyText";
import { FOOTER_CONTENT } from "@/constants/footer";
import { SOCIAL_LINKS } from "@/constants/socials";
import { theme } from "@/theme";
import NAV_LINKS from "@/constants/navlinks";

export default function Footer() {
  const { company, links } = FOOTER_CONTENT;

  return (
    <Container className={`bg-black z-100 text-white ${theme.paddingVertical}`}>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Left: Company Info */}
        <div className="col-span-12 md:col-span-4">
          <Heading text={company.name} size="text-base" className="mb-2" centered={false} />
          <BodyText text={company.description} className="text-sm text-white mb-4 max-w-xs" centered={false}  color="text-grayText" />
          <Heading text="Location:" size="text-sm" className="mb-1" centered={false} />
          {company.location.map((line, idx) => (
            <BodyText key={idx} text={line} className="text-sm text-white" centered={false} color="text-grayText" />
          ))}
        </div>

        {/* Right: Nested Grid for 3 Columns */}
        <div className="col-span-12 md:col-span-8 grid grid-cols-8 gap-8">
          {/* Menu Links: span 2 */}
          <div className="col-span-8 md:col-span-2 space-y-2 xl:space-y-4">
            {links.menu.map((item) => (
              <BodyText
                key={item}
                text={item.toUpperCase()}
                className="text-base text-white hover:underline cursor-pointer"
                centered={false}
              />
            ))}
          </div>

          {/* Projects: span 3 */}
          <div className="col-span-8 md:col-span-3 space-y-2">
            <Heading text="PROJECTS" size="text-base" className="mb-2" centered={false} />
            {links.projects.map((item) => (
              <BodyText
                key={item}
                text={item.toUpperCase()}
                className="text-sm  hover:underline cursor-pointer"
                centered={false}
                color="text-grayText"
              />
            ))}
          </div>

          {/* Media & Socials: span 3 */}
          <div className="col-span-8 md:col-span-3">
            <Heading text="MEDIA" size="text-base" className="mb-2" centered={false} />
            {links.media.map((item) => (
              <BodyText
                key={item}
                text={item.toUpperCase()}
                className="text-sm text-white hover:underline cursor-pointer"
                centered={false}
                color="text-grayText"
              />
            ))}
            <Heading text="CONTACT US" size="text-base" className="mt-6 mb-2" centered={false} />
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

      <div className="text-xs text-gray-400 mt-10 text-end">
        <BodyText color="text-white" size="text-sm" centered={false} text={`© Alpago Properties ${new Date().getFullYear()}`} />
      </div>
    </Container>
  );
}
