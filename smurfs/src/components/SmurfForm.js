import React from 'react';
import { connect } from 'react-redux';
import {saveSmurf} from '../actions/index';

class SmurfForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: '',
            height: '',
            error: false
        }
    }

    inputChange = event => {
        if (event.target.name === 'age') {
            let reg = new RegExp('^[0-9]+$');
            if (!reg.test(event.target.value)){
                this.setState({
                   error: !this.state.error, age:''
                })
                console.log("not number")
            } else 
            {this.setState({ 
                
                [event.target.name]: event.target.value
        })}
        }
       else 
        {this.setState({ 
                    [event.target.name]: event.target.value
            })
        } 
    }

    addSmurf = event => {
        event.preventDefault();

        const newSmurf = {
            name: this.state.name,
            age: Number(this.state.age),
            height: this.state.height
        }

        this.props.saveSmurf(newSmurf)
        this.setState({
            name: '',
            age: '',
            height: ''
        })
    }


    render(){
        return (
            <form onSubmit={this.addSmurf}>
                <label>Name</label>
                <input type="text"
                name="name"
                placeholder="Name" 
                onChange={this.inputChange}
                value={this.state.name}/>

                <label>Age</label>
                <input type="text"
                name="age" 
                placeholder="Age" 
                onChange={this.inputChange} 
                value={this.state.age}/>
            

                <label>Height</label>
                <input type="text" 
                name="height" 
                placeholder="height" 
                onChange={this.inputChange} 
                value={this.state.height}/>

                <button type="submit">Add Smurf!</button>
            </form>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        fetchingSmurfs: state.sfetchingSmurfs,
        addingSmurf: state.addingSmurf
    }
}

export default connect(mapStateToProps, {saveSmurf})(SmurfForm);