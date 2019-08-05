import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ListPage from "./ListPage";
import DetailPage from "./DetailPage";
import NotFound from "./NotFound";

const ShellPage = (props) => {
    return (
        <Router>
            <header className="main-header">
                <h1>Cars</h1>
            </header>
            <nav className="main-nav">
                <ul>
                    <li><a href="">Purchase</a></li>
                    <li><a href="">My Orders</a></li>
                    <li><a href="">Sell</a></li>
                </ul>
            </nav>

            <main>
                <Switch>
                    <Route path="/" exact component={ListPage} />
                    <Route path="/detail" component={DetailPage} />
                    <Route component={NotFound} />
                </Switch>
            </main>
            
            <footer className="footer">
                Copyright
            </footer>
        </Router>
    )
}

export default ShellPage;