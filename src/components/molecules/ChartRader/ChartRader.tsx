import { ChartData } from "chart.js";
import { Radar } from "react-chartjs-2";
import "chart.js/auto";

import styles from "@/components/molecules/ChartRader/ChartRader.module.css";
import { StudentData } from "@/types/types";

type Props = {
  studentData: StudentData;
};

const ChartRadar = ({ studentData }: Props) => {
  const data: ChartData<"radar"> = {
    labels: ["マッチ度", "オリジナリティ", "SPI", "コーディングテスト", "エントリー時期"],
    datasets: [
      {
        label: `${studentData.name}さんのレーダーチャート`,
        // TODO :データの差し替え
        data: [studentData.match_level, studentData.originality, 60, 80, 50],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
    scales: {
      r: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 18,
          },
        },
        pointLabels: {
          font: {
            size: 20,
          },
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          font: {
            size: 18,
          },
        },
      },
    },
  };

  return (
    <div className={styles.chart}>
      <Radar data={data} options={options} height={100}/>
    </div>
  );
};

export default ChartRadar;
