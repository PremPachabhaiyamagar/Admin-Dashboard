import './Analytics.css';
import {
 XAxis,
 CartesianGrid,
 Tooltip,
 BarChart,
 Legend,
 Bar,
 PieChart,
 Pie,
 LineChart,
 Line,
 YAxis,
 ResponsiveContainer,
} from "recharts";

const Analytics = ({chart_i,chart_ii,chart_iii,title,value,illustration}) => {
  const data = [
    {
      name: "Sept",
      Earnings: 4000,
      Followers: 2400
    },
    {
      name: "Oct",
      Earnings: 3000,
      Followers: 1398
    },
    {
      name: "Nov",
      Earnings: 2000,
      Followers: 9800
    },
    {
      name: "Dec",
      Earnings: 2780,
      Followers: 3908
    }
  ];
  const data_1 = [
    {
     Earnings: 4000,
     Followers: 2400,
    },
    {
      Earnings: 3000,
      Followers: 1398,
    },
    {
      Earnings: 2000,
      Followers: 9800,
    },
    {
      Earnings: 2780,
      Followers: 3908,
    },
    {
      Earnings: 1890,
      Followers: 4800,
    }
  ]
  const data01 = [
    {
      "name": "Group A",
      "value": 400
    },
    {
      "name": "Group B",
      "value": 300
    },
    {
      "name": "Group C",
      "value": 300
    },
    {
      "name": "Group D",
      "value": 200
    },
    {
      "name": "Group E",
      "value": 278
    },
    {
      "name": "Group F",
      "value": 189
    }
  ];
  const data02 = [
    {
      "name": "Group A",
      "value": 2000
    },
    {
      "name": "Group B",
      "value": 2500
    },
    {
      "name": "Group C",
      "value": 1000
    },
    {
      "name": "Group D",
      "value": 2000
    },
    {
      "name": "Group E",
      "value": 589
    },
    {
      "name": "Group F",
      "value": 3567
    }
  ];
  return (
   <div className='analytics'>
      {chart_i && (<>
      <header>
        <span className='followers'>Followers:</span>
        <span className='earnings'>Earnings:</span>
      </header>

      
    <BarChart className="b_Chart" width={210} height={210} data={data}>
  
    <CartesianGrid strokeDasharray="100 10" />
    <XAxis dataKey="name" />
    <Tooltip />
    <Legend />
    <Bar dataKey="Followers" fill="#00464e" />
    <Bar dataKey="Earnings" fill="#810551" />
    </BarChart>  
    </>
      )}

   {chart_ii && (<>
    <LineChart className='L_chart' width={260} height={220} data={data_1}
      margin={{ top: 10, right: 10 }}>
     <XAxis dataKey="name" />
     <YAxis />
     <Tooltip />
     <Legend />
     <Line type="monotone" dataKey="Followers" stroke="#00464e" />
     <Line type="monotone" dataKey="Earnings" stroke="#810551" />
    </LineChart>
    </>
  )}
  {chart_iii  && (<>

  <PieChart className='p_chart' width={300} height={300}>
  <Pie data={data01} 
   dataKey="value"
   nameKey="name" 
   cx="50%" cy="50%" 
   outerRadius={50} 
   fill="#00464e" />
  <Pie data={data02} 
  dataKey="value" 
  nameKey="name" 
  cx="50%" 
  cy="50%" 
  innerRadius={50} 
  outerRadius={70} 
  fill="#810551" 
  label />
</PieChart>
  </>)}

  {title && (<>
    <h1 className='title'>{title}</h1>
    <h2 className='value'>{value}</h2>
    <h2 className='extra_text'>Peopls are loving your Contents</h2>
    🙌🎉💞

    <img src={illustration} alt
    ="illus" className="illustration" />
  </>)}
   </div>
  )
}

export default Analytics
