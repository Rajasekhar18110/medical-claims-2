import React, { Component, useEffect, useState, useContext } from "react"
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    useHistory,
} from "react-router-dom"

import logo from "./logo.png"
import "./Application.css"
import {
    Row,
    Col,
    Container,
    Button,
    Form,
    FormGroup,
    Navbar,
} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { AuthContext } from "./Auth"
/* 
delete from application where application_id =2;

http://localhost:3000/Page1/Page2/Page3/Accountpage1/Application
*/
const Application = () => {
    const { currentUser } = useContext(AuthContext)

    let user_data = {
        email: currentUser.email,
    }

    const [result_json, setresult_json] = useState({
        page1: {
            user: {
                page_no: 1,
                name: "",
                email: "",
                martial_status: "",
                employee_code_no: "",
                pay: "",
                address: "",
                relation: "",
                place_fell_ill: "",
                ammount_details: "",
                partner_place: "",
            },
        },
        page2: {
            user: {
                page_no: 2,
                name: "",
                email: "",
                numDatesFeeCon: "",
                numDatesFeeInj: "",
                hospitalName: "",
                costMedicine: "",
            },
        },
        page3: {
            user: {
                page_no: 3,
                name: "",
                email: "",
                numDateCon: "",
                amountClaimed: "",
                lessAdvTaken: "",
                netAmntClaimed: "",
                lstOfEncl: "",
                date: "",
            },
        },
        page4: {
            user: {
                date: "",
                email: "",
                medicines: [],
                page_no: 4,
                test: [],
                imgs: [],
            },
        },
    })

    const [imgSrc, setImgSrc] = useState([])

    const getData = async () => {

                const email = localStorage.getItem("email")

        const res2 = await fetch("/get_images", {
            method: "POST",
            body: JSON.stringify({ email }),
            headers: { "Content-Type": "application/json" },
        })

        const result = await res2.json()
        console.log(result)
        setImgSrc(result["reuslt"])

        const res = await fetch("/getData", {
            method: "POST",
            body: JSON.stringify({ user_data }),
            headers: { "Content-Type": "application/json" },
        })

        const result_json = await res.json()
        setresult_json(result_json)
        console.log(result_json)
    }
    useEffect(() => {
        getData()
    }, [])

    console.log(result_json)

    return (
        <div className="parent">
            <Container>
                <div className="App-header">
                    <div id="logo_part">
                        <img id="logo" src={logo}></img>
                    </div>
                    <div id="heading">
                        <br />
                        <h5>भारतीय प्रौद्योगिकी संस्थान रोपड़</h5>
                        <h5>INDIAN INSTITUTE OF TECHNOLOGY ROPAR</h5>
                        <h6>रूपनगर, पंजाब-140001, Rupnagar, Punjab-140001</h6>
                        <h6>
                            Medical Claim Form - For Outdoor (Part A) /Indoor
                            (Part B) Treatment
                        </h6>
                    </div>
                </div>

                <h5 id="heading">
                    ---------------------------------------------------------------------------------
                </h5>
                <div className="page1">
                    <h6>
                        Form of application claiming reimbursement of medical
                        expenses incurred in connection with medical attendance
                        and/or treatment for self and family members/dependents.
                    </h6>
                    <Container>
                        <Form>
                            <Form.Group as={Row} className="mb-3">
                                <div id="line">
                                    <Form.Label id="form_line" column sm="4">
                                        1. Name & Designation of Govt. Servant
                                        (In Block Letters) -
                                    </Form.Label>
                                    <Col id="text" sm="3">
                                        <Form.Control
                                            as="textarea"
                                            placeholder={
                                                result_json["page1"]["user"][
                                                    "name"
                                                ]
                                                    ? result_json["page1"][
                                                          "user"
                                                      ]["name"]
                                                    : "-"
                                            }
                                            readOnly
                                        />
                                    </Col>
                                </div>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <div id="line">
                                    <Form.Label id="form_line" column sm="4">
                                        (i) Whether married or unmarried -
                                    </Form.Label>
                                    <Col id="text" sm="3">
                                        <Form.Control
                                            as="textarea"
                                            placeholder={
                                                result_json["page1"]["user"][
                                                    "martial_status"
                                                ]
                                                    ? result_json["page1"][
                                                          "user"
                                                      ]["martial_status"]
                                                    : "-"
                                            }
                                            readOnly
                                        />
                                    </Col>
                                </div>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <div id="line">
                                    <Form.Label id="form_line" column sm="4">
                                        (ii) If married, the place where wife /
                                        husband is employed -
                                    </Form.Label>
                                    <Col id="text" sm="3">
                                        <Form.Control
                                            as="textarea"
                                            placeholder={
                                                result_json["page1"]["user"][
                                                    "partner_place"
                                                ]
                                                    ? result_json["page1"][
                                                          "user"
                                                      ]["partner_place"]
                                                    : "-"
                                            }
                                            readOnly
                                        />
                                    </Col>
                                </div>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <div id="line">
                                    <Form.Label id="form_line" column sm="4">
                                        2. Employees Code No., Deptt/ Section -
                                    </Form.Label>
                                    <Col id="text" sm="3">
                                        <Form.Control
                                            as="textarea"
                                            placeholder={
                                                result_json["page1"]["user"][
                                                    "employee_code_no"
                                                ]
                                                    ? result_json["page1"][
                                                          "user"
                                                      ]["employee_code_no"]
                                                    : "-"
                                            }
                                            readOnly
                                        />
                                    </Col>
                                </div>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <div id="line">
                                    <Form.Label id="form_line" column sm="4">
                                        3. Pay of Govt. Servant (Band Pay &
                                        Grade Pay) -
                                    </Form.Label>
                                    <Col id="text" sm="3">
                                        <Form.Control
                                            as="textarea"
                                            placeholder={
                                                result_json["page1"]["user"][
                                                    "pay"
                                                ]
                                                    ? result_json["page1"][
                                                          "user"
                                                      ]["pay"]
                                                    : "-"
                                            }
                                            readOnly
                                        />
                                    </Col>
                                </div>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <div id="line">
                                    <Form.Label id="form_line" column sm="4">
                                        4. Residential address -
                                    </Form.Label>
                                    <Col id="text" sm="3">
                                        <Form.Control
                                            as="textarea"
                                            placeholder={
                                                result_json["page1"]["user"][
                                                    "address"
                                                ]
                                                    ? result_json["page1"][
                                                          "user"
                                                      ]["address"]
                                                    : "-"
                                            }
                                            readOnly
                                        />
                                    </Col>
                                </div>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <div id="line">
                                    <Form.Label id="form_line" column sm="4">
                                        5. Name of the patient & his /her
                                        relationship with the Government Servant
                                        (in case of Children state age also) -
                                    </Form.Label>
                                    <Col id="text" sm="3">
                                        <Form.Control
                                            as="textarea"
                                            placeholder={
                                                result_json["page1"]["user"][
                                                    "relation"
                                                ]
                                                    ? result_json["page1"][
                                                          "user"
                                                      ]["relation"]
                                                    : "-"
                                            }
                                            readOnly
                                        />
                                    </Col>
                                </div>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <div id="line">
                                    <Form.Label id="form_line" column sm="4">
                                        6. Place at which the patient fell ill -
                                    </Form.Label>
                                    <Col id="text" sm="3">
                                        <Form.Control
                                            as="textarea"
                                            placeholder={
                                                result_json["page1"]["user"][
                                                    "place_fell_ill"
                                                ]
                                                    ? result_json["page1"][
                                                          "user"
                                                      ]["place_fell_ill"]
                                                    : "-"
                                            }
                                            readOnly
                                        />
                                    </Col>
                                </div>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <div id="line">
                                    <Form.Label id="form_line" column sm="4">
                                        7. Details of the amount claimed -
                                    </Form.Label>
                                    <Col id="text" sm="3">
                                        <Form.Control
                                            as="textarea"
                                            placeholder={
                                                result_json["page1"]["user"][
                                                    "ammount_details"
                                                ]
                                                    ? result_json["page1"][
                                                          "user"
                                                      ]["ammount_details"]
                                                    : "-"
                                            }
                                            readOnly
                                        />
                                    </Col>
                                </div>
                            </Form.Group>
                        </Form>
                    </Container>
                </div>
            </Container>

            <Container>
                <div className="Page2">
                    <br />
                    <h2>Medical Attendance</h2>
                    <br />

                    <h5>(i) Fee for consultation indicating - </h5>

                    <Container>
                        <Form>
                            <Form.Group as={Row} className="mb-3">
                                <div id="line">
                                    <Form.Label id="form_line" column sm="5">
                                        (a) the name & designation of the
                                        Medical Officer consulted and hospital
                                        or dispensary to which attached
                                    </Form.Label>
                                    <Col id="text" sm="5">
                                        <Form.Control
                                            as="textarea"
                                            placeholder={
                                                result_json["page2"]["user"][
                                                    "name"
                                                ]
                                                    ? result_json["page2"][
                                                          "user"
                                                      ]["name"]
                                                    : "-"
                                            }
                                            readOnly
                                        />
                                    </Col>
                                </div>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <div id="line">
                                    <Form.Label id="form_line" column sm="5">
                                        (b) the number and dates of consultation
                                        and the fee paid for each consultation
                                    </Form.Label>
                                    <Col id="text" sm="5">
                                        <Form.Control
                                            as="textarea"
                                            placeholder={
                                                result_json["page2"]["user"][
                                                    "numDatesFeeCon"
                                                ]
                                                    ? result_json["page2"][
                                                          "user"
                                                      ]["numDatesFeeCon"]
                                                    : "-"
                                            }
                                            readOnly
                                        />
                                    </Col>
                                </div>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <div id="line">
                                    <Form.Label id="form_line" column sm="5">
                                        (c) the number & dates of injection &
                                        the fee paid for each injection
                                    </Form.Label>
                                    <Col id="text" sm="5">
                                        <Form.Control
                                            as="textarea"
                                            placeholder={
                                                result_json["page2"]["user"][
                                                    "numDatesFeeInj"
                                                ]
                                                    ? result_json["page2"][
                                                          "user"
                                                      ]["numDatesFeeInj"]
                                                    : "-"
                                            }
                                            readOnly
                                        />
                                    </Col>
                                </div>
                            </Form.Group>
                        </Form>
                    </Container>

                    <h5>
                        (ii) Charges for pathological, Radiological or other
                        similar tests undertaken during diagnosis indicating the
                        test name and the charges incurred
                    </h5>
                    <Container>
                        <Form>
                            <Form.Group as={Row} className="mb-3">
                                <div id="line">
                                    <Form.Label id="form_line" column sm="5">
                                        (a) Name of the hospital or laboratory
                                        where any radiological tests were
                                        undertaken
                                    </Form.Label>
                                    <Col id="text" sm="5">
                                        <Form.Control
                                            as="textarea"
                                            placeholder={
                                                result_json["page2"]["user"][
                                                    "hospitalName"
                                                ]
                                                    ? result_json["page2"][
                                                          "user"
                                                      ]["hospitalName"]
                                                    : "-"
                                            }
                                            readOnly
                                        />
                                    </Col>
                                </div>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <div id="line">
                                    <Form.Label id="form_line" column sm="5">
                                        <h5>
                                            (iii) Cost of medicines purchased
                                            from the market :
                                        </h5>
                                    </Form.Label>
                                    <Col id="text" sm="5">
                                        <Form.Control
                                            as="textarea"
                                            placeholder={
                                                result_json["page2"]["user"][
                                                    "costMedicine"
                                                ]
                                                    ? result_json["page2"][
                                                          "user"
                                                      ]["costMedicine"]
                                                    : "-"
                                            }
                                            readOnly
                                        />
                                    </Col>
                                </div>
                            </Form.Group>
                        </Form>
                    </Container>
                </div>
            </Container>

            <Container>
                <h2>(ii) Consultation with Specialist</h2>
                <br />
                <Container>
                    <strong>
                        Fee paid to specialist or a medical office other than
                        the authorised medical attendant indicating
                    </strong>
                    <Form>
                        <Form.Group as={Row} className="mb-3">
                            <div id="line">
                                <Form.Label id="form_line" column sm="5">
                                    (a) the name & designation of the Specialist
                                    or Medical Officer consulted and the
                                    hospital to which attached
                                </Form.Label>
                                <Col id="text" sm="5">
                                    <Form.Control
                                        as="textarea"
                                        placeholder={
                                            result_json["page3"]["user"]["name"]
                                                ? result_json["page3"]["user"][
                                                      "name"
                                                  ]
                                                : "-"
                                        }
                                        readOnly
                                    />
                                </Col>
                            </div>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <div id="line">
                                <Form.Label id="form_line" column sm="5">
                                    (b) Number & dates of consultation and the
                                    fees paid for each consultation
                                </Form.Label>
                                <Col id="text" sm="5">
                                    <Form.Control
                                        as="textarea"
                                        placeholder={
                                            result_json["page3"]["user"][
                                                "numDateCon"
                                            ]
                                                ? result_json["page3"]["user"][
                                                      "numDateCon"
                                                  ]
                                                : "-"
                                        }
                                        readOnly
                                    />
                                </Col>
                            </div>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <div id="line">
                                <Form.Label id="form_line" column sm="5">
                                    Total amount claimed
                                </Form.Label>
                                <Col id="text" sm="5">
                                    <Form.Control
                                        type="text"
                                        placeholder={
                                            result_json["page3"]["user"][
                                                "amountClaimed"
                                            ]
                                                ? result_json["page3"]["user"][
                                                      "amountClaimed"
                                                  ]
                                                : "-"
                                        }
                                        readOnly
                                    />
                                </Col>
                            </div>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <div id="line">
                                <Form.Label id="form_line" column sm="5">
                                    Less advance taken
                                </Form.Label>
                                <Col id="text" sm="5">
                                    <Form.Control
                                        type="text"
                                        placeholder={
                                            result_json["page3"]["user"][
                                                "lessAdvTaken"
                                            ]
                                                ? result_json["page3"]["user"][
                                                      "lessAdvTaken"
                                                  ]
                                                : "-"
                                        }
                                        readOnly
                                    />
                                </Col>
                            </div>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <div id="line">
                                <Form.Label id="form_line" column sm="5">
                                    Net amount claimed
                                </Form.Label>
                                <Col id="text" sm="5">
                                    <Form.Control
                                        type="text"
                                        placeholder={
                                            result_json["page3"]["user"][
                                                "netAmntClaimed"
                                            ]
                                                ? result_json["page3"]["user"][
                                                      "netAmntClaimed"
                                                  ]
                                                : "-"
                                        }
                                        readOnly
                                    />
                                </Col>
                            </div>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <div id="line">
                                <Form.Label id="form_line" column sm="5">
                                    List of enclosures
                                </Form.Label>
                                <Col id="text" sm="5">
                                    <Form.Control
                                        type="text"
                                        placeholder={
                                            result_json["page3"]["user"][
                                                "lstOfEncl"
                                            ]
                                                ? result_json["page3"]["user"][
                                                      "lstOfEncl"
                                                  ]
                                                : "-"
                                        }
                                        readOnly
                                    />
                                </Col>
                            </div>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <div id="line">
                                <Form.Label id="form_line" column sm="5">
                                    Date
                                </Form.Label>
                                <Col id="text" sm="5">
                                    <Form.Control
                                        type="Date"
                                        placeholder={
                                            result_json["page3"]["user"]["date"]
                                                ? result_json["page3"]["user"][
                                                      "date"
                                                  ]
                                                : "-"
                                        }
                                        readOnly
                                    />
                                </Col>
                            </div>
                        </Form.Group>

                        <Form.Group>
                            <Form.Check
                                type="checkbox"
                                label="It is certified that, I am employed at IIT Ropar and I am not availing the medical facilities or financial / medical allowances
                          in lieu thereof either of myself / of the members of my family from any (other) source. I hereby declare that the statements in 
                          the application are true to the best of my knowledge and belief and that the person for whom medical expenses were incurred is 
                          wholly dependent upon me. I will be solely responsible for this. "
                                checked
                            />
                        </Form.Group>
                        <br />
                        <br></br>

                        <table id="table1" responsive="sm">
                            <thead>
                                <tr>
                                    <th>S.NO</th>
                                    <th>
                                        Name of Medicine(s) (attach extra sheet
                                        of require)
                                    </th>
                                    <th>Price(Rs.)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {result_json["page4"]["user"]["medicines"].map(
                                    (med) => (
                                        <tr>
                                            <td>{med.sno1}</td>
                                            <td>{med.medicine}</td>
                                            <td>{med.price1}</td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>

                        <br></br>
                        <table id="table2" responsive="sm">
                            <thead>
                                <tr>
                                    <th>S.NO</th>
                                    <th>
                                        Name of Medicine(s) (attach extra sheet
                                        of require)
                                    </th>
                                    <th>Price(Rs.)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {result_json["page4"]["user"]["test"].map(
                                    (test_item) => (
                                        <tr>
                                            <td>{test_item.sno2}</td>
                                            <td>{test_item.test}</td>
                                            <td>{test_item.price2}</td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                        <br></br>
                        <br></br>
                        {imgSrc.map(
                                    (img) => (
                                        <figure style={{textAlign: "center"}}>
                                            <img src = {img.encoding} class="figure-img img-fluid rounded"></img>
                                            <figcaption  style={{color: "black"}} class="figure-caption"><b><i>{img.name}</i></b></figcaption>
                                        </figure>
                                    )
                                )}
                        <br />
                        <br></br>
                        <Button onClick={window.print} type="button">
                            Print application
                        </Button>
                        <br />
                        <br />
                        <br />
                        <br />
                    </Form>
                </Container>
            </Container>
        </div>
    )
}
export default Application
