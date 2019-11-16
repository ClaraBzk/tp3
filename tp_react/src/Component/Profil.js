import React from 'react';
import './Profil.css';

class Profil extends React.Component {

    constructor(props){
        super(props);
    }

    state= {
        colorbg: "red"
    };

    handleClick = (e) => {
        if (this.state.colorbg==="red"){
            this.setState({colorbg: "blue"})
            console.log(this.state.colorbg)
        }else{
            this.setState({colorbg: "red"})
        }
    }

    render(){
        return(
            <div className="profil" style={{backgroundColor: this.state.colorbg}}>

                <img style={{width: "150px", borderRadius: "50%"}}  src={this.props.img} alt="cv"/>
                 <p>
                     {this.props.nom} {this.props.prenom}
                 </p>

                 <p>
                 {this.props.date}
                 </p>

                 <button style={{marginRight: "10px"}} onClick={this.handleClick} > YES </button>

            </div>
        )

            
        
    }
}

export default Profil;
