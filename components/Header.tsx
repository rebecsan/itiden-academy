import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useRef } from "react";

export const Header: React.FC<{ subTitle?: string }> = ({ subTitle }) => {
  // Use scroll to animate header wit Framer motion
  const { scrollY } = useViewportScroll();
  // Calculate height of header
  const header = useRef<HTMLElement>(null);
  const headerHeight = () => (header.current ? header.current.clientHeight : 0);

  // Change opacity with scroll, between 0 and 1. Fully transparent after 1/3 of header
  const logoOpacity = scrollY
    ? useTransform(
        scrollY,
        (headerScrollPos) =>
          (headerHeight() - headerScrollPos * 3) / headerHeight()
      )
    : 1;

  // Scale down contact link and logo to 80% on scroll down
  const linkScale = useTransform(scrollY, (headerScrollPos) =>
    Math.max(0.8, 1 - (0.4 * headerScrollPos) / headerHeight())
  );

  return (
    <>
      <header ref={header} className="w-screen max-w-5xl mx-auto">
        {/* Purple logo */}
        <div className="flex justify-between">
          <img
            className="flex-grow-0 justify-self-start mx-4"
            src="/logosm.svg"
          ></img>
          {/* Shrink purple e-mail box */}
          <motion.div
            className="fixed right-0 z-20 max-w-5xl mr-4"
            style={{ scale: linkScale }}
          >
            <div className="bg-purple-700 w-48 flex mt-5 max-h-6 py-1 px-6 rounded-full">
              <a href="mailto:academy@itiden.se" className="self-center">
                academy@itiden.se
              </a>
            </div>
          </motion.div>
          {/* Shrink and change opacity on itiden-logo and page title */}
          <motion.section
            className={
              "fixed flex flex-col max-w-5xl py-40 z-0 left-0 right-0 mx-auto"
            }
            style={{ opacity: logoOpacity, scale: linkScale }}
          >
            <img
              className="self-center mb-3 mr-4"
              src="/itiden.svg"
              alt="itiden logo"
            ></img>
            {subTitle && (
              <h1 className="self-center uppercase mr-4">{subTitle}</h1>
            )}
          </motion.section>
        </div>
      </header>
    </>
  );
};
