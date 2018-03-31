import React from 'react';
import {Link} from 'react-router';

const navStyle = {
    backgroundColor: "#C5EBFF",
    color: "#002A40"
};

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron custom-jumbotron">
                <h1>The Download</h1>
                <p>Catalyst's Newsletter</p>
                <Link to="article" className="btn btn-primary btn-lg">Read Articles</Link>
            </div>
        );
    }
}

export default HomePage;