import Image from "next/image";
import Header from "./Header";
import Navbarizq from "./Navbarizq";
import Centro from "./Centro";

export default function Home() {
  return (
    <div className="flex">
      <Header />
      <Navbarizq />
      <Centro />
    </div>
  );
}
