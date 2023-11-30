import React from 'react';
import { useHistory } from 'react-router-dom';

import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonHeader, IonToolbar, IonTitle, IonApp } from '@ionic/react';
import NavBar from '../Complement/NavBar';
import Tableaux from '../components/Tableaux';

const Accueil: React.FC = () => (
  <IonApp>
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <NavBar />
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <Tableaux/>
      </IonContent>
    </IonPage>
  </IonApp>
);

export default Accueil;