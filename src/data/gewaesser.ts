export interface Item {
  name: string;
  ortschaft: string;
  kanton: kanton;
  fische: fische[];
  schonmasse: number[];
  schonzeit: Date[];
  campingplatz: boolean;
  freiangelrecht: boolean;
  teilsohnesana: boolean;
  patentbezug: string;
  restaurant: boolean;
  bootmiete: boolean;
  anreise: string;
  infos: string;
  schweizerSeeURL: string;
  id: number;
}

export enum kanton {
  aargau = "Aargau",
  appenzellAus = "Appenzell Ausserrhoden",
  appenzellIn = "Appenzell Innerrhoden",
  baselLand = "Basel Land",
  baselStadt = "Basel Stadt",
  bern = "Bern",
  fribourg = "Freiburg",
  genf = "Genf",
  glarus = "Glarus",
  graubünden = "Graubünden",
  jura = "Jura",
  luzern = "Luzern",
  neuchatel = "Neuchâtel",
  nidwalden = "Nidwalden",
  obwalden = "Obwalden",
  stGallen = "St. Gallen",
  schaffhausen = "Schaffhausen",
  schwyz = "Schwyz",
  solothurn = "Solothurn",
  thurgau = "Thurgau",
  tessin = "Tessin",
  uri = "Uri",
  vaud = "Vaud",
  wallis = "Wallis",
  zug = "Zug",
  zurich = "Zürich"
}

export enum fische {
  aesche = "Äsche",
  bachforelle = "Bachforelle",
  egli = "Egli",
  felchen = "Felchen",
  hecht = "Hecht",
  seeforelle = "Seeforelle",
  karpfen = "Karpfen",
  laube = "Laube",
  namaycush = "Namaycush",
  regenbogenForelle = "Regenbogenforelle",
  wels = "Wels",
  Zander = "Zander",
  aal = "Aal",
  alet = "Alet",
  bachsaibling = "Bachsaibling",
  barbe = "Barbe",
  bartgrundel = "Bartgrundel",
  blicke = "Blicke",
  brachsmen = "Brachsmen",
  elritze = "Elritze",
  flussBarsch = "Flussbarsch",
  forellenBarsch = "Forellenbarsch",
  groppe = "Groppe",
  gruendling = "Gründling",
  hasel = "Hasel",
  kaulBarsch = "Kaulbarsch",
  rapfen = "Rapfen",
  rotAuge = "Rotauge",
  rotFeder = "Rotfeder",
  schleie = "Schleie",
  schneider = "Schneider",
  seeSaibling = "Seesaibling",
  sonnenBarsch = "Sonnenbarsch",
  truesche = "Trüsche",
  zwergWels = "Zwergwels"
}

const gewaesser: Item[] = [
  {
    name: "Obersee",
    ortschaft: "Näfels",
    kanton: kanton.glarus,
    fische: [fische.seeforelle, fische.egli, fische.hecht],
    schonmasse: [22, 18, 45],
    schonzeit: [new Date("1/1/2020"), new Date("4/1/2020"), new Date("3/20/2020"), new Date("5/20/2020"), new Date("8/1/2020"), new Date("9/1/2020")],
    campingplatz: false,
    freiangelrecht: false,
    teilsohnesana: true,
    patentbezug: "Kann beim Restaurant Aeschen bezogen werden. Für Tages und Wochenkarten wird kein Sana Kurs benötigt",
    restaurant: true,
    bootmiete: false,
    anreise: "Die Anreise mit dem Auto ist empfohlen.",
    infos: "Der Bergsee im Glarus eignet sich hervorragend zum Fischen. Man profitiert von den lockeren Fischereigesetzen des Kanton Glarus.",
    schweizerSeeURL: "https://www.schweizersee.ch/obersee_glarus/",
    id: 0
  }
];

export const getGewaessers = () => gewaesser;

export const getItem = (id: number) => gewaesser.find(i => i.id === id);
