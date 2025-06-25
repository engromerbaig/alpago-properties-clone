'use client';

import Container from "./Container";
import Heading from "./Heading";
import BodyText from "./BodyText";
import { FOOTER_CONTENT } from "@/constants/footer";
import { theme } from "@/theme";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

const iconMap = {
  FaFacebookF: <FaFacebookF />,
  FaInstagram: <FaInstagram />,
  FaLinkedinIn: <FaLinkedinIn />,
  FaYoutube: <FaYoutube />,
  FaTiktok: <FaTiktok />,
};

export default function Footer() {
  const { company, links, socialIcons } = FOOTER_CONTENT;

  return (
    <Container className={`bg-black z-100 text-white ${theme.paddingVertical} `}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Company Info */}
        <div>
          <h2 className="text-lg font-semibold mb-2">{company.name}</h2>
          <p className="text-sm text-gray-300 mb-4">{company.description}</p>
          <p className="font-semibold text-sm mb-1">Location:</p>
          {company.location.map((line, index) => (
            <p key={index} className="text-sm text-gray-300">{line}</p>
          ))}
        </div>

        {/* Menu Links */}
        <div>
          <h3 className="text-sm font-semibold mb-2">HOME</h3>
          {links.menu.map((item) => (
            <p key={item} className="text-sm text-white hover:underline cursor-pointer">
              {item.toUpperCase()}
            </p>
          ))}
        </div>

        {/* Projects */}
        <div>
          <h3 className="text-sm font-semibold mb-2">PROJECTS</h3>
          {links.projects.map((item) => (
            <p key={item} className="text-sm text-white hover:underline cursor-pointer">
              {item.toUpperCase()}
            </p>
          ))}
        </div>

        {/* Media + Social */}
        <div>
          <h3 className="text-sm font-semibold mb-2">MEDIA</h3>
          {links.media.map((item) => (
            <p key={item} className="text-sm text-white hover:underline cursor-pointer">
              {item.toUpperCase()}
            </p>
          ))}
          <h3 className="text-sm font-semibold mt-6 mb-2">CONTACT US</h3>
          <div className="flex space-x-3 mt-2">
            {socialIcons.map(({ icon, url }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2b2b2b] p-3 rounded-full text-white hover:scale-110 transition"
              >
                {iconMap[icon]}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="text-xs text-gray-400 mt-10 text-end">
        © Alpago Properties {new Date().getFullYear()}
      </div>
    </Container>
  );
}
