import {Component} from 'react'
import './index.css'

class ChangeMode extends Component {
    state = {isDarkMode: true, className:"button",text:"Light Mode", container:"light-dark-mode-card-1", heading:"heading"}
    changeMode = () => {
        const {isDarkMode} = this.state 
        if (isDarkMode === true){
            this.setState({isDarkMode: false, className:"button",text:"Light Mode", container:"light-dark-mode-card-1",heading:"heading"})
        }
        else{
            this.setState({isDarkMode: true, className:"button-1",text:"Dark Mode", container:"light-dark-mode-card-2",heading:"heading-1"})
        }
    }
    render() {
        const {className, text, container, heading} = this.state
        return (
            <div className="change-mode-container">
                <div className={container}>
                    <h1 className={heading}>Click to Change Mode</h1>
                    <div>
                        <button className={className} onClick={this.changeMode}>{text}</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChangeMode