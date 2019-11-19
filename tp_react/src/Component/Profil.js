import React from 'react';
import './Profil.css';

class Profil extends React.Component {

    constructor(props){
        super(props);
    }

    state= {
        colorbg: "violet"
    };

    handleClick = (e) => {
        if (this.state.colorbg==="violet"){
            this.setState({colorbg: "dodgerblue"})
            console.log(this.state.colorbg)
        }else{
            this.setState({colorbg: "violet"})
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

                 <button style={{marginRight: "10px"}} onClick={this.handleClick} > Change </button>

            </div>
        )

            
        
    }
}

export default Profil;
