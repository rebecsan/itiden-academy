import { Lottie } from "@crello/react-lottie";
import animationData from "../public/arrow.json";

export const LottieArrow: React.FC<{
  expand: boolean;
}> = ({ expand }) => {
  return (
    <div>
      <Lottie
        config={{ animationData, autoplay: false }}
        direction={expand ? 1 : -1}
      />
    </div>
  );
};

export default LottieArrow;
