import React, { useState, useEffect } from 'react';
import { IonApp, IonHeader, IonToolbar, IonTitle, IonPage, IonButtons, IonMenuButton, IonButton } from '@ionic/react';
import { useHistory, useParams } from "react-router";
import SousMenu from './SousMenu';
import { createContext, useContext} from 'react';

interface NavBarPropos {
  titre: string;
  page : string;
}

const NavBar: React.FC<NavBarPropos> = ({ titre ,page}) => {

  const history = useHistory();

  const etat = 'information';

  const sendInfo = (info: string , page : string) => {
    history.push('/'+page+'?resultat='+info);
    window.location.reload();
  };

  return(
    <IonApp>
    <IonPage>
    <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>FootBall Statistique { titre} </IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() =>sendInfo("general", page)}>General</IonButton>
            <IonButton onClick={() =>sendInfo("domicile", page)}>Domicile</IonButton>
            <IonButton onClick={() => sendInfo("exterieur", page)}>Extérieur</IonButton>
          </IonButtons>
        </IonToolbar>   
      </IonHeader>
    </IonPage>
  </IonApp>
  );

  
  };




export default NavBar;