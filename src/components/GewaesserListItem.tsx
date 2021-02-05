import React from 'react';
import {
  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonChip, IonContent, IonImg,
  IonItem,
  IonLabel,
  IonNote
} from '@ionic/react';
import { Item } from '../data/gewaesser';
import './GewaesserListItem.css';

interface MessageListItemProps {
  gewaesser: Item;
}

const GewaesserListItem: React.FC<MessageListItemProps> = ({ gewaesser }) => {
  return (
    <IonItem routerLink={`/gewaesser/${gewaesser.id}`} detail={false}>
      <IonCard>
        <IonImg style={{float: "left", height: "20vh", objectFit: "cover"}} alt={gewaesser.name} src={require("../data/pictures/gewaesser/" + gewaesser.name + "/main.jpg")}/>
        <p></p>
        <IonCardHeader>
          <IonCardSubtitle>{gewaesser.ortschaft + ", " + gewaesser.kanton}</IonCardSubtitle>
          <IonCardTitle>{gewaesser.name}</IonCardTitle>
          {!gewaesser.bootmiete ? null : <IonChip color={"secondary"}> Bootmiete </IonChip>}
          {!gewaesser.campingplatz ? null : <IonChip color={"tertiary"}> Campingplatz </IonChip>}
          {!gewaesser.teilsohnesana ? null : <IonChip color={"primary"}> z.T. Sana ohne Sana </IonChip>}
          {!gewaesser.freiangelrecht ? null : <IonChip color={"warning"}> Freiangelrecht </IonChip>}
          {!gewaesser.restaurant ? null : <IonChip color={"success"}> Restaurant </IonChip>}
        </IonCardHeader>
        <IonCardContent>
          {gewaesser.infos}
        </IonCardContent>
      </IonCard>
      {/*<IonLabel className="ion-text-wrap">
        <h2>
          {gewaesser.name}
          <span className="date">
            <IonNote>{gewaesser.patentbezug}</IonNote>
          </span>
        </h2>
        <h3>{gewaesser.anreise}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </IonLabel>*/}
    </IonItem>

  );
};

export default GewaesserListItem;
