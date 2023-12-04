import React from 'react';
import {
    IonApp,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonButtons,
    IonMenuButton,
    IonButton,
} from '@ionic/react';

const SousMenu: React.FC = () => (
<IonToolbar>
    <IonButtons slot="end" style={{opacity : 0.5}}>
      <IonButton routerLink="/general">Général</IonButton>
      <IonButton routerLink="/domicile">Domicile</IonButton>
      <IonButton routerLink="/exterieur">Extérieur</IonButton>
    </IonButtons>
</IonToolbar>
);

export default SousMenu;