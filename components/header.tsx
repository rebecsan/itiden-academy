import { HomeProps } from "../pages";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useRef } from "react";

export const Header: React.FC<HomeProps> = ({ allCoursesData }) => {
  // Use
  const { scrollY } = useViewportScroll();
  const header = useRef<HTMLElement>(null);
  function headerHeight() {
    return header.current ? header.current.clientHeight : 0;
  }
  const logoOpacity = useTransform(
    scrollY,
    (headerScrollPos) => (headerHeight() - headerScrollPos * 3) / headerHeight()
  );
  const logoHeight = useTransform(scrollY, (y) => headerHeight() - y);
  const linkScale = useTransform(scrollY, (headerScrollPos) =>
    Math.max(0.8, 1 - (0.4 * headerScrollPos) / headerHeight())
  );
  // const negScroll = useTransform(scrollY);

  return (
    <>
      <header
        ref={header}
        className="fixed inset-x-0 flex flex-wrap justify-between px-4"
      >
        <motion.div
          className="flex"
          style={{
            maxHeight: logoHeight,
            scale: "100%",
          }}
        >
          <img
            className="flex-grow-0 object-none object-bottom"
            src="/logosm.svg"
          ></img>
        </motion.div>
        <motion.div className="" style={{ scale: linkScale }}>
          <div className="bg-purple-700 w-48 flex mt-5 max-h-6 py-1 px-6 rounded-full">
            <span className="self-center">academy@itiden.se</span>
          </div>
        </motion.div>
        <motion.section
          className="flex flex-col w-full py-24"
          style={{ opacity: logoOpacity, scale: linkScale }}
        >
          <img
            className="self-center mb-3"
            src="/itiden.svg"
            alt="itiden logo"
          ></img>
          {/* {allCoursesData.map(({ courseId }) => (
            <h1 className="self-center uppercase" key={courseId}>
              {courseId}
            </h1>
          ))} */}
        </motion.section>
      </header>
    </>
  );
};
