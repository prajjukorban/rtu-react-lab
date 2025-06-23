import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Page1 from "../comp/Page1";
import Page2 from "../comp/Page2";
import Page3 from "../comp/Page3";
import Page4 from "../comp/Page4";

function Exp5() {
    return (
        <div>
            <Router>
                <ul>
                    <li><Link to="Page1" >Page 1</Link></li>
                    <li><Link to="Page2" >Page 2</Link></li>
                    <li><Link to="Page3" >Page 3</Link></li>
                    <li><Link to="Page4" >Page 4</Link></li>
                </ul>
                <Routes>
                    <Route exact path="Page1" element={<Page1 />} />
                    <Route exact path="Page2" element={<Page2 />} />
                    <Route exact path="Page3" element={<Page3/>} />
                    <Route exact path="Page4" element={<Page4 />} />

                </Routes>
            </Router>
        </div>
    );
}
export default Exp5;