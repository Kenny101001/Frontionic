import React from 'react';
import { IonApp, IonHeader, IonToolbar, IonTitle, IonPage, IonButtons, IonMenuButton, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import SousMenu from './SousMenu';
import { useData } from './DataContext';

const NavBar: React.FC = () => (

    const { setInformation } = useData();

  const handleButtonClick = (info) => {
    setInformation(info);
  };

  return(
  <IonApp>
    <IonPage>
    <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>FootBall Statistique</IonTitle>
          <IonButtons slot="end">
            <IonButton routerLink="/general">General</IonButton>
            <IonButton routerLink="/attack">Attack</IonButton>
            <IonButton routerLink="/defence">Défence</IonButton>
            <p>|</p>
            <SousMenu />
          </IonButtons>
        </IonToolbar>
     
      </IonHeader>
    </IonPage>
  </IonApp>
  );
);

const SourcePage: React.FC = () => {
    const history = useHistory();
  
    const handleRedirection = (info: string) => {
      history.push(`/general/${info}`);
    };
  
    return (
      <div>
        {/* Ton contenu de la page source */}
        <button onClick={() => handleRedirection('Hello')}>
          Rediriger vers General avec des informations
        </button>
      </div>
    );
  };

export default NavBar;