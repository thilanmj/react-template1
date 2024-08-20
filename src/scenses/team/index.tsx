import {Box, Typography, useTheme} from "@mui/material";
import {tokens} from "../../theme.ts";
import Header from "../../components/Header.tsx";
import {DataGrid} from "@mui/x-data-grid";
import {useEffect, useState} from "react";
import AdminPanelSettingsOutlined from "@mui/icons-material/AdminPanelSettingsOutlined";
import SecurityOutlined from "@mui/icons-material/SecurityOutlined";


const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const response = await fetch("https://run.mocky.io/v3/eb805d87-050c-471c-bea4-7f04dec3afcb");
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            const data = await response.json();
            setData(data.data);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    }

    const columns = [
        {field: "id", headerName: "ID", flex: 0.5},
        {field: "name", headerName: "Name", flex: 1},
        {field: "email", headerName: "EMAIL", flex: 1},
        {field: "phoneNumber", headerName: "PHONE", flex: 1},
        {
            field: "access", headerName: "Access Level",
            flex: 1,
            renderCell: ({row: {access}}) => {
                return (
                    <Box width="60%"
                         m="0 auto" p="5px" display="flex" justifyContent="center" backgroudColor={
                        access === "admin"
                            ? colors.greenAccent[600] : colors.greenAccent[700]
                    }
                         borderRadius="4px"
                    >
                        {access === "admin" && <AdminPanelSettingsOutlined/>}
                        {access === "manager" && <SecurityOutlined/>}
                        {access === "user" && <AdminPanelSettingsOutlined/>}
                        <Typography sx={{ml: "5px"}} color={colors.grey[100]}>{access}</Typography>
                    </Box>
                );
            }
        },
    ]
    return (
        <Box m="20px">
            <Header title="Team" subTitle="Update team details"></Header>
            <Box m="40px 0 0 0" height="75vh">
                <DataGrid loading
                          rows={data} columns={columns}>

                </DataGrid>
            </Box>
        </Box>
    );
}

export default Team;

