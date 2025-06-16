import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Exp2 from "./Exp2";
import Exp3 from "./Exp3";
import Exp6 from "./Exp6";
import Exp7 from "./Exp7";
import Exp10 from "./Exp10";
function Exp5() {
    return (
        <div>
            <Router>
                <ul>
                    <li><Link to="Exp2" >Exp 2</Link></li>
                    <li><Link to="Exp3" >Exp 3</Link></li>
                    <li><Link to="Exp6" >Exp 6</Link></li>
                    <li><Link to="Exp7" >Exp 7</Link></li>
                    <li><Link to="Exp10" >Exp 10</Link></li>
                </ul>
                <Routes>
                    <Route exact path="/Exp2" element={<Exp2 />} />
                    <Route exact path="/Exp3" element={<Exp3 />} />
                    <Route exact path="/Exp6" element={<Exp6 />} />
                    <Route exact path="/Exp7" element={<Exp7 />} />
                    <Route exact path="/Exp10" element={<Exp10 />} />

                </Routes>
            </Router>
        </div>
    );
}
export default Exp5;
