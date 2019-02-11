import React from 'react';
import { connect } from 'react-redux';
import {fetchSmurfs} from '../actions/index';


class Smurfs extends React.Component {

    componentDidMount(e){
        this.props.fetchSmurfs()
    }

    render() {
        if (!this.props.smurfs || !this.props.smurfs.length) {
            return <h1>No Smurfs around today... :/</h1>
        }
        return (
            <div>
                {this.props.smurfs.map(smurf => (
                    <ul key={smurf.name}>
                        Name:{smurf.name},
                        Age: {smurf.age},
                        Height:{smurf.height}
                    </ul>
                ))}
            </div>
        )
    }
    
}

const mapStateToProps = state => {
    console.log(state)
    return {
        smurfs: state.smurfs,
        fetchingSmurfs: state.fetchingSmurfs,
        addingSmurf: state.addingSmurf
    }
}

export default connect(mapStateToProps, {fetchSmurfs})(Smurfs);