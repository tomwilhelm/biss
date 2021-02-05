import React, {useEffect, useState} from 'react';
import {
    IonButton, IonContent, IonHeader,
    IonIcon, IonImg,
    IonItem,
    IonLabel,
    IonList,
    IonModal, IonPage, IonSearchbar, IonChip,
    IonSelect,
    IonSelectOption, IonTitle, IonListHeader,
    IonToolbar, IonBadge
} from "@ionic/react";
import {fische, kanton} from "../data/gewaesser";
import {funnelOutline, closeOutline} from "ionicons/icons";
import {Icon} from "ionicons/dist/types/components/icon/icon";
import biss from "../data/pictures/icons/logo.jpeg";
import GewaesserListItem from "./GewaesserListItem";

const SearchFilter: React.FC = () => {

    const [showFilterModal, setShowFilterModal] = useState(false);

    const [isOhneSana, setOhneSana] = useState(true);
    const [isFreiangelrecht, setFreiangelrecht] = useState(true);
    const [hasCampingplatz, setCampingplatz] = useState(true);
    const [hasRestaurant, setRestaurant] = useState(true);
    const [hasBootmiete, setBootmiete] = useState(true);
    const [kantoneSelected, setKantoneSelected] = useState<string[]>([]);
    const kantone = [];

    for (var kantonSingle in kanton) {
        kantone.push(
            <IonChip onClick={() => (kantoneSelected.includes(kantonSingle)) ? setKantoneSelected(kantoneSelected.filter((e) => e != kantonSingle)) : kantoneSelected.push(kantonSingle)} outline={!kantoneSelected.includes(kantonSingle)}>
                <IonLabel> {kantonSingle} </IonLabel>
            </IonChip>
        );
    }

    return (
      <div>
          <IonSearchbar placeholder={"Suche nach Gewässer"} animated>
              <IonButton color={"light"} onClick={() => setShowFilterModal(true)} style={{height: "100%"}}>
                  <IonIcon icon={funnelOutline}/>
              </IonButton>
          </IonSearchbar>

          <IonModal isOpen={showFilterModal}>
            <IonHeader>
                <IonToolbar id="header-background-color">
                    <IonTitle color="light">
                        Gewässer Filterung
                        <IonBadge color="medium">22</IonBadge>
                    </IonTitle>
                </IonToolbar>
            </IonHeader>

          <IonContent>
              <p></p>
              <IonListHeader>
                  Eigenschaften
              </IonListHeader>
              <p></p>
              <div style={{marginLeft: "5%"}}>
                  <IonChip onClick={() => setOhneSana(!isOhneSana)} outline={isOhneSana} color="primary">
                      <IonLabel> z.T. ohne Sana </IonLabel>
                  </IonChip>
                  <IonChip onClick={() => setFreiangelrecht(!isFreiangelrecht)} outline={isFreiangelrecht} color="warning">
                      <IonLabel> Freiangelrecht </IonLabel>
                  </IonChip>
                  <IonChip onClick={() => setCampingplatz(!hasCampingplatz)} outline={hasCampingplatz} color="tertiary">
                      <IonLabel> Campingplatz </IonLabel>
                  </IonChip>
                  <IonChip onClick={() => setRestaurant(!hasRestaurant)} outline={hasRestaurant} color="success">
                      <IonLabel> Restaurant </IonLabel>
                  </IonChip>
                  <IonChip onClick={() => setBootmiete(!hasBootmiete)} outline={hasBootmiete} color="secondary">
                      <IonLabel> Bootmiete </IonLabel>
                  </IonChip>
              </div>

              <IonListHeader>
                  Zielfische
              </IonListHeader>
              <p></p>

              <IonListHeader>
                  Kantone
              </IonListHeader>
              <p></p>
              <div style={{marginLeft: "5%"}}>
                  {kantone}
              </div>

          </IonContent>
          <IonButton onClick={() => setShowFilterModal(false)} style={{marginLeft: "4%", width: "92%", marginBottom: "15px"}}> Schliessen </IonButton>
        </IonModal>
      </div>
  );
};

export default SearchFilter;