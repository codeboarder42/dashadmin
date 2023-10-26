import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import "./pieChartBox.scss";

const data = [
  { name: "Mobile", value: 400, color: "#0088FE" },
  { name: "Desktop", value: 300, color: "#00C49F" },
  { name: "Laptop", value: 300, color: "#FFB828" },
  { name: "Tablet", value: 200, color: "#FF8042" },
];

const PieChartBox = () => {
  return (
    <div className="pieChartBox">
      <h1>Leads by source</h1>
      <ResponsiveContainer width="99%" height={400}>
        <PieChart margin = {{ top: 30, left: 0, right: 0, bottom: 0 }}>
          <Tooltip
            contentStyle={{ background: "white", borderRadius: "5px" }}
          />
          <Pie
            data={data}
            innerRadius={"70%"}
            outerRadius={"90%"}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((item) => (
              <Cell key={item.name} fill={item.color} />
            ))}
          </Pie>
          <Legend
            verticalAlign="bottom"
            align={"center"}
            iconType="circle"
            wrapperStyle = {{ bottom: -30 }} 
            
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartBox;
