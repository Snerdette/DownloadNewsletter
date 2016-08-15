import React from 'react';

const navStyle = {
    backgroundColor: "#C5EBFF",
    color: "#002A40"
};

class HomePage extends React.Component {
    render() {
        return (
           <div className="container-fluid" style={navStyle}>
              <div className="row">
                  <div className="col-sm-3 col-md-2 sidebar navStyle" >
                            <ul className="nav nav-sidebar">
                                <li className="active"><a href="#">Overview <span className="sr-only">(current)</span></a></li>
                                <li><a href="#">Reports</a></li>
                                <li><a href="#">Analytics</a></li>
                                <li><a href="#">Export</a></li>
                            </ul>
                            <ul className="nav nav-sidebar">
                                <li><a href="">Nav item</a></li>
                                <li><a href="">Nav item again</a></li>
                                <li><a href="">One more nav</a></li>
                                <li><a href="">Another nav item</a></li>
                                <li><a href="">More navigation</a></li>
                            </ul>
                            <ul className="nav nav-sidebar">
                                <li><a href="">Nav item again</a></li>
                                <li><a href="">One more nav</a></li>
                                <li><a href="">Another nav item</a></li>
                            </ul>
                        </div>
                  <div className="col-sm-9 col-md-9 main">
                            <h1 className="page-header">Articles</h1>

                            <div className="row placeholders">
                                <div className="col-xs-6 col-sm-3 placeholder">
                                    <img
                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                                        width="200" height="200" className="img-responsive"
                                        alt="Generic placeholder thumbnail"/>
                                    <h4>Label</h4>
                                    <div className="text-muted">Something else</div>
                                </div>
                                <div className="col-xs-6 col-sm-3 placeholder">
                                    <img
                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                                        width="200" height="200" className="img-responsive"
                                        alt="Generic placeholder thumbnail"/>
                                    <h4>Label</h4>
                                    <div className="text-muted">Something else</div>
                                </div>
                                <div className="col-xs-6 col-sm-3 placeholder">
                                    <img
                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                                        width="200" height="200" className="img-responsive"
                                        alt="Generic placeholder thumbnail"/>
                                    <h4>Label</h4>
                                    <div className="text-muted">Something else</div>
                                </div>
                                <div className="col-xs-6 col-sm-3 placeholder">
                                    <img
                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                                        width="200" height="200" className="img-responsive"
                                        alt="Generic placeholder thumbnail"/>
                                    <h4>Label</h4>
                                    <div className="text-muted">Something else</div>
                                </div>
                            </div>
                        </div>
              </div>
           </div>
        );
    }
}

export default HomePage;