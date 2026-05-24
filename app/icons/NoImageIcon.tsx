import React from "react";
// placeholder for when there is no image
type Props = React.SVGProps<SVGSVGElement>;

export default function NoImageIcon({ width = 24, height = 24, className, ...props}: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M16 15.086L11.987 11.074L11.971 11.089L11.955 11.074L10.525 12.504L5.896 7.876L5.881 7.892L5.865 7.876L4 9.741V4H16V15.086ZM2 17H18V3H2V17Z"
        fill="currentColor"
      />
    </svg>
  );
}