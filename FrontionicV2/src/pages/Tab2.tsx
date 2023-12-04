import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import Tableaux from '../components/Tableaux';
import NavBar from '../components/NavBar';
import TableauxDefence from '../components/TableauxDefence';

const Tab2: React.FC = () => {

  let statResult = 'Defense_General';

  const searchParams = new URLSearchParams(window.location.search);
  const etattype = searchParams.get('resultat');

    if ( etattype == 'general' ) {
      statResult = "Defense_General";
        
    } else if( etattype == 'domicile' ) {
      statResult = "Defense_Domicile";
        
    } else if(etattype == 'exterieur' ){
      statResult = "Defense_Exterieur";
    }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <NavBar titre='(Defence)' page='tab2'/>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <TableauxDefence stat={statResult} />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
