import { styled } from "styled-components";
import useData from "../Api";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function ActivityBarGraph() {
  const userData = useData({ additionalParam: "activity" });
  return (
    <ResponsiveContainer width="60%">
      <ActivityContainer>
        <BarChartInfo>
          <span>Activité quotidienne</span>
          <LegendContainer>
            <span>Poids (kg)</span>
            <span>Calories brûlées (kCal)</span>
          </LegendContainer>
        </BarChartInfo>
        <BarChart width={800} height={300} data={userData?.data.sessions}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="kilogram"
            fill="#282D30"
            barSize={10}
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="calories"
            fill="#E60000"
            barSize={10}
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ActivityContainer>
    </ResponsiveContainer>
  );
}

const ActivityContainer = styled.div`
  margin: 5rem 0 0 20rem;
`;

const BarChartInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 6rem;
`;

const LegendContainer = styled.div`
  display: flex;
  gap: 5em;
`;
