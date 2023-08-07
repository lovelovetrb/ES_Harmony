import { ChartData } from "chart.js";
import { Radar } from "react-chartjs-2";
import "chart.js/auto";

import styles from "@/components/molecules/Chart/ChartRader.module.css"

const ChartRadar = () => {
  const data: ChartData<"radar"> = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className={styles.chart}>
      <Radar data={data} />
    </div>
  );
};

export default ChartRadar;
