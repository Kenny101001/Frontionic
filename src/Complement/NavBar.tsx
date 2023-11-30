import React, { useState, useEffect } from 'react';
import { IonApp, IonHeader, IonToolbar, IonTitle, IonPage, IonButtons, IonMenuButton, IonButton } from '@ionic/react';
import { useHistory, useParams } from "react-router";
import SousMenu from './SousMenu';
import { createContext, useContext} from 'react';

const NavBar: React.FC = () => {

  const history = useHistory();

  const etat = 'information';

  const sendInfo = (info: string) => {
    history.push('/'+info+'/'+info);
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
            <IonButton onClick={() =>sendInfo('general')}>General</IonButton>
            <IonButton onClick={() =>sendInfo("attack")}>Attack</IonButton>
            <IonButton onClick={() => sendInfo('defence')}>Défence</IonButton>
            <p>|</p>
            <SousMenu />
          </IonButtons>
        </IonToolbar>
     
      </IonHeader>
    </IonPage>
  </IonApp>
  );

  
  };




export default NavBar;