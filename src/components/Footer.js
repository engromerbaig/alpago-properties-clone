'use client';

import Container from "./Container";
import Heading from "./Heading";
import BodyText from "./BodyText";
import { FOOTER_CONTENT } from "@/constants/footer";
import { SOCIAL_LINKS } from "@/constants/socials";
import { theme } from "@/theme";

export default function Footer() {
  const { company, links } = FOOTER_CONTENT;

  return (
    <Container className={`bg-black z-100 text-white ${theme.paddingVertical}`}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Company Info */}
        <div>
          <Heading text={company.name} size="text-lg" className="mb-2" centered={false} />
          <BodyText text={company.description} className="text-sm text-white mb-4" centered={false} />
          <Heading text="Location:" size="text-sm" className="mb-1" centered={false} />
          {company.location.map((line, idx) => (
            <BodyText key={idx} text={line} className="text-sm text-white" centered={false} />
          ))}
        </div>

        {/* Menu Links */}
        <div className="space-y-2 xl:space-y-4">
          {links.menu.map((item) => (
            <BodyText
              key={item}
              text={item.toUpperCase()}
              className="text-sm text-white hover:underline cursor-pointer"
              centered={false}
            />
          ))}
        </div>

        {/* Projects */}
        <div>
          <Heading text="PROJECTS" size="text-sm" className="mb-2" centered={false} />
          {links.projects.map((item) => (
            <BodyText
              key={item}
              text={item.toUpperCase()}
              className="text-sm text-white hover:underline cursor-pointer"
              centered={false}
            />
          ))}
        </div>

        {/* Media + Socials */}
        <div>
          <Heading text="MEDIA" size="text-sm" className="mb-2"               centered={false}
 />
          {links.media.map((item) => (
            <BodyText
              key={item}
              text={item.toUpperCase()}
              className="text-sm text-white hover:underline cursor-pointer"
              centered={false}
            />
          ))}
          <Heading text="CONTACT US" size="text-sm" className="mt-6 mb-2" centered={false} />
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

      <div className="text-xs text-gray-400 mt-10 text-end">
        <BodyText text={`© Alpago Properties ${new Date().getFullYear()}`} />
      </div>
    </Container>
  );
}
