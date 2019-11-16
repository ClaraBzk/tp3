import React from 'react';

class Personne extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <button>{this.props.data1.prenom}</button>
        )
    }
}

export default Personne;
