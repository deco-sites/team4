import Slider from "../../components/ui/Slider.tsx";
import { useId } from "../../sdk/useId.ts";

export interface Props {
  alerts?: string[];
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
}

function Alert({ alerts = [], interval = 5 }: Props) {
  const id = useId();

  return (
    <div id={id}>
      <Slider class="carousel carousel-center w-screen  gap-6 bg-black">
        {alerts.map((alert, index) => (
          <Slider.Item index={index} class="carousel-item">
            <span class="text-sm font-semibold text-white flex justify-center items-center w-screen h-[38px]">
              {alert}
            </span>
          </Slider.Item>
        ))}
      </Slider>

      <Slider.JS rootId={id} interval={interval && interval * 1e3} />
    </div>
  );
}

export default Alert;
