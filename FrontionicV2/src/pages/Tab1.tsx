import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import Tableaux from '../components/Tableaux';
import NavBar from '../components/NavBar';
import ReactDOM from 'react-dom';

const Tab1: React.FC = () => {


  const { etat }: { etat?: string } = useParams();

  let statResult = 'General_General';

  const searchParams = new URLSearchParams(window.location.search);
  const etattype = searchParams.get('resultat');

    if ( etattype == 'general' ) {
      statResult = "General_General";
        
    } else if( etattype == 'domicile' ) {
      statResult = "General_Domicil";
        
    } else if(etattype == 'exterieur' ){
      statResult = "General_Exterieur";
    }

  return (
    
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <NavBar titre='(General)' page="tab1" />
       
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
       <Tableaux stat={statResult} />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
