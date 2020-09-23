import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Itiden from "./Itiden";
import ItidenSmallLight from "./ItidenSmallLight";

export const Header: React.FC<{ subTitle?: string }> = ({ subTitle }) => {
  // Use scroll to animate header with Framer motion
  const { scrollY } = useViewportScroll();
  const logoPos = useTransform(scrollY, (scrollPos) =>
    Math.min(0, scrollPos - 150)
  );
  // Calculate height of header
  const header = useRef<HTMLElement>(null);
  const headerHeight = () => (header.current ? header.current.clientHeight : 0);
  // Change opacity with scroll, between 0 and 1. Fully transparent after 1/3 of header
  const logoOpacity = useTransform(
    scrollY,
    (headerScrollPos) =>
      (headerHeight() - headerScrollPos * 0.7) / headerHeight()
  );
  // Scale down contact link to 90% on scroll down
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
            className="flex-grow-0 justify-self-start mx-4 top-0 md:hidden"
            src="/logosm.svg"
            alt="Itiden logo. Inverted purple triangle with cutoff top."
          ></img>
          <img
            className="flex-grow-0 justify-self-start mx-4 top-0 hidden md:block"
            src="/logolg.svg"
            alt="Itiden logo. Inverted purple triangle with cutoff top."
          ></img>
          <motion.div
            className="fixed flex flex-col bg-gray-100 bg-opacity-75 dark:bg-gray-800 dark:bg-opacity-75 h-10 items-start max-w-5xl z-20 left-0 right-0"
            style={{ y: logoPos }}
          >
            <div className="w-48 m-4 ml-4 lg:ml-0 hidden md:block">
              <Itiden />
            </div>
            <div className="w-48 m-6 ml-4 lg:ml-0 md:hidden">
              <ItidenSmallLight />
            </div>
          </motion.div>
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
              "fixed flex flex-col items-center max-w-5xl py-40 z-0 left-0 right-0 mx-auto md:pt-16 md:mx-40 md:right-auto md:left-auto"
            }
            style={{ opacity: logoOpacity, scale: logoScale }}
          >
            <Itiden />
            {subTitle && (
              <h1 className="sub-title pt-1 self-center md:self-start">
                {subTitle}
              </h1>
            )}
          </motion.section>
        </div>
      </header>
    </>
  );
};
