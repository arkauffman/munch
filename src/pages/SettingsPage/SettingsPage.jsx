import React, {Component} from 'react';
import SettingsForm from '../../components/SettingsForm/SettingsForm';
import './SettingsPage.css';

class SettingsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {message: ''}
    }

    updateMessage = (msg) => {
        this.setState({message: msg});
    }
    
    render() {
        return (
            <div>
                <SettingsForm
                    {...this.props}
                    handleUpdate={this.props.handleUpdate}
                    updateMessage={this.updateMessage}
                />
                <p>{this.state.message}</p>
            </div>
        );
    }
};
export default SettingsPage;