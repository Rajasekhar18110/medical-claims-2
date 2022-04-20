import React from "react"
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
    useHistory,
} from "react-router-dom"
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import { AuthProvider } from "./Components/Auth"
import PrivateRoute from "./Components/PrivateRoute"

import Home from "./Components/Home"
import Page1 from "./Components/Page1"
import Page2 from "./Components/Page2"
import Page3 from "./Components/Page3"
import Accountpage from "./Components/Accountpage"
import Accountpage1 from "./Components/Accountpage1"
import Application from "./Components/Application"
import Errorpage from "./Components/Errorpage"

import Home_authority from "./Components/Home_authority"
import ShowAllApplication from "./Components/ShowAllApplication"
import ShowApplication from "./Components/ShowApplication"
import Medical_officer from "./Components/Medical_officer"
import AccountSection from "./Components/AccountSection"
import DAorJAO from "./Components/DAorJAO"
import AO from "./Components/AO"
import SrAO from "./Components/SrAO"
import Registrar from "./Components/Registrar"

function App() {
    // const see = check.split("@")[1]
    // //const fincheck = see !== "iitrpr.ac.in"
    // const errorOrNOt =
    //     see !== "iitrpr.ac.in" &&
    //     check !== "pharmacistxyz901@gmail.com" &&
    //     check !== "medical.officer.901@gmail.com" &&
    //     check !== "tempusageww3@gmail.com" &&
    //     check !== "junioracc.xyz901@gmail.com" &&
    //     check !== "assessing.officer.901@gmail.com" &&
    //     check !== "senior.audit.901@gmail.com" &&
    //     check !== "registrar.officer.901@gmail.com"
    // const isPharmacist = check === "pharmacistxyz901@gmail.com"
    // const isMediOffi = check === "medical.officer.901@gmail.com"
    // const isAccountSec = check === "tempusageww3@gmail.com"
    // const isDAorJAOO = check === "junioracc.xyz901@gmail.com"
    // const isAO = check === "assessing.officer.901@gmail.com"
    // const isSrAO = check === "senior.audit.901@gmail.com"
    // const isRegistrar = check === "registrar.officer.901@gmail.com"

    return (
        <>
            <AuthProvider>
                <Router>
                    <Routes>
                        <Route path="medical-claims-2/" element={<Login />} />
                        <Route
                            path="medical-claims-2/Signup"
                            element={<Signup />}
                        />
                        {/* <Route path="*" element={<Errorpage />} /> */}
                        <Route
                            path="medical-claims-2/Home"
                            element={
                                <PrivateRoute>
                                    <Home />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="medical-claims-2/authority_Home/ShowAllApplication/:id"
                            element={
                                <PrivateRoute>
                                    <ShowAllApplication />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="medical-claims-2/Page1"
                            element={
                                <PrivateRoute>
                                    <Page1 />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="medical-claims-2/Home/ShowApplication/:id"
                            element={
                                <PrivateRoute>
                                    <ShowApplication />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="medical-claims-2/Page1/Page2"
                            element={
                                <PrivateRoute>
                                    <Page2 />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="medical-claims-2/Page1/Page2/Page3"
                            element={
                                <PrivateRoute>
                                    <Page3 />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="medical-claims-2/Page1/Page2/Page3/Accountpage1"
                            element={
                                <PrivateRoute>
                                    <Accountpage1 />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="medical-claims-2/Page1/Page2/Page3/Accountpage1/Application"
                            element={
                                <PrivateRoute>
                                    <Application />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="medical-claims-2/Page1/Page2/Page3/Accountpage1/Accountpage"
                            element={
                                <PrivateRoute>
                                    <Accountpage />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="medical-claims-2/authority_Home" //corresponds to pharmacist
                            element={
                                <PrivateRoute>
                                    <Home_authority />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="medical-claims-2/Medical_officer" //corresponds to medical officer
                            element={
                                <PrivateRoute>
                                    <Medical_officer />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="medical-claims-2/AccountSection" //corresponds to account section
                            element={
                                <PrivateRoute>
                                    <AccountSection />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="medical-claims-2/DAorJAO" //corresponds to DAorJAO
                            element={
                                <PrivateRoute>
                                    <DAorJAO />
                                </PrivateRoute>
                            }
                        />{" "}
                        <Route
                            path="medical-claims-2/AO"
                            element={
                                <PrivateRoute>
                                    //corresponds to AO
                                    <AO />
                                </PrivateRoute>
                            }
                        />{" "}
                        <Route
                            path="medical-claims-2/SrAO"
                            element={
                                <PrivateRoute>
                                    //corresponds to srAO
                                    <SrAO />
                                </PrivateRoute>
                            }
                        />{" "}
                        <Route
                            path="medical-claims-2/Registrar"
                            element={
                                <PrivateRoute>
                                    //corresponds to registrar
                                    <Registrar />
                                </PrivateRoute>
                            }
                        />{" "}
                        <Route
                            path="medical-claims-2/Home_authority/ShowAllApplication/:id"
                            element={
                                <PrivateRoute>
                                    <ShowAllApplication />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="medical-claims-2/Medical_officer/ShowAllApplication/:id"
                            element={
                                <PrivateRoute>
                                    <ShowAllApplication />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="medical-claims-2/AccountSection/ShowAllApplication/:id"
                            element={
                                <PrivateRoute>
                                    <ShowAllApplication />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="medical-claims-2/DAorJAO/ShowAllApplication/:id"
                            element={
                                <PrivateRoute>
                                    <ShowAllApplication />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="medical-claims-2/AO/ShowAllApplication/:id"
                            element={
                                <PrivateRoute>
                                    <ShowAllApplication />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="medical-claims-2/SrAO/ShowAllApplication/:id"
                            element={
                                <PrivateRoute>
                                    <ShowAllApplication />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="medical-claims-2/Registrar/ShowAllApplication/:id"
                            element={
                                <PrivateRoute>
                                    <ShowAllApplication />
                                </PrivateRoute>
                            }
                        />
                    </Routes>
                </Router>
            </AuthProvider>
        </>
    )
}

export default App
