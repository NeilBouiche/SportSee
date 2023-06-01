import { styled } from "styled-components";
import { useData } from "../Api";
import Formatter from "../utils/Formatter";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

export default function PerfoGraph() {
  const userData = useData({ additionalParam: "performance" });
  const formattedData = Formatter.formatPerf(userData?.data.performance);
  console.log(formattedData);
  return <div>{formattedData.toString()}</div>;
}
//   return (
// <PerfoGraphContainer>
//   <ResponsiveContainer width="100%" height="100%">
//     <RadarChart outerRadius="80%" data={data}>
//       <PolarGrid />
//       <PolarAngleAxis dataKey="perf" />
//       <Radar
//         dataKey="value"
//         stroke="#8884d8"
//         fill="#8884d8"
//         fillOpacity={0.6}
//       />
//     </RadarChart>
//   </ResponsiveContainer>
// </PerfoGraphContainer>
//   );
// }

// const PerfoGraphContainer = styled.div`
//   width: 27rem;
//   height: 22rem;
//   background-color: #282d30;
//   padding: 1rem;
//   border-radius: 1rem;
// `;
