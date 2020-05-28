import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

class FollowButton extends React.Component
{
    constructor(props) {
        super(props)
        this.state = {
            follow: document.getElementById('follow-button').dataset.follows ? true : false,
            userid: document.getElementById('follow-button').dataset.userid
        }

        this.buttonText = this.buttonText.bind(this)
    }

    
    

    // componentDidMount() {
    //         this.setState({
                
                    
                
    //         })
    // }

    componentWillMount() {
        
    }

    changeState () {

        Axios.post('/follow/' + this.state.userid)
            .then(res => {
                console.log(res.data)
                console.log(this.state.userid)
                console.log(this.state.follow)
                this.setState({
                    follow: !this.state.follow
                })
                })
                .catch(errors => {
                   if (errors.response.status == 401) {
                        window.location = '/login';
                   }

            })
    }

    buttonText() {
        return this.state.follow ? 'Unfollow' : 'Follow';
    }

    
    render() {
        return (
            <div className="container">
                <button onClick={this.changeState.bind(this)} className="btn btn-primary">{this.buttonText()}</button>
            </div>
        )
    }
}

ReactDOM.render(
    <FollowButton />, 
    document.getElementById('follow-button')
)