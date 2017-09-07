import React, {Component} from 'react';
import userService from '../../utils/userService';

class SettingsForm extends Component {
    constructor(props) {
        super(props);
        var user = userService.getUser();
        this.state = {
            name: user.name,
            email: user.email,
            password: '',
            passwordConf: ''
        };
    }

    handleChange = (field, e) => {
        this.props.updateMessage('');
        this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        userService.update(this.state)
        .then(() => {
            this.props.handleUpdate();
            this.props.history.push('/');
        })
        .catch(err => this.props.updateMessage(err.message));
    }


    isFormInvalid() {
        if (this.state.name && this.state.email) {
            if (this.state.password && (this.state.password === this.state.passwordConf)) {
                return false;
            } else if (this.state.password) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    }

    render() {
        console.log('user', userService.getUser())
        let settings = userService.getUser() ? 
        <div className="container">
            <div className="row">
                <div className="row">
                    <div className="input-field col s12">
                        <form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="col s12">
                                    <input type="text" className="form-control" placeholder="Name" value={this.state.name} onChange={(e) => this.handleChange('name', e)} />
                                </div>
                            </div>
                            <div className="row">
                            <div className="col s12">
                                <input type="email" className="form-control" placeholder="Email" value={this.state.email} onChange={(e) => this.handleChange('email', e)} />
                            </div>
                            </div>
                            <div className="row">
                            <div className="col s12">
                                <input type="password" className="form-control" placeholder="Password" value={this.state.password} onChange={(e) => this.handleChange('password', e)} />
                            </div>
                            </div>
                            <div className="row">
                            <div className="col s12">
                                <input type="password" className="form-control" placeholder="Confirm Password" value={this.state.passwordConf} onChange={(e) => this.handleChange('passwordConf', e)} />
                            </div>
                            </div>
                            <div className="row">
                            <div className="col s12">
                                <button className="btn btn-default" disabled={this.isFormInvalid()}>Update</button>&nbsp;&nbsp;
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        :
        <div>
            <span>Sign in</span>
        </div>

        return (
            <div className='NavBar'>
                {settings}
            </div>
        );
    }
};

export default SettingsForm;