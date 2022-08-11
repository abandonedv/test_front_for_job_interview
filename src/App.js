import './App.css';
import React, {useEffect, useState} from 'react'
import MyRequests from "./MyRequests/MyRequests";
import Table from "./Components/Table/Table";
import Chart from "./Components/Chart/Chart";
import {default_options} from "./Components/Chart/Options";
import {fillOptions} from "./MyFunctions/MyFunctions";
import Header from "./Components/Header/Header";


function App() {
    const [dataList, setDataList] = useState([])
    const [newOptions, setNewOptions] = useState({});


    useEffect(() => {
        async function fetchData() {
            let tableData = await MyRequests.getTableData()
            let chartData = await MyRequests.getChartData()

            let valuesList = tableData.values
            setDataList([...valuesList])

            let chartList = chartData.values
            let options = {...default_options}

            options = fillOptions(chartList, options)

            setNewOptions({...options});
        }
        fetchData()
    }, [])

    return (
        <div className="App">
            <Header/>
            <Chart options={newOptions}/>
            <Table dataList={dataList}/>
        </div>
    );
}

export default App;
