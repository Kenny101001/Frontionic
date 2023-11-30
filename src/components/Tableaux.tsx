import React from 'react';
import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonHeader, IonToolbar, IonTitle, IonApp, } from '@ionic/react';

const Tableaux: React.FC = () => {
    return (
<IonGrid>
        <IonRow className="ion-text-center">
            <IonCol size="12" size-md="1">
            <strong>Équipe</strong>
            </IonCol>
            <IonCol size="12" size-md="1">
            <strong>Compétition</strong>
            </IonCol>
            <IonCol size="12" size-md="1">
            <strong>Buts</strong>
            </IonCol>
            <IonCol size="12" size-md="1">
            <strong>Tirs pm</strong>
            </IonCol>
            <IonCol size="12" size-md="1">
            <strong>Discipline</strong>
            </IonCol>
            <IonCol size="12" size-md="1">
            <strong>Possession %</strong>
            </IonCol>
            <IonCol size="12" size-md="1">
            <strong>Passe réussies %</strong>
            </IonCol>
            <IonCol size="12" size-md="1">
            <strong>Aérien gagnés</strong>
            </IonCol>
            <IonCol size="12" size-md="1">
            <strong>Note</strong>
            </IonCol>
          </IonRow>
          {/* En-tête du tableau */}
          <IonRow className="ion-text-center">
          <IonCol size="12" size-md="1">
          Contenu 1
        </IonCol>
        <IonCol size="12" size-md="1">
          Contenu 2
        </IonCol>
        <IonCol size="12" size-md="1">
          Contenu 3
        </IonCol>
        <IonCol size="12" size-md="1">
          Contenu 4
        </IonCol>
        <IonCol size="12" size-md="1">
          Contenu 5
        </IonCol>
        <IonCol size="12" size-md="1">
          Contenu 6
        </IonCol>
        <IonCol size="12" size-md="1">
          Contenu 7
        </IonCol>
        <IonCol size="12" size-md="1">
          Contenu 8
        </IonCol>
        <IonCol size="12" size-md="1">
          Contenu 9
        </IonCol>
          </IonRow>
        </IonGrid>
    );
};
export default Tableaux;
