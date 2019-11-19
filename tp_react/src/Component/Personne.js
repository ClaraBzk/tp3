import React from 'react';
import './Personne.css';

class Personne extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="button">

            <button  onClick={this.props.onClick} >{this.props.data1.prenom}</button>

            </div>
        )
    }
}

export default Personne;
