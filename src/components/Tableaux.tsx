import React, {useState,useEffect} from 'react';
import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonHeader, IonToolbar, IonTitle, IonApp,IonCard } from '@ionic/react';
import axios from 'axios';


const Tableaux: React.FC = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/data');
        setData(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    };

    fetchData();
  }, []);


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

        {data.map(item => (
        <IonCard key={item}>

          <IonRow className="ion-text-center">
          <IonCol size="12" size-md="1">
          { (item as any).name }
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
        </IonCard>
          ))}

        </IonGrid> 
    );
};
export default Tableaux;
