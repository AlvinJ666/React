import React from 'react';
import {Cards,Chart,CountryPicker} from './Components';//exported in Components/index.js
import styles from './App.module.css';
import {fetchData} from './api';
import {fetchCountries} from './api';
class App extends React.Component{
    state={
        data:{},
        country:'',
    }
    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data:fetchedData}) ; 
    }
    changeCountry=async(country)=>{
        const fetchedData=await fetchData(country);
       // console.log(fetchedData);
        this.setState({data:fetchedData,country:country});
    }

    render(){
        const {data, country}=this.state;
        return(
            <div className={styles.container}>
                <img src={'https://i.ibb.co/7QpKsCX/image.png'} className={styles.image} alt="COVID-19"/>
                <Cards data={data}/>
                <CountryPicker changeCountry={this.changeCountry}/>
                <Chart data={data} country={country}/>
                <footer><a href={"https://www.youtube.com/watch?v=khJlrj3Y6Ls&t=2719s"}> Get Learned From:{"https://www.youtube.com/watch?v=khJlrj3Y6Ls&t=2719s"}</a></footer>
            </div>
            
        )
    }
}
export default App;
