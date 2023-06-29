import { useParams } from "react-router-dom";
import DataContainer from "../components/DataContainer";
import Header from "../components/Header";
import Heading from "../components/Heading";
import VerticalHeader from "../components/VerticalHeader";

export default function Home() {
  const { userId } = useParams();
  if (userId !== "18" && userId !== "12") {
    window.location.href = "/error";
  }
  return (
    <div>
      <Header />
      <VerticalHeader />
      <Heading />
      <DataContainer />
    </div>
  );
}
