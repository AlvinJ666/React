import React,{useState, useEffect} from 'react';
import {fetchDailyData} from "../../api";
import {Line, Bar} from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart=({data:{confirmed, deaths,recovered,}, country})=>{ 
    const [dailyData, setDailyData]=useState([]);
    useEffect(()=>{
        const fetchAPI = async () => {
            //const dailyData = await fetchDailyData();
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
    },[])
    // const LineChart=(
    //    dailyData.length
    //        ?(<Line 
    //             data={{labels: dailyData.map(({date})=>date),
    //             datasets:[{
    //                 data: dailyData.map(({confirmed})=>confirmed),
    //                 label:'Infected',
    //                 borderColor:'rgb(123, 0, 255)',
    //                 fill: true,
    //             },
    //             {
    //                 data: dailyData.map(({deaths})=>deaths),
    //                 label:'Deaths',
    //                 borderColor:'red',
    //                 backgroundColor: 'rgba(255, 0, 0, 0.816)',
    //                 fill: true,
    //             }],
    //         }}/>):null
    // );
        const LineChart=()=>{
            if(dailyData.length==0)
                return null;
                return (<Line 
                    data={//make code dynamic
                        {//opening an object
                            labels: dailyData.map(({date})=>date),
                    datasets:[{
                        data: dailyData.map(({confirmed})=>confirmed),
                        label:'Comfirmed',
                        borderColor:'rgb(150,115,189)',
                        fill: true,
                    },
                    {
                        data: dailyData.map(({deaths})=>deaths),
                        label:'Deaths',
                        borderColor:'red',
                        backgroundColor: 'rgba(179,106,106,0.816)',
                        fill: true,
                    },

                    // {
                    //     data: dailyData.map(({confirmed})=>confirmed)-dailyData.map(({deaths})=>deaths),
                    //     label:'Infected',
                    //     borderColor:'pink',
                    //     backgroundColor: 'rgba(194, 13, 191, 0.816)',
                    //     fill: true,
                    // }
                ],
                }}/>
            )
        }

    const BarChart=()=>{
        if(!confirmed)
            return null;
            return (<Bar
                data={{
                    labels:['Infected','Recovered','Deaths','Current'],
                    datasets:[{
                        label: 'Peoble',
                        backgroundColor: ['rgb(150,115,189)','rgb(124,187,127)','rgba(179,106,106,0.816)','rgba(194, 13, 191, 0.816)'],
                        data:[confirmed.value,recovered.value,deaths.value,confirmed.value-recovered.value-deaths.value]
                    }]
                }}
                options={{
                    legend:{display:false},
                    title:{display:true, text: `Current state in ${country}`},
                }}

            />
        )
    }
    // if(country)
    //     return(<div className={styles.container}>
    //         {BarChart.call() }
    //     </div>);
    // else
        return (
            <div className={styles.container}>
                {country? BarChart.call(): LineChart.call()}
            </div>);
}

export default Chart;