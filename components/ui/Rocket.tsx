import * as React from "react";
import Svg, { SvgProps, G, Rect, Path, Ellipse } from "react-native-svg";
export const Rocket = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 403.656 566.821"
    width={403.656}
    height={566.821}
    {...props}
  >
    <G transform="translate(-355.777 -683.297)">
      <Rect
        width={114.09}
        height={60.456}
        x={506.418}
        y={1186.506}
        rx={57.045}
        ry={20.494}
        style={{
          fill: "#554842",
          fillOpacity: 1,
          stroke: "#554842",
          strokeWidth: 6.31012,
          strokeOpacity: 1,
        }}
      />
      <Path
        d="M449.394 1068.393c67.372-27.363 150.951-26.373 218.144 1.425 37.576 15.546 86.899 85.623 86.899 85.623s-1.946 61.293-18.52 61.293h-344.93c-16.573 0-29.916-61.293-29.916-61.293s50.025-71.493 88.323-87.048z"
        style={{
          fill: "#9c85ff",
          fillOpacity: 1,
          stroke: "#9c85ff",
          strokeWidth: 9.89368,
          strokeOpacity: 1,
        }}
      />
      <Path
        d="M534.91 707.35c16.298-26.235 37.225-25.048 54.236 1.425 0 0 78.35 95.188 78.35 153.262v249.87c0 58.075-20.966 104.827-47.01 104.827H506.418c-26.043 0-46.68-46.753-47.01-104.826l-1.425-251.296c-.329-58.073 76.927-153.261 76.927-153.261z"
        style={{
          fill: "#dadada",
          fillOpacity: 1,
          stroke: "#dadada",
          strokeWidth: 9.97734,
          strokeOpacity: 1,
        }}
      />
      <Rect
        width={2.233}
        height={166.803}
        x={562.5}
        y={1051.197}
        ry={0.836}
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#9c85ff",
          strokeWidth: 11.5482,
          strokeOpacity: 1,
        }}
      />
      <Ellipse
        cx={565.747}
        cy={890.426}
        rx={63.461}
        ry={63.965}
        style={{
          fill: "#9c85ff",
          fillOpacity: 1,
          stroke: "#b4b2b2",
          strokeWidth: 15,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      />
    </G>
  </Svg>
);
