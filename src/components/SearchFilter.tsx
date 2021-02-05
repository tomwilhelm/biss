import React, {useState} from 'react';
import {
    IonButton, IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonModal, IonSearchbar,
    IonSelect,
    IonSelectOption, IonTitle,
    IonToolbar
} from "@ionic/react";
import {fische, kanton, techniken} from "../data/gewaesser";
import {funnelOutline} from "ionicons/icons";
import {Icon} from "ionicons/dist/types/components/icon/icon";

const FilterView: React.FC = () => {

    const [showFilterModal, setShowFilterModal] = useState(false);

    const fischArten = [];

    for (var fischArt in fische) {
        fischArten.push(<IonSelectOption value={fischArt}>{fischArt}</IonSelectOption>);
    }

    const kantone = [];

    for (var kantonSingle in kanton) {
        kantone.push(<IonSelectOption value={kantonSingle}>{kantonSingle}</IonSelectOption>);
    }

    const alleTechniken = [];

    for (var technikSingle in techniken) {
        alleTechniken.push(<IonSelectOption value={technikSingle}>{technikSingle}</IonSelectOption>);
    }

  return (
      <div>
          <IonSearchbar placeholder={"Suche nach Gewässer"} animated>
              <IonButton color={"light"} onClick={() => setShowFilterModal(true)} style={{height: "100%"}}>
                  <IonIcon icon={funnelOutline}/>
              </IonButton>
          </IonSearchbar>

          <IonModal isOpen={showFilterModal}>
            <IonToolbar>
                <IonTitle> Gewässer Filterung </IonTitle>
            </IonToolbar>
            <IonList>
              <IonItem>
                  <IonLabel>Fisch Art</IonLabel>
                  <IonSelect multiple={true}>
                      {fischArten}
                  </IonSelect>
              </IonItem>

              <IonItem>
                  <IonLabel>Kanton</IonLabel>
                  <IonSelect multiple={true}>
                      {kantone}
                  </IonSelect>
              </IonItem>

              <IonItem>
                  <IonLabel>Sana</IonLabel>
                  <IonSelect>
                      <IonSelectOption> z.T. ohne Sana </IonSelectOption>
                      <IonSelectOption> Sana notwendig </IonSelectOption>
                  </IonSelect>
              </IonItem>

              <IonItem>
                  <IonLabel>Freiangelrecht</IonLabel>
                  <IonSelect>
                      <IonSelectOption> Ja </IonSelectOption>
                      <IonSelectOption> Nein </IonSelectOption>
                  </IonSelect>
              </IonItem>

              <IonItem>
                  <IonLabel>Campingplatz</IonLabel>
                  <IonSelect>
                      <IonSelectOption> Vorhanden </IonSelectOption>
                      <IonSelectOption> Nicht vorhanden </IonSelectOption>
                  </IonSelect>
              </IonItem>

              <IonItem>
                  <IonLabel>Restaurant</IonLabel>
                  <IonSelect>
                      <IonSelectOption> Vorhanden </IonSelectOption>
                      <IonSelectOption> Nicht vorhanden </IonSelectOption>
                  </IonSelect>
              </IonItem>

              <IonItem>
                  <IonLabel>Bootmiete</IonLabel>
                  <IonSelect>
                      <IonSelectOption> Vorhanden </IonSelectOption>
                      <IonSelectOption> Nicht vorhanden </IonSelectOption>
                  </IonSelect>
              </IonItem>

              <IonItem>
                  <IonLabel>Techniken</IonLabel>
                  <IonSelect multiple={true}>
                      {alleTechniken}
                  </IonSelect>
              </IonItem>

          </IonList>
          <IonButton onClick={() => setShowFilterModal(false)} style={{marginLeft: "4%", width: "92%", marginBottom: "15px"}}> Schliessen </IonButton>
        </IonModal>
      </div>
  );
};

export default FilterView;