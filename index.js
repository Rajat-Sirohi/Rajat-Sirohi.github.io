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

class Quote extends React.Component {
    render() {
        return (
			<figure className="quote">
				<blockquote>{this.props.text}</blockquote>
				{this.props.author &&
				<span className="quoteCitation">
					&mdash; <a href={this.props.source}>{this.props.author}</a>
					{this.props.citation && <span>, <cite>{this.props.citation}</cite></span>}
				</span>}
			</figure>
        );
    }
}


class List extends React.Component {
    render() {
        return (
            <div style={{paddingBottom: this.props.major ? "20px" : "7px", textAlign: "center"}}>
                <b style={{fontSize: this.props.major ? "1.5em" : "1em"}}>{this.props.title}</b>
                <ul style={{paddingLeft: "0px"}}>
                    {this.props.links.map((topic, i) =>
                        <li key={i} style={{display: this.props.inline ? "inline-block" : "auto", padding: "10px 20px"}}>{topic}</li>
                    )}
                </ul>
                {this.props.major && !this.props.nobar && <hr width="1000" />}
            </div>
        );
    }
}

function App() {
    return (
        <div>
            <center>
                <h1>Rajat Sirohi</h1>
                <Clock />
                <img src="images/great_stellated_dodecahedron.png" width="70" />
            </center>

            <Quote text="Above all, do not lie to yourself. A man who lies to himself and listens to his own lie comes to a point where he does not discern any truth either in himself or anywhere around him, and thus falls into disrespect towards himself and others. Not respecting anyone, he ceases to love, and having no love, he gives himself up to passions and coarse pleasures, in order to occupy and amuse himself, and in his vices reaches complete bestiality, and it all comes from lying continually to others and to himself." author="Fyodor Dostoevsky" citation="The Brothers Karamazov" />
            <Quote text="I have laboured carefully, not to mock, lament, or execrate human actions, but to understand them; and, to this end, I have looked upon passions, such as love, hatred, anger, envy, ambition, pity, and the other perturbations of the mind, not in the light of vices of human nature, but as properties, just as pertinent to it, as are heat, cold, storm, thunder, and the like to the nature of the atmosphere, which phenomena, though inconvenient, are yet necessary, and have fixed causes, by means of which we endeavour to understand their nature, and the mind has just as much pleasure in viewing them aright, as in knowing such things as flatter the senses." author="Baruch Spinoza" citation="Tractatus Theologico-Politicus" />
            <Quote text="If you give children a vocabulary that's large enough and complex enough to express their emotions and their ideas...you give them access to complex feelings and emotions within themselves. If you talk to a teenager and all they can say about how they feel is 'bad', and they haven't got a larger vocabulary for 'lonely', 'abused', 'insecure', 'frightened', a huge panoply of words---I remember when my daughter was just telling me that she just felt bad, I bought her a thesaurus! ... What that does is it makes you feel that you can experience this huge complex of emotions at once, and that there are words for all of them. If you want children to feel less frustrated and less disenfranchised and less unable to even feel comfortable with their own emotions, you have to give them a vocabulary that's as complicated as their inner lives." author="Jorie Graham" source="https://www.youtube.com/watch?v=Zat9RXji1Vw&t=1217s" />
            <Quote text="The fool who rests his retirement on the lottery is not vindicated, but rescued, by luck." />
            <Quote text="I never contradict myself; and if I do, then so be it..." />

            <div style={{padding: "15px"}}></div>

            <List title="Notes:" major inline links={[
                <a href="notes/reason.html">Reason vs. Emotion</a>,
                <a href="notes/ethics.html">Ethics</a>,
                <a href="notes/free_will.html">Free Will</a>,
                <a href="notes/epistemology.html">Epistemology</a>,
            ]} />
        
            <List title="Essays:" major nobar links={[
                <List title="Dostoevsky" links={[
                    <a href="essays/Justice_in_The_Brothers_Karamazov_-_Towards_Spiritual_Redemption.pdf">
                    Justice in <i>The Brothers Karamazov</i>: Towards Spiritual Redemption</a>,

                    <a href="essays/The_Brothers_Karamzov_-_Dostoevsky_vs_Richard_Brooks.pdf">
                    <i>The Brothers Karamazov</i>: Dostoevsky vs. Richard Brooks</a>,

                    <a href="essays/The_Transformative_Beauty_of_a_Saint.pdf">
                    The Transformative Beauty of a Saint</a>,
                ]} />,
                <List title="History of Science" links={[
                    <a href="essays/Empiricism_Born_Out_of_the_Death_of_Realism_-_Isaac_Newtons_Role_in_the_History_of_Science.pdf">
                    Empiricism Born Out of the Death of Realism: Isaac Newton&#39;s Role in the History of Science</a>,
                ]} />,
                <List title="Critical Theory" links={[
                    <a href="essays/Science_as_a_Screen_-_Reclaiming_the_Human_Lost_in_Homo_Sapiens.pdf">
                    Science as a Screen: Reclaiming the Human Lost in <i>Homo Sapiens</i></a>,

                    <a href="essays/Confronting_Reality_Amidst_Simulation_-_A_Response_to_Baudrillard.pdf">
                    Confronting Reality Amidst Simulation: A Response to Baudrillard</a>,

                    <a href="essays/Humanism_and_the_American_Dream_-_Opium_or_Emancipation.pdf">
                    Humanism and the American Dream: Opium or Emancipation?</a>,
                ]} />,
            ]} />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));