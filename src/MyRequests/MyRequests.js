import axios from "axios";

export default class MyRequests{
    static async getTableData() {
        const response = await axios.get("http://127.0.0.1:5000/")
        return response.data
    }

    static async getChartData() {
        const response = await axios.get("http://127.0.0.1:5000/chart")
        return response.data
    }
}