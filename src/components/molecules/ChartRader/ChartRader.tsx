import { ChartData } from "chart.js";
import { Radar } from "react-chartjs-2";
import "chart.js/auto";

import styles from "@/components/molecules/ChartRader/ChartRader.module.css";
import { StudentData } from "@/types/types";
import { isMobileOnly } from "react-device-detect";

type Props = {
  studentData: StudentData;
};

const ChartRadar = ({ studentData }: Props) => {
  const fontSize = {
    pc: {
      pointLabels: 20,
      legendLables: 25,
    },
    mobile: {
      pointLabels: 9,
      legendLables: 13,
    },
  };

  const data: ChartData<"radar"> = {
    labels: ["マッチ度", "オリジナリティ", "SPI", "コーディングテスト", "エントリー時期"],
    datasets: [
      {
        label: `${studentData.name}さんのレーダーチャート`,
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
          display: false,
        },
        pointLabels: {
          font: {
            size: isMobileOnly ? fontSize.mobile.pointLabels : fontSize.pc.pointLabels,
          },
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          font: {
            size: isMobileOnly ? fontSize.mobile.legendLables : fontSize.pc.legendLables,
          },
        },
      },
    },
  };

  return (
    <div className={styles.chart}>
      <Radar data={data} options={options} />
    </div>
  );
};

export default ChartRadar;
