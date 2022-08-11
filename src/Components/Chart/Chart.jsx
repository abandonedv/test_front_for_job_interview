import React from "react";
import { AgChartsReact } from 'ag-charts-react';
import classes from "./Chart.module.css";

const Chart = ({options}) => {
    return (
        <div className={classes.Chart}>
            <AgChartsReact options={options} />
        </div>
    );
};

export default Chart;