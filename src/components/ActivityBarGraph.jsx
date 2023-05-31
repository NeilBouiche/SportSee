import { styled } from "styled-components";
import { useData } from "../Api";
import Formatter from "../utils/Formatter";
import { BarChart, CartesianGrid, Bar, XAxis, YAxis, Tooltip } from "recharts";

export default function ActivityBarGraph() {
  const userData = useData({ additionalParam: "activity" });
  return (
    <ActivityContainer>
      <BarChartInfo>
        <BarChartTitle>Activité quotidienne</BarChartTitle>
        <LegendContainer>
          <LegendItem color="#282D30" label="Poids (kg)" />
          <LegendItem color="#E60000" label="Calories brûlées (kCal)" />
        </LegendContainer>
      </BarChartInfo>
      <BarChart
        width={750}
        height={300}
        data={userData?.data.sessions.map((session) => ({
          ...session,
          day: Formatter.formatDay(session.day),
        }))}
      >
        <CartesianGrid vertical={false} strokeDasharray="3 8" />
        <XAxis
          tickLine={false}
          dataKey="day"
          tickMargin={15}
          axisLine={axisLineStyle}
          tick={tickstyle}
        />
        <YAxis
          yAxisId="right"
          type="number"
          tickMargin={15}
          tick={tickstyle}
          domain={["dataMin - 1", "dataMax + 1"]}
          tickLine={false}
          tickCount={4}
          dataKey="kilogram"
          orientation="right"
          axisLine={false}
        />
        <YAxis
          yAxisId="left"
          type="number"
          domain={["dataMin - 100", "dataMax + 100"]}
          hide
          tickLine={false}
          tickCount={4}
          dataKey="calories"
          orientation="left"
          axisLine={false}
        />
        <Tooltip content={CustomTooltip} />
        <Bar
          yAxisId="right"
          dataKey="kilogram"
          fill="#282D30"
          barSize={10}
          radius={[10, 10, 0, 0]}
        />
        <Bar
          yAxisId="left"
          dataKey="calories"
          fill="#E60000"
          barSize={10}
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </ActivityContainer>
  );
}

function LegendItem({ color, label }) {
  return (
    <LegendItemContainer>
      <LegendItemColor style={{ backgroundColor: color }} />
      <LegendItemLabel>{label}</LegendItemLabel>
    </LegendItemContainer>
  );
}

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip" style={tooltipStyle}>
        <p className="label">{`${payload[0].value} Kg`}</p>
        <p className="label">{`${payload[1].value} kCal`}</p>
      </div>
    );
  }
  return null;
};

// Formater les données du Tooltip pour supprimer le nom d'attribut et le remplacer par son abbv après la valeur.

const ActivityContainer = styled.div`
  margin: 3rem 0 0 18rem;
  width: 70rem;
  background-color: #fbfbfb;
  padding: 4rem;
  width: 80rem;
  border-radius: 1.5rem;
`;

const BarChartInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 6rem;
`;

const BarChartTitle = styled.span`
  font-weight: bold;
`;

const LegendContainer = styled.div`
  display: flex;
  gap: 5em;
`;

const LegendItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const LegendItemColor = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
`;

const LegendItemLabel = styled.span`
  font-size: 1rem;
  color: #242b2e;
`;

const tooltipStyle = {
  backgroundColor: "#E60000",
  color: "#ffff",
  border: "none",
  padding: "2rem 1rem",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
};

const tickstyle = {
  fontSize: "1.4rem",
  fill: "#9b9eac",
};

const axisLineStyle = {
  stroke: "lightgray",
};
