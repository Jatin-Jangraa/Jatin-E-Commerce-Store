
import { PieChart, Pie, Cell,Tooltip,Legend, ResponsiveContainer} from "recharts";


interface dataatype {
  name:string ,
  number:number ,
}

type sampleData =dataatype[]

interface pieprops {
  apidata :sampleData 
}


const PieComponent = ({apidata}:pieprops) => {

  console.log(apidata);
  


let    COLORS = [ '#36A2EB', '#FFCE56','#FFCE56','#4BC0C0','#9966FF','#FF6384']
  let data= apidata ||[];

  return (<>
    <ResponsiveContainer width="100%" height={370} className=''>
    <PieChart >
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={150}
        fill="hsl(243, 52%, 68%)"
        dataKey="number"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart></ResponsiveContainer></>
  );
};

export default PieComponent;