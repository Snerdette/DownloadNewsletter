class Article extends React.Component {

    render() {
        return <div className="article">
            <pdf src={this.props.readSrc}></pdf>
        </div>
    }
}

React.render(<Article />, document.getElementById('app'));