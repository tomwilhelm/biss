import React, { useState } from 'react';
import {Item, getGewaessers, getItem} from '../data/gewaesser';
import {
  IonAvatar,
  IonBackButton, IonButton,
  IonButtons, IonCardHeader, IonCardSubtitle, IonCheckbox, IonChip,
  IonContent,
  IonHeader,
  IonIcon, IonImg,
  IonItem, IonItemDivider,
  IonLabel, IonList,
  IonNote,
  IonPage,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react';
import {mapOutline, personCircle} from 'ionicons/icons';
import { RouteComponentProps } from 'react-router';
import './ViewGewaesser.css';
import aesche from "../data/pictures/icons/fische/aesche.png";
import bachforelle from "../data/pictures/icons/fische/bachforelle.png";
import egli from "../data/pictures/icons/fische/egli.png";
import felchen from "../data/pictures/icons/fische/felchen.png";
import hecht from "../data/pictures/icons/fische/hecht.png";
import seeforelle from "../data/pictures/icons/fische/seeforelle.png";

interface ViewMessageProps extends RouteComponentProps<{ id: string; }> { }

const ViewGewaesser: React.FC<ViewMessageProps> = ({ match }) => {

  const [gewaesser, setGewaesser] = useState<Item>();

  useIonViewWillEnter(() => {
    const item = getItem(parseInt(match.params.id, 10));
    setGewaesser(item);
  });

  function getImage(param: any) {
    switch(param) {
      case "Äsche":
        return aesche;
      case "Backforelle":
        return bachforelle;
      case "Egli":
        return egli;
      case "Felchen":
        return felchen;
      case "Hecht":
        return hecht;
      case "Seeforelle":
        return seeforelle;
      default:
        return seeforelle;
    }
  }

  return (
    <IonPage id="view-message-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons>
            <IonBackButton text="Zurück" defaultHref="/home"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {gewaesser ? (
          <>
            <IonItem>
              <IonImg style={{float: "left", height: "20vh", objectFit: "cover"}} alt={gewaesser.name} src={require("../data/pictures/gewaesser/" + gewaesser.name + "/main.jpg")}/>
            </IonItem>

            <div className="ion-padding">
              <IonCardSubtitle>{gewaesser?.ortschaft + ", " + gewaesser?.kanton}</IonCardSubtitle>
              <h1>
                {gewaesser?.name}
                {!gewaesser?.bootmiete ? null : <IonChip color={"secondary"}> Bootmiete </IonChip>}
                {!gewaesser?.campingplatz ? null : <IonChip color={"tertiary"}> Campingplatz </IonChip>}
                {!gewaesser?.teilsohnesana ? null : <IonChip color={"primary"}> z.T. Sana nicht benötigt </IonChip>}
                {!gewaesser?.freiangelrecht ? null : <IonChip color={"warning"}> Freiangelrecht </IonChip>}
                {!gewaesser?.restaurant ? null : <IonChip color={"success"}> Restaurant </IonChip>}
              </h1>
              <h3> Infos </h3>
              <p>
                {gewaesser?.infos}
              </p>
              <IonList>
              {
                gewaesser?.fische.map((fisch, index) =>
                      <IonItem>
                        <IonAvatar slot="start">
                          <IonImg id="fish-icon" src={getImage(fisch)}/>
                        </IonAvatar>
                        <IonLabel>
                          <h3> <b> {fisch} </b> </h3>
                          <p> Schonmass: {gewaesser?.schonmasse[index]} cm </p>
                          <p> Schonzeit: {gewaesser?.schonzeit[index].getDay() + "." + gewaesser?.schonzeit[index].getMonth() + "-" +  gewaesser?.schonzeit[index+1].getDay() + "." + gewaesser?.schonzeit[index+1].getMonth()}</p>
                        </IonLabel>
                      </IonItem>
                )
              }
              </IonList>

              <h3> Patentbezug </h3>
              <p> {gewaesser?.patentbezug} </p>
              <h3> Anreise </h3>
              <p>{gewaesser?.anreise}</p>
              <IonButton style={{width: "100%"}} color="success" onClick={() => {window.open("https://www.google.com/maps/search/?api=1&query=" + gewaesser?.name + "+" + gewaesser?.ortschaft, '_system', 'location=yes')}}> See in Google Maps anzeigen</IonButton>
              <IonButton style={{width: "100%"}} color="primary" onClick={() => {window.open(gewaesser?.schweizerSeeURL, '_system', 'location=yes')}}> {gewaesser?.name} auf Schweizersee.ch anzeigen</IonButton>
            </div>
          </>
        ) : <div> Gewaesser nicht gefunden </div>}
      </IonContent>
    </IonPage>
  );
};

export default ViewGewaesser;
