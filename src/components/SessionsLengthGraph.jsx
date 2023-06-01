import { styled } from "styled-components";
import { useData } from "../Api";
import Formatter from "../utils/Formatter";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

export default function SessionsLengthGraph() {
  const userData = useData({ additionalParam: "average-sessions" });
  return (
    <SessionsLengthContainer>
      <TitleContainer>
        <SessionGraphTitle>Durée moyenne des</SessionGraphTitle>
        <GraphTitleBis>sessions</GraphTitleBis>
      </TitleContainer>
      <LineChart
        width={250}
        height={220}
        data={userData?.data.averageSessions.map((session) => ({
          ...session,
          day: Formatter.formatDayLetter(session.day),
        }))}
      >
        <XAxis
          dataKey="day"
          tickLine={false}
          axisLine={false}
          tick={tickStyle}
        />
        <YAxis hide domain={["dataMin - 5", "dataMax + 5"]} />
        <Tooltip content={CustomTooltip} />
        <Line type="monotone" dataKey="day" />
        <Line
          type="basis"
          dataKey="sessionLength"
          dot={false}
          stroke="#ffff"
          strokeWidth={2}
        />
      </LineChart>
    </SessionsLengthContainer>
  );
}

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip" style={tooltipStyle}>
        <p className="label">{`${payload[1].value} min`}</p>
      </div>
    );
  }
  return null;
};

const SessionsLengthContainer = styled.div`
  width: 27rem;
  margin: 2rem 18rem 0 18rem;
  background-color: #ff0000;
  display: flex;
  justify-content: start;
  padding: 1rem;
  border-radius: 1rem;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  padding: 1rem 0 0 2rem;
  color: #ff8080;
  display: flex;
  flex-direction: column;
`;

const SessionGraphTitle = styled.span``;

const GraphTitleBis = styled.span``;

const tooltipStyle = {
  backgroundColor: "white",
  color: "black",
  border: "none",
  padding: "1rem 1.5rem",
  fontSize: "1.2rem",
};

const tickStyle = {
  stroke: "#ff8080",
  strokeWidth: 0.7,
};