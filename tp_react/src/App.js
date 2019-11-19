import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profil from './Component/Profil';
import Personne from './Component/Personne';
import Publi from './Component/Publi';
import clara from './img/cv.JPG';
import pol from './img/cv.JPG';
import prout from './img/cv.JPG';

class App extends React.Component {

  state={
    profils:[
      {
        prenom: "Clara",
        nom: "Benzakine",
        date: "25/09/98",
        img: clara,
        publi: "J'adore faire des sushis",
        like : 0
      },
      {
        prenom: "Paul",
        nom: "Ghazal",
        date: "12/04/98",
        img: pol,
        publi: "Je ne sais pas faire de sushis",
        like : 0
      },
      {
        prenom: "Guillaume",
        nom: "Maurin",
        date: "24/09/90",
        img: prout,
        publi: "J'adore les toilettes",
        like : 0
      }
    ],

    indice: 1
  };

  handleClick(i)
  {
    this.setState({indice: i})
  }
  
  handleLike = (e) => {
    
}

  render() {
    const tab = this.state.profils

    return(
      <div>
        <header>
          {tab.map((data,index) => {
            return(
              <Personne key={index} data1={data} onClick={() => this.handleClick(index)} />
            );
          }
          
          )}
        </header>

        <main>
          <Profil img= {this.state.profils[this.state.indice].img} nom= {this.state.profils[this.state.indice].nom}
          prenom= {this.state.profils[this.state.indice].prenom}
          date= {this.state.profils[this.state.indice].date}/>

          <Publi publication= {this.state.profils[this.state.indice].publi} />
        </main>
        
      </div>
    )
  }
}

export default App;
