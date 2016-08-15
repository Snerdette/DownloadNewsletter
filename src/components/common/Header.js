import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const headerStyle = {
    backgroundColor: 'green',
    color: 'white',
    border: '1px dotted white',
    justifyContent: 'center',
    font: '18px solid black'
};

const Header = ({loading}) => {
    return (
        <nav style={headerStyle}>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/articles" activeClassName="active">Articles</Link>
            {" | "}
            <Link to="/submissions" activeClassName="active">Submit an Article</Link>
        </nav>
    );
};

Header.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default Header;