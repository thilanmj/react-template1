import {ColorModeContext, useMode} from "./theme.ts";
import {CssBaseline, ThemeProvider} from "@mui/material";
import TopBar from "./scenses/global/Topbar";
import SideBar from "./scenses/global/Sidebar";
import Dashboard from "./scenses/dashboard/Dashboard";
import Form from "./scenses/dashboard/Form";
import Bar from "./scenses/dashboard/Bar";
import Line from "./scenses/dashboard/Line";
import Pie from "./scenses/dashboard/Pie";
import {Route, Routes} from "react-router-dom";
import Team from "./scenses/team";


function App() {
    const [theme, colorMode] = useMode();
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <div className="app">
                    <SideBar/>
                    <main className="content">
                        <TopBar/>
                        <Routes>
                            <Route path="/" element={<Dashboard/>}/>
                            <Route path="/bar" element={<Bar/>}/>
                            <Route path="/line" element={<Line/>}/>
                            <Route path="/pie" element={<Pie/>}/>
                            <Route path="/form" element={<Form/>}/>
                            <Route path="/team" element={<Team/>}/>
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}

export default App
