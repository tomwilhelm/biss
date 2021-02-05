import GewaesserListItem from '../components/GewaesserListItem';
import SearchFilter from '../components/SearchFilter';
import React, { useState } from 'react';
import { Item, getGewaessers } from '../data/gewaesser';
import {
  IonButton,
  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonChip,
  IonContent,
  IonHeader, IonIcon, IonImg, IonItem, IonLabel,
  IonList, IonModal,
  IonPage,
  IonRefresher,
  IonRefresherContent, IonSearchbar, IonSelect, IonSelectOption,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react';
import './Home.css';
import biss from "../data/pictures/icons/logo.jpeg"

const Home: React.FC = () => {

  const [gewaesser, setGewaesser] = useState<Item[]>([]);

  useIonViewWillEnter(() => {
    const gewaesser = getGewaessers();
    setGewaesser(gewaesser);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

    return (
        <IonPage id="home-page">
          <IonHeader>
            <IonToolbar id="header-background-color">
              <IonImg id="center-logo-image" src={biss}/>
            </IonToolbar>
            <SearchFilter/>
          </IonHeader>
          <IonContent fullscreen>
            <IonList>
              <IonItem>
                {gewaesser.map(g => <GewaesserListItem key={g.id} gewaesser={g}/>)}
              </IonItem>
            </IonList>
          </IonContent>
        </IonPage>
    );
};

export default Home;
