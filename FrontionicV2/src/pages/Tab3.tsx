import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import Tableaux from '../components/Tableaux';
import NavBar from '../components/NavBar';
import TableauxAttaque from '../components/TableauxAttaque';

const Tab3: React.FC = () => {

  let statResult = 'Attaque_General';

  const searchParams = new URLSearchParams(window.location.search);
  const etattype = searchParams.get('resultat');

    if ( etattype == 'general' ) {
      statResult = "Attaque_General";
        
    } else if( etattype == 'domicile' ) {
      statResult = "Attaque_Domicile";
        
    } else if(etattype == 'exterieur' ){
      statResult = "Attaque_Exterieur";
    }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <NavBar titre='(Attaque)' page='tab3'/>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <TableauxAttaque stat={statResult} />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
