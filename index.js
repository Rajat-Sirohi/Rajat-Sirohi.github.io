class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    
    tick() {
        this.setState({
            date: new Date()
        });
    }
    
    render() {
        return <h2>{this.state.date.toLocaleTimeString()}</h2>;
    }
}

function App() {
    return (
        <center>
            <h1>Rajat Sirohi</h1>
            <Clock />
            <a href="more.html">
                <img src="images/great_stellated_dodecahedron.png" />
            </a>
        </center>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));