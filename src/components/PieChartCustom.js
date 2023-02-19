import { PieChart, Pie, Sector } from "recharts";
import styles from "./PieChartCustom.module.css"


const renderActiveShape = function (props){
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload
  } = props;

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle"  fill={"black"}>
        {payload.percent + "%"}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

const renderInactiveShape = function (props){
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
  } = props;
  return (
      <g>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill="#CCCCCC"
        />
      </g>
    );
  }

export default function PieChartCustom({tittle, cor, descricao1, descricao2, largura, altura, data}) {
  

  return (
    <div className={styles.PieChartCustom}>
       <h2>{tittle}</h2>

      <PieChart width={largura} height={altura}>
      <Pie
        activeIndex={0}
        activeShape={renderActiveShape}
        inactiveShape={renderInactiveShape}
        data={data}
        cx={ largura / 2 }
        cy={ altura / 2 }
        innerRadius={55}
        outerRadius={80}
        fill={cor}
        dataKey="value"
        startAngle={65}
        endAngle={425}
      />
    </PieChart>
      
        <div>
            <p>{descricao1}</p>
            <p>{descricao2}</p>
        </div>

    </div>
  );
}
