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
import { isApi } from "../conf";

export default function PerfoGraph() {
  const userData = useData({ additionalParam: "performance" });
  let formattedData;
  if (!isApi) {
    formattedData = userData?.data?.performance
      ? Formatter.formatPerf(userData.data.performance)
      : "";
  } else {
    formattedData = userData?.data ? Formatter.formatPerf(userData.data) : "";
  }

  return (
    <PerfoGraphContainer>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius="70%" data={formattedData}>
          <PolarGrid gridType="polygon" radialLines={false} />
          <PolarAngleAxis
            dataKey="perf"
            tick={{ fill: "white", fontSize: 10 }}
          />
          <Radar dataKey="value" stroke="#FF0101B2" fill="#FF0101B2" />
        </RadarChart>
      </ResponsiveContainer>
    </PerfoGraphContainer>
  );
}

const PerfoGraphContainer = styled.div`
  width: 26rem;
  height: 26rem;
  background-color: #282d30;
  border-radius: 1rem;
`;
