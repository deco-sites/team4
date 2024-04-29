import Icon, { AvailableIcons } from "../../components/ui/Icon.tsx";
import Header from "../../components/ui/SectionHeader.tsx";

interface Benefit {
  label: string;
  /**
   * @format icon-select
   * @options site/loaders/availableIcons.ts
   */
  icon: AvailableIcons;
  description: string;
}

export interface Props {
  /**
   * @default Benefits
   */
  title?: string;
  /**
   * @default Check out the benefits
   */
  description?: string;
  benefits?: Array<Benefit>;
  layout?: {
    variation?: "Simple" | "With border" | "Color reverse";
    headerAlignment?: "center" | "left";
  };
}

export default function Benefits(
  props: Props,
) {
  const {
    benefits = [{
      icon: "Truck",
      label: "Entrega em todo Brasil",
      description: "Consulte o prazo no fechamento da compra.",
    }, {
      icon: "Discount",
      label: "15% na primeira compra",
      description: "Aplicado direto na sacola de compras.",
    }, {
      icon: "ArrowsPointingOut",
      label: "Devolução grátis",
      description: "Veja as condições para devolver seu produto.",
    }],
  } = props;

  const listOfBenefits = benefits.map((benefit) => {

    return (
      <div class="flex items-center" >
        <div class="flex-none h-fit	">
          <Icon
            id={benefit.icon}
            class={"w-7 text-highlight"}
            width={36}
            height={36}
            strokeWidth={0.01}
            fill="currentColor"
          />
        </div>

        <div class="ml-4 flex-auto flex flex-col gap-1 lg:gap-2">
          <div class="text-base text-dark leading-3">
            {benefit.label}
          </div>

          <p class="text-base text-dark leading-3">
            {benefit.description}
          </p>
        </div>
      </div>
    );
  });

  return (
    <>
      <div class="w-full container px-4 py-8 flex flex-col gap-8 lg:gap-10 lg:py-10 lg:px-0">
        <div class="w-full flex justify-center">
          <div class="w-full flex  justify-evenly	items-center gap-0">
            {listOfBenefits}
          </div>
        </div>
      </div>
    </>
  );
}
