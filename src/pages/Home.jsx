import DataContainer from "../components/DataContainer";
import Header from "../components/Header";
import Heading from "../components/Heading";
import VerticalHeader from "../components/VerticalHeader";

export default function Home() {
  return (
    <div>
      <Header />
      <VerticalHeader />
      <Heading />
      <DataContainer />
    </div>
  );
}
