import { styled } from "styled-components";
import { useData } from "../Api";
import Formatter from "../utils/Formatter";
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

export default function ScoreGraph() {
  const userData = useData({ additionalParam: "" });
  const formattedData = Formatter.formatScore(userData);
  console.log(formattedData);
  return (
    <ScoreGraphContainer>
      <ScoreGraphTitle>{formattedData[0].name}</ScoreGraphTitle>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          innerRadius="100%"
          outerRadius="70%"
          barSize={10}
          data={formattedData}
          style={radialBarStyle}
        >
          <PolarAngleAxis tick={false} type="number" domain={[0, 100]} />
          <RadialBar minAngle={15} dataKey="uv" cornerRadius={50 / 5} />
        </RadialBarChart>
      </ResponsiveContainer>
      <ScoreTextContainer>
        <Score>{formattedData[0].uv}%</Score>
        <SubScore>
          de votre <p>objectif</p>
        </SubScore>
      </ScoreTextContainer>
    </ScoreGraphContainer>
  );
}

const ScoreGraphContainer = styled.div`
  width: 26rem;
  height: 26rem;
  background: #fbfbfb;
  border-radius: 1rem;
  position: relative;
`;

const ScoreGraphTitle = styled.span`
  position: absolute;
  top: 2rem;
  left: 1.5rem;
  font-size: 1.6rem;
  font-weight: bold;
`;

const ScoreTextContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  left: 5.4rem;
  margin-top: 5.1rem;
  width: 60%;
  height: 61%;
  background: #fff;
  border-radius: 10rem;
  top: 0;
`;

const Score = styled.span`
  font-size: 3rem;
  font-weight: 800;
`;

const SubScore = styled.span`
  font-size: 1.8rem;
  color: #74798c;
`;

const radialBarStyle = {
  transform: "rotate(-90deg)",
};
