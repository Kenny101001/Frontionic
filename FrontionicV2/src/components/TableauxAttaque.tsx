import React, {useState,useEffect} from 'react';
import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonHeader, IonToolbar, IonTitle, IonApp,IonCard } from '@ionic/react';

interface TableauxAttaqueProps {
  stat: any;
}

const TableauxAttaque: React.FC<TableauxAttaqueProps> = ({ stat }) => {

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
            <strong>Tirs CA pm</strong>
            </IonCol>
            <IonCol size="12" size-md="1">
            <strong>Dribbles pm</strong>
            </IonCol>
            <IonCol size="12" size-md="1">
            <strong>Fautes subies pm</strong>
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
        {item.tirCadreMatch}
      </IonCol>
      <IonCol size="12" size-md="1">
        {item.dribbleMatch}
      </IonCol>
      <IonCol size="12" size-md="1">
        {item.fauteSubieMatch}
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
export default TableauxAttaque;
