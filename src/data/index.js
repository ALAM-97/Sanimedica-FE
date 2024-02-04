import rendicontazione from "@/img/icons/rendicontazione.png";
import fatturazione from "@/img/icons/fatturazione.png";
import listaFatture from "@/img/icons/lista-fatture.png";

export const monthsOptions = [
  {
    id: 1,
    title: "Gennaio",
  },
  {
    id: 2,
    title: "Febbraio",
  },
  {
    id: 3,
    title: "Marzo",
  },
  {
    id: 4,
    title: "Aprile",
  },
  {
    id: 5,
    title: "Maggio",
  },
  {
    id: 6,
    title: "Giugno",
  },
  {
    id: 7,
    title: "Luglio",
  },
  {
    id: 8,
    title: "Agosto",
  },
  {
    id: 9,
    title: "Settembre",
  },
  {
    id: 10,
    title: "Ottobre",
  },
  {
    id: 11,
    title: "Novembre",
  },
  {
    id: 12,
    title: "Dicembre",
  },
];

export const yearsOptions = [
  {
    id: 1,
    title: "2024",
  },
  {
    id: 2,
    title: "2025",
  },
  {
    id: 3,
    title: "2026",
  },
];

export const homepageSections = [
  {
    name: "Rendicontazione",
    img: rendicontazione,
    disabled: false,
    path: "/homepage/rendicontazione",
  },
  {
    name: "Fatturazione",
    img: fatturazione,
    disabled: false,
    path: "/homepage/fatturazione",
  },
  {
    name: "Lista Fatture",
    img: listaFatture,
    disabled: true,
    path: "/homepage/lista-fatture",
  },
];
