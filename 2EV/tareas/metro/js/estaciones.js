import { lineas as Lineas} from  './lineas.js';
export { Estaciones as estaciones };
export var Estaciones = [{
        "nombre": "PuebloNuevo",
        "lineas": [Lineas[2]]
    },
    {
        "nombre": "Alonso Martinez",
        "lineas": [Lineas[1], Lineas[2]]
    },
    {
        "nombre": "Goya",
        "lineas": [Lineas[2]]
    },
    {
        "nombre": "Lista",
        "lineas": [Lineas[0], Lineas[2]]
    },
    {
        "nombre": "Complutense",
        "lineas": [Lineas[2]]
    },
    {
        "nombre": "Manoteras",
        "lineas": [Lineas[0], Lineas[1]]
    },
    {
        "nombre": "Universidad",
        "lineas": [Lineas[1]]
    },
    {
        "nombre": "Charmartin",
        "lineas": [Lineas[0], Lineas[1]]
    },
    {
        "nombre": "Lago",
        "lineas": [Lineas[1]]
    },
    {
        "nombre": "Quintana",
        "lineas": [Lineas[0]]
    },
    {
        "nombre": "Parque Santa Maria",
        "lineas": [Lineas[0]]
    },
    {
        "nombre": "Pinto",
        "lineas": [Lineas[0]]
    },
];

    /*{ "nombre": "Betera",
     "lineas": [Lineas[0]]
     },
     {
      "nombre": "Hospital psiquiatrico",
      "lineas": [Lineas[0]]
     },
     {
         "nombre": "Masies",
         "lineas": [Lineas[0]]
     },
     {
         "nombre": "Seminario-CEU",
         "lineas": [Lineas[0]]
     },
     {
         "nombre": "Moncada-Alfara",
         "lineas": [Lineas[0]]
     },
     {
         "nombre": "Massarrojos",
         "lineas": [Lineas[0]]
     },
     {
         "nombre": "Rocafort",
         "lineas": [Lineas[0]]
     },
     {
         "nombre": "Godella",
         "lineas": [Lineas[0]]
     },
     {
         "nombre": "Burjassot-Godella",
         "lineas": [Lineas[0]]
     },
     {
         "nombre": "Burjassot",
         "lineas": [Lineas[0]]
     },
     {
         "nombre": "Empalme",
         "lineas": [Lineas[0], Lineas[3], Lineas[1]]
     },
     {
         "nombre": "Palacio de congresos",
         "lineas": [Lineas[3]]
     },
     {
         "nombre": "Beniferri",
         "lineas": [Lineas[0],Lineas[1]]
     },
     {
         "nombre": "Campanar",
         "lineas": [Lineas[0],Lineas[1]]
     },
     {
         "nombre": "Turia",
         "lineas": [Lineas[0],Lineas[1]]
     },
     {
         "nombre": "A. Guimera",
         "lineas": [Lineas[0], Lineas[1], Lineas[2], Lineas[4], Lineas[8]]
     },
     {
         "nombre": "Plaza España",
         "lineas": [Lineas[0],Lineas[1]]
     },
     {
         "nombre": "Joaquin Sorolla-Jesus",
         "lineas": [Lineas[0], Lineas[1], Lineas[6]]
     },
     {
         "nombre": "Patraix",
         "lineas": [Lineas[0], Lineas[1], Lineas[6]]
     },
     {
         "nombre": "Safranar",
         "lineas": [Lineas[0], Lineas[1], Lineas[6]]
     },
     {
         "nombre": "Sant Isidre",
         "lineas": [Lineas[0], Lineas[1], Lineas[6]]
     },
     {
         "nombre": "Valencia sur",
         "lineas": [Lineas[0], Lineas[1], Lineas[6]]
     },
     {
         "nombre": "Paiporta",
         "lineas": [Lineas[0], Lineas[1], Lineas[6]]
     },
     {
         "nombre": "Picanya",
         "lineas": [Lineas[0], Lineas[1], Lineas[6]]
     },
     {
         "nombre": "Torrent",
         "lineas": [Lineas[0], Lineas[1], Lineas[6]]
     },
     {
         "nombre": "Colegio el Vedat",
         "lineas": [Lineas[0]]
     },
     {
         "nombre": "Realon",
         "lineas": [Lineas[0]]
     },
     {
         "nombre": "Sant Ramon",
         "lineas": [Lineas[0]]
     },
     {
         "nombre": "Picassent",
         "lineas": [Lineas[0]]
     },
     {
         "nombre": "Omet",
         "lineas": [Lineas[0]]
     },
     {
         "nombre": "Espioca",
         "lineas": [Lineas[0]]
     },
     {
         "nombre": "Fuente Almaguer",
         "lineas": [Lineas[0]]
     },
     {
         "nombre": "Alginet",
         "lineas": [Lineas[0]]
     },
     {
         "nombre": "Ausias March",
         "lineas": [Lineas[0]]
     },
     {
         "nombre": "Carlet",
         "lineas": [Lineas[0]]
     },
     {
         "nombre": "Benimodo",
         "lineas": [Lineas[0]]
     },
     {
         "nombre": "La Alcudia",
         "lineas": [Lineas[0]]
     },
     {
         "nombre": "Montoral",
         "lineas": [Lineas[0]]
     },
     {
         "nombre": "Massalves",
         "lineas": [Lineas[0]]
     },
     {
         "nombre": "Alberic",
         "lineas": [Lineas[0]]
     },
     {
         "nombre": "Villanueva de Castellon",
         "lineas": [Lineas[0]]
     },
     {
         "nombre": "Torrent Avinguda",
         "lineas": [Lineas[1], Lineas[6]]
     },
     {
         "nombre": "Bailen",
         "lineas": [Lineas[6]]
     },
     {
         "nombre": "Alameda",
         "lineas": [Lineas[2], Lineas[4], Lineas[6], Lineas[8]]
     },
     {
         "nombre": "Aragon",
         "lineas": [ Lineas[4], Lineas[6]]
     },
     {
         "nombre": "Amistad-Casa de Salud",
         "lineas": [ Lineas[4], Lineas[6]]
     },
     {
         "nombre": "Ayora",
         "lineas": [ Lineas[4], Lineas[6]]
     },
     {
         "nombre": "Maritim-Serreria",
         "lineas": [ Lineas[4], Lineas[5], Lineas[6], Lineas[7]]
     },
     {
         "nombre": "Campamento",
         "lineas": []
     },
     {
         "nombre": "Paterna",
         "lineas": []
     },
     {
         "nombre": "Santa Rita",
         "lineas": []
     },
     {
         "nombre": "Fuente del Jarro",
         "lineas": []
     },
     {
         "nombre": "La Canyada",
         "lineas": []
     },
     {
         "nombre": "La Vallesa",
         "lineas": []
     },
     {
         "nombre": "Entrepins",
         "lineas": []
     },
     {
         "nombre": "El Clot",
         "lineas": []
     },
     {
         "nombre": "Montesol",
         "lineas": []
     },
     {
         "nombre": "La Eliana",
         "lineas": []
     },
     {
         "nombre": "Torre del Virrey",
         "lineas": []
     },
     {
         "nombre": "La pobla del Valbona",
         "lineas": []
     },
     {
         "nombre": "Benaguasil 1r",
         "lineas": []
     },
     {
         "nombre": "Benaguasil 2n",
         "lineas": []
     },
     {
         "nombre": "Lliria",
         "lineas": []
     },
     {
         "nombre": "Mar del Rosari",
         "lineas": []
     },
     {
         "nombre": "La Coma",
         "lineas": []
     },
     {
         "nombre": "Tomas y Valiente",
         "lineas": []
     },
     {
         "nombre": "Santa Gema Parque Cientifico UV",
         "lineas": []
     },
     {
         "nombre": "TVV",
         "lineas": []
     },
     {
         "nombre": "V.A. Estelles",
         "lineas": []
     },
     {
         "nombre": "Campus",
         "lineas": []
     },
     {
         "nombre": "Sant Joan",
         "lineas": []
     },
     {
         "nombre": "La Granja",
         "lineas": []
     },
     {
         "nombre": "Florista",
         "lineas": []
     },
     {
         "nombre": "Garbi",
         "lineas": []
     },
     {
         "nombre": "Benicalap",
         "lineas": []
     },
     {
         "nombre": "Transits",
         "lineas": []
     },
     {
         "nombre": "Marxalenes",
         "lineas": []
     },
     {
         "nombre": "Reus",
         "lineas": []
     },
     {
         "nombre": "Sagunt",
         "lineas": []
     },
     {
         "nombre": "Pont de Fusta",
         "lineas": []
     },
     {
         "nombre": "Primat Reig",
         "lineas": []
     },
     {
         "nombre": "Benimaclet",
         "lineas": []
     },
     {
         "nombre": "V. Zaragoza",
         "lineas": []
     },
     {
         "nombre": "Universidad Politecnica",
         "lineas": []
     },
     {
         "nombre": "La Carrasca",
         "lineas": []
     },
     {
         "nombre": "Torongers",
         "lineas": []
     },
     {
         "nombre": "Serreria",
         "lineas": []
     },
     {
         "nombre": "La Cadena",
         "lineas": []
     },
     {
         "nombre": "Eugenia Viñes",
         "lineas": []
     },
     {
         "nombre": "Les Arenes",
         "lineas": []
     },
     {
         "nombre": "Mediterraneo",
         "lineas": []
     },
     {
         "nombre": "Grau-Canyamelar",
         "lineas": []
     },
     {
         "nombre": "Francesc Cubells",
         "lineas": []
     },
     {
         "nombre": "Aereopuerto",
         "lineas": []
     },
     {
         "nombre": "Rosas",
         "lineas": []
     },
     {
         "nombre": "Manises",
         "lineas": []
     },
     {
         "nombre": "Salto del agua",
         "lineas": []
     },
     {
         "nombre": "Quart de Poblet",
         "lineas": []
     },
     {
         "nombre": "Faitanar",
         "lineas": []
     },{
         "nombre": "Mislata-Almassil",
         "lineas": []
     },
     {
         "nombre": "Mislata",
         "lineas": []
     },
     {
         "nombre": "9 de Octubre",
         "lineas": []
     },
     {
         "nombre": "Avenida del Cid",
         "lineas": []
     },
     {
         "nombre": "Xativa",
         "lineas": []
     },
     {
         "nombre": "Facultades",
         "lineas": []
     },
     {
         "nombre": "Colon",
         "lineas": [ Lineas[2], Lineas[4], Lineas[6], Lineas[8]]
     },
     {
         "nombre": "Machado",
         "lineas": []
     },
     {
         "nombre": "Alboraya-Peris Arago",
         "lineas": []
     },
     {
         "nombre": "Almassera",
         "lineas": []
     },
     {
         "nombre": "Meliana",
         "lineas": []
     },{
         "nombre": "Foios",
         "lineas": []
     },
     {
         "nombre": "Albalat dels Sorells",
         "lineas": []
     },
     {
         "nombre": "Museros",
         "lineas": []
     },
     {
         "nombre": "Massamagrell",
         "lineas": []
     },
     {
         "nombre": "La Pobla de Farnals",
         "lineas": []
     },
     {
         "nombre": "Rafelbunyol",
         "lineas": []
     },
     {
         "nombre": "Marina Reial Joan Carles I",
         "lineas": []
     },
     {
         "nombre": "La Cova",
         "lineas": []
     },
     {
         "nombre": "La Presa",
         "lineas": []
     },
     {
         "nombre": "Masia de Traver",
         "lineas": []
     },
     {
         "nombre": "Riba-roja de Turia",
         "lineas": []
     } */
