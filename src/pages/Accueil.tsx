import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonHeader, IonToolbar, IonTitle, IonApp } from '@ionic/react';
import NavBar from '../Complement/NavBar';
import Tableaux from '../components/Tableaux';

const Accueil: React.FC = () => {

    const { etat }: { etat?: string } = useParams();

    const renderContent = () => {
        if ( etat != null && etat === 'general' ) {
          // Affiche cela si la condition est vraie
          return <div>Contenu lorsque la condition est general</div>;
        } else if(etat != null && etat === 'attack' ) {
          // Affiche cela si la condition est fausse
          return <div>Contenu lorsque la condition est attack</div>;
        } else if(etat != null && etat === 'defence' ){
            return <div>Contenu lorsque la condition est defence</div>;
        }
      };

return(
  <IonApp>
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <NavBar />
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {renderContent()}
        <Tableaux/>
      </IonContent>
    </IonPage>
  </IonApp>
)
};

export default Accueil;