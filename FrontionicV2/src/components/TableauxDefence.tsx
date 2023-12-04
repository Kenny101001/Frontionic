import React, {useState,useEffect} from 'react';
import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonHeader, IonToolbar, IonTitle, IonApp,IonCard } from '@ionic/react';

interface TableauxDefenceProps {
  stat: any;
}

const TableauxDefence: React.FC<TableauxDefenceProps> = ({ stat }) => {


  const [apiData, setApiData] = useState<any>(null);

  useEffect(() => {
    // Appel de l'API PHP
    fetch('http://localhost/backIonic/foot/index.php/'+ stat)
  .then(response => response.text())
  .then(data => {
    const startIndex = data.indexOf('{');
    const endIndex = data.lastIndexOf('}');
    const jsonData = data.substring(startIndex, endIndex + 1);
    const parsedData = JSON.parse(jsonData);
    setApiData(parsedData);
  })
  .catch(error => console.error('Erreur lors de la récupération des données depuis l\'API', error)); }, []);

    return (
      <>
<IonGrid>
        <IonRow className="ion-text-center">
            <IonCol size="12" size-md="1">
            <strong>Équipe</strong>
            </IonCol>
            <IonCol size="12" size-md="1">
            <strong>Compétition</strong>
            </IonCol>
            <IonCol size="12" size-md="1">
            <strong>Tirs pm</strong>
            </IonCol>
            <IonCol size="12" size-md="1">
            <strong>Tacles pm</strong>
            </IonCol>
            <IonCol size="12" size-md="1">
            <strong>Interceptions pm</strong>
            </IonCol>
            <IonCol size="12" size-md="1">
            <strong>Fautes pm</strong>
            </IonCol>
            <IonCol size="12" size-md="1">
            <strong>Hors-jeux pm</strong>
            </IonCol>
            <IonCol size="12" size-md="1">
            <strong>Note</strong>
            </IonCol>
          </IonRow>


          { apiData && apiData.data && apiData.data.map((item: any, index: number) => (     
  <div key={index}>
    <IonRow className="ion-text-center">
      <IonCol size="12" size-md="1">
        {item.equipe}
      </IonCol> 
      <IonCol size="12" size-md="1">
        {item.idLigue}
      </IonCol>
      <IonCol size="12" size-md="1">
        {item.tirMatch}
      </IonCol>
      <IonCol size="12" size-md="1">
        {item.tacleMatch}
      </IonCol>
      <IonCol size="12" size-md="1">
        {item.interceptionMatch}
      </IonCol>
      <IonCol size="12" size-md="1">
        {item.fauteMatch}
      </IonCol>
      <IonCol size="12" size-md="1">
        {item.horsJeuxMatch}
      </IonCol>
      <IonCol size="12" size-md="1">
        {item.note}
      </IonCol>
    </IonRow>
  </div>

))}
        
        </IonGrid> 
        </>
    );
};
export default TableauxDefence;
