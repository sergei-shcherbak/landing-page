import { BsInstagram, BsLinkedin, BsFiletypePdf } from "react-icons/bs";
import { SiSketchfab } from "react-icons/si";
import { TEXT, LINKS } from "../constants/comments";

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="container mx-auto flex max-w-6xl items-center px-2 py-8">
        <div className="mx-auto flex w-full flex-wrap items-center">
          <div className="flex w-full justify-center font-extrabold text-white md:w-1/2 md:justify-start">
            <a
              className="text-gray-900 no-underline hover:text-gray-900 hover:no-underline"
              href="#"
            >
              ✏️{" "}
              <span className="text-base text-gray-200">
                {" "}
                {TEXT.POSITION}
              </span>
            </a>
          </div>
          <div className="flex w-full content-center justify-between pt-2 md:w-1/2 md:justify-end">
            <ul className="list-reset flex flex-1 items-center justify-center md:flex-none">
              <li>
                <a
                  className="inline-block px-3 py-2 text-gray-600 no-underline hover:text-gray-200 hover:underline"
                  href={LINKS.LINKEDIN}
                >
                  <BsLinkedin size="1rem" />
                </a>
              </li>
              <li>
                <a
                  className="inline-block px-3 py-2 text-gray-600 no-underline hover:text-gray-200 hover:underline"
                  href={LINKS.INSTAGRAM}
                >
                  <BsInstagram size="1rem" />
                </a>
              </li>
              <li>
                <a
                  className="inline-block px-3 py-2 text-gray-600 no-underline hover:text-gray-200 hover:underline"
                  href={LINKS.SKETCHFAB}
                >
                  <SiSketchfab size="1rem" />
                </a>
              </li>
              <li>
                <a
                  className="inline-block px-3 py-2 text-gray-600 no-underline hover:text-gray-200 hover:underline"
                  href={LINKS.RESUME}
                >
                  <BsFiletypePdf size="1rem" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
