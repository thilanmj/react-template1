import Header from "../../components/Header.tsx";
import {Box} from "@mui/material";

const Dashboard = () =>{
    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center"></Box>
            <Header title="Dashboard" subTitle="Welcome to your dashboard." ></Header>
        </Box>
    );
}

export default Dashboard;