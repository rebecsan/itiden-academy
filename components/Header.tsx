import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useRef } from "react";

export const Header: React.FC<{ subTitle?: string }> = ({ subTitle }) => {
  // Use scroll to animate and minimize header
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

  // // Fully visible at top of page, shrinks to zero as header scrolls out of view
  // const logoHeight = useTransform(scrollY, (y) => headerHeight() - y);

  // Scale down contact link and logo to 80% on scroll down
  const linkScale = useTransform(scrollY, (headerScrollPos) =>
    Math.max(0.8, 1 - (0.4 * headerScrollPos) / headerHeight())
  );

  return (
    <>
      <header
        ref={header}
        className="inset-x-0 flex flex-wrap justify-between mx-4 top-0 lg:m-0"
      >
        <motion.div className="flex">
          {/* object-none = show original size
              object-bottom = position at bottom of div so img scrolls up */}
          <img
            className="flex-grow-0 object-none object-bottom"
            src="/logosm.svg"
          ></img>
        </motion.div>
        {/* Shrink purple e-mail box */}
        <motion.div
          className="fixed right-0 z-20"
          style={{ scale: linkScale, width: "inherit" }}
        >
          <div className="bg-purple-700 w-48 flex mt-5 max-h-6 py-1 px-6 rounded-full">
            <span className="self-center">academy@itiden.se</span>
          </div>
        </motion.div>
        {/* Shrink and change opacity on itiden-logo and page title */}
        <motion.section
          className={"fixed flex flex-col w-full py-40 z-0"}
          style={{ opacity: logoOpacity, scale: linkScale }}
        >
          <img
            className="self-center mb-3"
            src="/itiden.svg"
            alt="itiden logo"
          ></img>
          {subTitle && <h1 className="self-center uppercase">{subTitle}</h1>}
        </motion.section>
      </header>
    </>
  );
};
