import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profil from './Component/Profil';
import Personne from './Component/Personne';
import clara from './img/cv.JPG';
import pol from './img/cv.JPG';
import prout from './img/cv.JPG';

class App extends React.Component {

  state={
    profils:[
      {
        prenom: "Clara",
        nom: "Benzak",
        date: "25/09/98",
        img: clara
      },
      {
        prenom: "Pol",
        nom: "Ghaz",
        date: "12/04/98",
        img: pol
      },
      {
        prenom: "Prout",
        nom: "Benzak",
        date: "24/09/90",
        img: prout
      }
    ],

    indice: 1
  };

  render() {
    const tab = this.state.profils

    return(
      <div>
        <header>
          {tab.map((data,index) => {
            return(
              <Personne key={index} data1={data} />
            )
          }
          
          )}
        </header>

        <main>
          <Profil img= {this.state.profils[this.state.indice].img} nom= {this.state.profils[this.state.indice].nom}
          prenom= {this.state.profils[this.state.indice].prenom}
          date= {this.state.profils[this.state.indice].date}/>
        </main>
        
      </div>
    )
  }
}

export default App;
