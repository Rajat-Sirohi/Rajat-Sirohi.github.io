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
    constructor(props) {
        super(props);
        this.state = { translationActive: false };
    }

    toggleTranslation() {
        this.setState(prevState => {
            return { translationActive: !prevState.translationActive };
        });
    }

    render() {
        var cursorStyle, text, author, citation;
        if (this.props.translatable) {
            cursorStyle="pointer"
            if (this.state.translationActive) {
                text=this.props.transText
                author=this.props.transAuthor
                citation=this.props.transCitation
            } else {
                text=this.props.origText
                author=this.props.origAuthor
                citation=this.props.origCitation
            }
        } else {
            cursorStyle="auto"
            text=this.props.text
            author=this.props.author
            citation=this.props.citation
        }

        return (
            <div className="quote" onClick={() => this.toggleTranslation()} style={{ cursor: cursorStyle }}>
                <blockquote>{text}</blockquote>
                {author &&
                <span className="quoteCitation">
                    &mdash; <a href={this.props.source}>{author}</a>
                    {citation && <span>, <cite>{citation}</cite></span>}
                </span>}
            </div>
        );
    }
}

class Poem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { translationActive: false };
    }

    toggleTranslation() {
        this.setState(prevState => {
            return { translationActive: !prevState.translationActive };
        });
    }

    render() {
        var cursorStyle, text, author;
        if (this.props.translatable) {
            cursorStyle="pointer"
            if (this.state.translationActive) {
                text=this.props.transText
                author=this.props.transAuthor
            } else {
                text=this.props.origText
                author=this.props.origAuthor
            }
        } else {
            cursorStyle="auto"
            text=this.props.text
            author=this.props.author
        }

        return (
			<div onClick={() => this.toggleTranslation()} style={{ cursor: cursorStyle }}>
                <div style={{whiteSpace: "pre-line", marginBottom: "20px"}}>{text}</div>
                <span>&mdash; <i>{author}</i></span>
			</div>
        );
    }
}

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeButton: null, activeButtonContent: null };
    }

    updateActiveButton(newActiveButton, newActiveButtonContent) {
        this.setState(prevState => {
            if (newActiveButton === prevState.activeButton) {
                return { activeButton: null, activeButtonContent: null };
            } else {
                return { activeButton: newActiveButton, activeButtonContent: newActiveButtonContent };
            }
        });
    }

    render() {
        return (
            <div style={{paddingBottom: this.props.major ? "20px" : "7px", textAlign: "center"}}>
                <b style={{fontSize: this.props.major ? "1.5em" : "1em"}}>{this.props.title}</b>
                <ul style={{paddingLeft: "0px"}}>
                    {!this.props.buttons && this.props.elems.map((topic, i) =>
                        <li key={i} style={{display: this.props.inline ? "inline-block" : "auto", padding: "10px 20px"}}>{topic}</li>
                    )}
                    {this.props.buttons && this.props.elems.map((button, i) =>
                        <li key={i} style={{display: this.props.inline ? "inline-block" : "auto", padding: "10px 20px"}}>
                            <button onClick={() => this.updateActiveButton(button.label, button.content)}>{button.label}</button>
                        </li>
                    )}
                </ul>
                {this.state.activeButtonContent}
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

            <Quote translatable origText="Главное, самому себе не лгите. Лгущий самому себе и собственную ложь свою слушающий до того доходит, что уж никакой правды ни в себе, ни кругом не различает, а стало быть, входит в неуважение и к себе и к другим. Не уважая же никого, перестает любить, а чтобы, не имея любви, занять себя и развлечь, предается страстям и грубым сладостям и доходит совсем до скотства в пороках своих, а все от беспрерывной лжи и людям и себе самому." origAuthor="Фёдор Михайлович Достоевский" origCitation="Братья Карамазовы" transText="Above all, do not lie to yourself. A man who lies to himself and listens to his own lie comes to a point where he does not discern any truth either in himself or anywhere around him, and thus falls into disrespect towards himself and others. Not respecting anyone, he ceases to love, and having no love, he gives himself up to passions and coarse pleasures, in order to occupy and amuse himself, and in his vices reaches complete bestiality, and it all comes from lying continually to others and to himself." transAuthor="Fyodor Mikhailovich Dostoevsky" transCitation="The Brothes Karamazov" />
            <Quote translatable origText="Тишина продолжалась, и вдруг я ощутил у виска, у волос моих, холодное прикосновение железа. Вы спросите: твердо ли я надеялся, что спасусь? Отвечу вам, как перед Богом: не имел никакой надежды, кроме разве одного шанса из ста. Для чего же принимал смерть? А я спрошу: на что мне была жизнь после револьвера, поднятого на меня обожаемым мною существом?" origAuthor="Фёдор Михайлович Достоевский" origCitation="Кроткая: Фантастический рассказ" transText="The silence continued, and suddenly I felt the cold touch of steel at my temple, at my hair. You will ask me, did I have any hope of escape? I will answer you—and God knows I am speaking the truth—none at all, not an atom of hope, except perhaps one chance in a hundred. Why, then, did I accept death? Well, let me ask you in turn: of what use was life to me after a gun had been levelled against me by a human being I adored?" transAuthor="Fyodor Mikhailovich Dostoevsky" transCitation="A Gentle Creature: A Fantastic Story" />
            <Quote translatable origText="Sedulo curavi, humanas actiones non ridere, non lugere, neque detestari, sed intelligere; atque adeo humanos affectus, ut sunt amor, odium, ira, invidia, gloria, misericordia et reliquae animi commotiones non ut humanae naturae vitia, sed ut proprietates contemplatus sum, quae ad ipsam ita pertinent, ut ad naturam aëris aestus, frigus, tempestas, tonitru et alia huiusmodi, quae, tametsi incommoda sunt, necessaria tamen sunt, certasque habent causas, per quas eorum naturam intelligere conamur, et mens eorum vera contemplatione aeque gaudet, ac earum rerum cognitione, quae sensibus gratae sunt." origAuthor="Baruch Spinoza" origCitation="Tractatus Theologico-Politicus" transText="I have laboured carefully, not to mock, lament, or execrate human actions, but to understand them; and, to this end, I have looked upon passions, such as love, hatred, anger, envy, ambition, pity, and the other perturbations of the mind, not in the light of vices of human nature, but as properties, just as pertinent to it, as are heat, cold, storm, thunder, and the like to the nature of the atmosphere, which phenomena, though inconvenient, are yet necessary, and have fixed causes, by means of which we endeavour to understand their nature, and the mind has just as much pleasure in viewing them aright, as in knowing such things as flatter the senses." transAuthor="Baruch Spinoza" transCitation="Tractatus Theologico-Politicus" />
            <Quote text="If you give children a vocabulary that's large enough and complex enough to express their emotions and their ideas...you give them access to complex feelings and emotions within themselves. If you talk to a teenager and all they can say about how they feel is 'bad', and they haven't got a larger vocabulary for 'lonely', 'abused', 'insecure', 'frightened', a huge panoply of words---I remember when my daughter was just telling me that she just felt bad, I bought her a thesaurus! ... What that does is it makes you feel that you can experience this huge complex of emotions at once, and that there are words for all of them. If you want children to feel less frustrated and less disenfranchised and less unable to even feel comfortable with their own emotions, you have to give them a vocabulary that's as complicated as their inner lives." author="Jorie Graham" source="https://www.youtube.com/watch?v=Zat9RXji1Vw&t=1217s" />
            <Quote text="The fool who rests his retirement on the lottery is not vindicated, but rescued, by luck." />
            <Quote text="I never contradict myself; and if I do, then so be it..." />

            <div style={{padding: "15px"}}></div>

            <List title="Notes:" major inline elems={[
                <a href="notes/reason.html">Reason vs. Emotion</a>,
                <a href="notes/ethics.html">Ethics</a>,
                <a href="notes/dialogues.html">Dialogues</a>,
                <a href="notes/free_will.html">Free Will</a>,
                <a href="notes/religion.html">Religion</a>,
            ]} />

            <List title="Poetry:" major inline buttons elems={[
                {
                    label: "Moving On",
                    content: <Poem author="Rajat Sirohi"
                    text={"Five years have passed since I last saw you,\nThe sight of your grave's more familiar than your face.\nTime keeps moving and your memory slowly fades,\nI'm supposed to move on, but I'll never forget you.\n\nWhen you first arrived, I refused to meet your eyes.\nYou kept your distance, but never left my side.\nInch by inch, paw by paw, you crept up beside me,\nLeft a mark on my heart, saying that you'll always love me.\n\nWhen you finally left us, I learned that I loved you.\nYour body's now gone, but that mark only grew,\nOn my heart, in our family, in photos and memories;\nDeath's just a lie, love grants us immortality.\n\nNo need to cry, or grieve, or despair;\nYou're still right here with us, I promise, I swear!\nThen why can't I touch you, hear you, or see you?\nYou don't keep on living, just 'cause I want you to...\n\nSometimes things change, for better or worse,\nNature knows not justice, nor prayer, nor worth;\nHer whim is our fate, we choose only our response,\nI choose truth, won't pretend everything's how I want...\n\nI admit that you're gone, but you're more than that moment\nOf departure, anguish, mourning, bereavement.\nTo leave these behind is not to forget you,\nBut to accept what's been lost and cherish what's still true.\n\nAll this time later, I still know that you're with me.\nIt's not quite the same, and it never will be,\nBut love lives on, past death and misfortune;\nYou're gone, I've moved on, not forgotten."} />
                },
                {
                    label: "Sunset",
                    content: <Poem author="Rajat Sirohi"
                    text={"Do you remember, where we first met,\nOn the top of that hill, as the Sun was leaving.\nIt's a moment that I, will never forget,\nFor I meant to end, my life that evening.\n\nYou'd apologized, for interrupting,\nThinking that I, was just unwinding.\nI turned to you, you to the sky,\nWe exchanged our wonder, I began to cry.\n\nYour focus shifted, fixed directly on me,\nBefore you could notice, I hid my mis'ry.\nGleeful waves, after some pleasantries;\nYou left, at last, you let me be.\n\nYou saved my life, I'm sure they'll say,\nAs I go home, engulfed in shame,\nTo live a bit longer, even just a day;\nWhy do I feel, all just the same?\n\nSince then, we're now friends, our lives intertwined;\nYou concern yourself with me, I oblige myself to you.\nVanity, futility, just postponing the end;\nI'm ready to say, as I know I must do.\n\nI should never have let, you to care about me,\nI've had quite enough, the mis'ry must cease!\nTo live for another's like being dragged through the dirt,\nPulled from concern, held by fear of desert.\n\nThe rope stretches thin as the dirt builds up fast,\nSnap! There I'll stay, laid to rest at last.\nYou'll look back at first, with a sense of loss,\nBut at once feel relief, lo the burden's been tossed.\n\nLive your life, be happy, you're free;\nNow I'm gone, don't worry 'bout me.\nGo back to that hill, where we first met,\nAnd keep your eyes on that beautiful sunset."} />
                },
                {
                    label: "For Whom the Bell Tolls",
                    content: <Poem author="John Donne"
                    text={"No man is an island,\nEntire of itself.\nEach is a piece of the continent,\nA part of the main.\nIf a clod be washed away by the sea,\nEurope is the less.\nAs well as if a promontory were.\nAs well as if a manor of thine own\nOr of thine friend's were.\nEach man's death diminishes me,\nFor I am involved in mankind.\nTherefore, send not to know\nFor whom the bell tolls,\nIt tolls for thee."} />
                },
                {
                    label: "Нищий",
                    content: <Poem translatable origAuthor="Михаил Лермонтов" transAuthor="Mikhail Lermontov"
                    origText={"У врат обители святой\nСтоял просящий подаянья\nБедняк иссохший, чуть живой\nОт глада, жажды и страданья.\n\nКуска лишь хлеба он просил,\nИ взор являл живую муку,\nИ кто-то камень положил\nВ его протянутую руку.\n\nТак я молил твоей любви\nС слезами горькими, с тоскою;\nТак чувства лучшие мои\nОбмануты навек тобою!"}
                    transText={"By gates of an abode, blessed,\nA man stood, asking for donation,\nA beggar, cruelly oppressed\nBy hunger, thirst and deprivation.\n\nHe asked just for a peace of bread,\nAnd all his looks were full of anguish,\nAnd was a cold stone laid\nInto his stretched arm, thin and languished.\n\nThus I prayed vainly for your love,\nWith bitter tears, pine and fervor,\nThus my best senses, that have thrived,\nWere victimized by you forever!"} />
                },
                {
                    label: "Les Amours de Marie XXV",
                    content: <Poem translatable origAuthor="Pierre de Ronsard" transAuthor="Pierre de Ronsard"
                    origText={"Les villes et les bourgs me sont si odieux\nQue je meurs si je vois quelque tracette humaine.\nSeulet dedans les bois, pensif, je me promène,\nEt rien ne m'est plaisant que les sauvages lieux.\n\nIl n'y a dans ces bois sangliers si furieux,\nNi roc si endurci, ni ruisseau, ni fontaine,\nNi arbre, tant soit sourd, qui ne sache ma peine\nEt qui ne soit marri de mon mal ennuyeux.\n\nUn penser qui renaît d'un autre m'accompaigne\nAvec un pleur amer qui tout le sein me baigne;\nTravaillé de soupirs qui si triste me font,\n\nQue si quelque passant me trouvait au bocage,\nVoyant mon poil rebours et l'horreur de mon front,\nNe me dirait pas homme, ains un monstre sauvage."}
                    transText={"The cities and towns are so hateful to me,\nThat I am horrified when I see a human footprint.\nWandering alone in the forest, I avoid confrontation;\nNothing pleases me more than the wilderness.\n\nThere are no boars in these woods, so furious,\nNeither rock so hardened, nor stream, nor fountain,\nNeither tree, however deaf, who does not know my sorrow\nAnd who is not embroiled in my tireless suffering.\n\nA thought which keeps arising accompanies me\nAnd, in a sorrowful groan, pouring out my whole soul,\nI sigh endlessly, and continue to despair,\n\nWere someone to stumble upon me in the grove\nObserve my dishevelment and consternation,\nHe would reward me with the nickname of a freak."} />
                },
            ]} />
        
            <List title="Essays:" major nobar elems={[
                <List title="Dostoevsky" elems={[
                    <a href="essays/Justice_in_The_Brothers_Karamazov_-_Towards_Spiritual_Redemption.pdf">
                    Justice in <i>The Brothers Karamazov</i>: Towards Spiritual Redemption</a>,

                    <a href="essays/The_Brothers_Karamzov_-_Dostoevsky_vs_Richard_Brooks.pdf">
                    <i>The Brothers Karamazov</i>: Dostoevsky vs. Richard Brooks</a>,

                    <a href="essays/The_Transformative_Beauty_of_a_Saint.pdf">
                    The Transformative Beauty of a Saint</a>,
                ]} />,
                <List title="History of Science" elems={[
                    <a href="essays/Empiricism_Born_Out_of_the_Death_of_Realism_-_Isaac_Newtons_Role_in_the_History_of_Science.pdf">
                    Empiricism Born Out of the Death of Realism: Isaac Newton&#39;s Role in the History of Science</a>,
                ]} />,
                <List title="Critical Theory" elems={[
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