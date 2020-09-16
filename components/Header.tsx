import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useRef } from "react";
import { useDarkMode } from "../utils/themeContext";

export const Header: React.FC<{ subTitle?: string }> = ({ subTitle }) => {
  const { isDarkMode } = useDarkMode();
  // Use scroll to animate header with Framer motion
  const { scrollY } = useViewportScroll();
  // Calculate height of header
  const header = useRef<HTMLElement>(null);
  const headerHeight = () => (header.current ? header.current.clientHeight : 0);

  // Change opacity with scroll, between 0 and 1. Fully transparent after 1/3 of header
  const logoOpacity = scrollY
    ? useTransform(
        scrollY,
        (headerScrollPos) =>
          (headerHeight() - headerScrollPos * 0.7) / headerHeight()
      )
    : 1;

  // Scale down contact link to 80% on scroll down
  const linkScale = useTransform(scrollY, (headerScrollPos) =>
    Math.max(0.9, 1 - (0.4 * headerScrollPos) / headerHeight())
  );
  // Scale down logo to 60% on scroll down
  const logoScale = useTransform(scrollY, (headerScrollPos) =>
    Math.max(0.6, 1 - (0.1 * headerScrollPos) / headerHeight())
  );

  return (
    <>
      <header ref={header} className="w-screen max-w-5xl mx-auto top-0">
        {/* Purple logo */}
        <div className="flex justify-between">
          <img
            className="flex-grow-0 justify-self-start mx-4 lg:mx-0 top-0"
            src="/logosm.svg"
          ></img>
          {/* <motion.div className="div">
            
          </motion.div> */}
          {/* Shrink purple e-mail box */}
          <div className="fixed flex flex-col max-w-5xl left-0 right-0 mx-auto w-screen z-20">
            <motion.div
              className="bg-purple-700 shadow-custom self-end w-48 flex mt-5 mr-4 lg:mr-0 max-h-6 py-1 px-6 rounded-full"
              style={{ scale: linkScale }}
            >
              <a
                href="mailto:academy@itiden.se"
                className="self-center text-lightblue"
              >
                academy@itiden.se
              </a>
            </motion.div>
          </div>
          {/* Shrink and change opacity on itiden-logo and page title */}
          <motion.section
            className={
              "fixed flex flex-col max-w-5xl py-40 z-0 left-0 right-0 mx-auto"
            }
            style={{ opacity: logoOpacity, scale: logoScale }}
          >
            <img
              src={isDarkMode ? "/itiden.svg" : "/itidendark.svg"}
              alt="itiden logo"
            ></img>
            {subTitle && <h1 className="self-center uppercase">{subTitle}</h1>}
          </motion.section>
        </div>
      </header>
    </>
  );
};
