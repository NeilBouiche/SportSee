import { styled } from "styled-components";
import useData from "../Api";
import {
  BarChart,
  CartesianGrid,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

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
      <BarChart width={700} height={300} data={userData?.data.sessions}>
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis tickLine={false} dataKey="day" />
        <YAxis
          type="number"
          domain={[68, 71]}
          tickLine={false}
          allowDataOverflow={true}
          tickCount={4}
          dataKey="kilogram"
          orientation="right"
          axisLine={false}
        />
        <Tooltip
          contentStyle={tooltipStyle}
          labelStyle={tooltipLabel}
          itemStyle={tooltipLabelStyle}
        />

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

// Créer la classe de formatage et ajouter une fonction pour faire passer le champs day afin de ne retourner que le jour.

// Si on garde l'echelle des KG il est normal que les kCal ne soient pas lisibles car trop élevés.
// Il faut trouver un moyen de scaler. (diviser par 4 dans la classe de formatage ?)

// Formater les données du Tooltip pour supprimer le nom d'attribut et le remplacer par son abbv après la valeur.

const ActivityContainer = styled.div`
  margin: 5rem 0 0 20rem;
  width: 70rem;
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
};

const tooltipLabelStyle = {
  color: "#FFFFFF",
};

const tooltipLabel = {
  display: "none",
};
