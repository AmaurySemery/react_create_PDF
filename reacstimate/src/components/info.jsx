import React from 'react';

// class Info extends Component {
//     render() { 
//         return (
//         <div>
//           <h2>Bienvenue sur votre générateur de devis</h2>
//           <div>
//             Créer un devis ? C'est simple : cliquez sur {" "}
//             <button onClick={this.props.onHandleShowEstimateForm} >nouveau devis</button>
//           </div>
//       </div>
//         );
//     }
// }

// Reçoit des props et ça l'aide à construire du contenu graphique avec stateless functional component (component bête)
// Ce component n'a plus d'état, il a juste des props
// C'est un type de component plus simple

const Info = (props) => {
  return ( 
    <div>
          <h2>Bienvenue sur votre générateur de devis</h2>
          <div>
            Créer un devis ? C'est simple : cliquez sur {" "}
            <button onClick={props.onHandleShowEstimateForm} >nouveau devis</button>
          </div>
      </div>
   );
}
  
export default Info;