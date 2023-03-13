import React,{Component} from "react";
import LineGraph from "./component/Rechart_line";
import SparkGraph from "./component/Rechart_sparkline";
import RadarGraph from "./component/Rechart_radar";
import PieGraph from "./component/Rechart_pie";


class App extends Component {
    render(){
        return (
            <div>               
                <LineGraph/>
                <PieGraph/>
                <SparkGraph/>
                <RadarGraph/>
            </div>
        )
    }
}

export default App


