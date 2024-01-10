import { ReactElement } from "react";
interface SvgIconProps {
  name: string;
  color?: string;
}
const SvgIcon = (props: SvgIconProps): ReactElement => {
  const { name, color = "black" } = props;
  return (
    <svg aria-hidden="true">
      <use
        href={`#icon-${name}`}
        fill={color}
      />
    </svg>
  );
};

export default SvgIcon;
