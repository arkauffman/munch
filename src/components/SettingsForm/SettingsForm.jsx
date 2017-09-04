import React, {Component} from 'react';
import userService from '../../utils/userService';

class SettingsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: userService.getUser().name,
            email: userService.getUser().email
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        userService.update(this.state)
        .then(() => {
            this.props.handleUpdate();
            this.props.history.push('/');
        })
        .catch(err => alert('Error'));
    }

    handleChange = (field, e) => {
        this.setState({
            [field]: e.target.value
        });
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
                                <input type="email" className="form-control" placeholder="Email" value={userService.getUser().email} onChange={(e) => this.handleChange('email', e)} />
                            </div>
                            </div>
                            <div className="row">
                            <div className="col s12">
                                <input type="password" className="form-control" placeholder="Password" onChange={(e) => this.handleChange('password', e)} />
                            </div>
                            </div>
                            <div className="row">
                            <div className="col s12">
                                <input type="password" className="form-control" placeholder="Confirm Password" onChange={(e) => this.handleChange('passwordConf', e)} />
                            </div>
                            </div>
                            <div className="row">
                            <div className="col s12">
                                <button className="btn btn-default">Update</button>&nbsp;&nbsp;
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