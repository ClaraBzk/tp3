import React from 'react';
import './Profil.css';

class Publi extends React.Component {

    constructor(props){
        super(props);
    }


    render(){
        return(
            <div className="profil" style={{backgroundColor: "LightGray"}}>

                <p>{this.props.publication}</p>
                <button>Je like</button>

            </div>
        )

            
        
    }
}

export default Publi;