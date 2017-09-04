import React, {Component} from 'react';
import SettingsForm from '../../components/SettingsForm/SettingsForm';
import './SettingsPage.css';

class SettingsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {message: ''}
        }
    
    render() {
        return (
            <div className="SettingsPage">
                <SettingsForm
                    {...this.props}
                    handleUpdate={this.props.handleUpdate}
                    updateMessage={this.updateMessage}
                />
            </div>
        );
    }
};
export default SettingsPage;