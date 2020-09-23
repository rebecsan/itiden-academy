import { Lottie } from "@crello/react-lottie";
import animationData from "../public/darkChevron.json";

export const DarkLottieChevron: React.FC<{
  expand: boolean;
}> = ({ expand }) => {
  return (
    <Lottie
      config={{ animationData, autoplay: false }}
      direction={expand ? 1 : -1}
      width="31px"
      height="19px"
    />
  );
};

export default DarkLottieChevron;
