import {version} from 'inferno';
import Component from 'inferno-component';
//import Logo from './logo';
import './App.css';

class App extends Component {
    state = {
        autocheckbox: false, // flashing checkbox
        autoradio: false,    // flashing radio
        checkbox: false,     // normal checkbox
        radio: '0',            // normal radio, actove option index
    };

    componentDidMount() {
        setInterval(() => {
            this.setState({
                autocheckbox: !this.state.autocheckbox,
                autoradio: !this.state.autoradio
            })
        }, 1000);
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>{`Inferno controls test, Inferno version = ${version}`}</h2>
                </div>

                <div className="checkboxTests">
                    {/* forever disabled */}
                    <label className="testCase">
                        <input type="checkbox" checked={false}/>
                        Controlled checkbox always disabled
                    </label>
                    {/* forever enabled */}
                    <label className="testCase">
                        <input type="checkbox" checked={true}/>
                        Controlled checkbox always enabled
                    </label>
                    {/* forever disabled with handler */}
                    <label className="testCase">
                        <input type="checkbox" checked={false}
                               onClick={(event) => console.log('new value', event.target.checked)}/>
                        Controlled checkbox always disabled (print to console on click)
                    </label>
                    {/* forever enabled with handler */}
                    <label className="testCase">
                        <input type="checkbox" checked={true}
                               onClick={(event) => console.log('new value', event.target.checked)}/>
                        Controlled checkbox always enabled (print to console on click)
                    </label>
                    {/* autocheckbox, toggle every second */}
                    <label className="testCase">
                        <input type="checkbox" checked={this.state.autocheckbox}/>
                        Controlled checkbox that toggle every second
                    </label>
                    {/* normal checkbox */}
                    <label className="testCase">
                        <input type="checkbox" checked={this.state.checkbox}
                               onClick={(event) => this.setState({checkbox: event.target.checked})}/>
                        Controlled checkbox that work like normal checkbox
                    </label>
                </div>

                <div className="radioTests">
                    {/* forever disabled */}
                    <label className="testCase">
                        <input type="radio" checked={false}/>
                        Controlled radio always disabled
                    </label>
                    {/* forever enabled */}
                    <label className="testCase">
                        <input type="radio" checked={true}/>
                        Controlled checkbox always enabled
                    </label>
                    {/* forever disabled with handler */}
                    <label className="testCase">
                        <input type="radio" checked={false}
                               onClick={(event) => console.log('new value', event.target.checked)}/>
                        Controlled radio always disabled (print to console on click)
                    </label>
                    {/* forever enabled with handler */}
                    <label className="testCase">
                        <input type="radio" checked={true}
                               onClick={(event) => console.log('new value', event.target.checked)}/>
                        Controlled radio always enabled (print to console on click)
                    </label>
                    {/* autoradio, toggle every second */}
                    <label className="testCase">
                        <input type="radio" checked={this.state.autoradio}/>
                        Controlled radio that toggle every second
                    </label>
                    {/* normal radio */}
                    <fieldset className="radioGroup">
                    <label className="testCase">
                        <input type="radio" checked={this.state.radio==='0'} value="0"
                               onClick={(event) => this.setState({radio: event.target.value})}/>
                        Controlled radio Option 1
                    </label>
                    <label className="testCase">
                        <input type="radio" checked={this.state.radio==='1'} value="1"
                            onClick={(event) => this.setState({radio: event.target.value})}/>
                        Controlled radio Option 2
                    </label>
                    </fieldset>
                </div>
            </div>
        );
    }
}

export default App;
