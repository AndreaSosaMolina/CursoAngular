export interface PaisSmall {
    name:       Name;
    cca3:       string;
   
}

// export interface Pais {
//     name:           string;
//     topLevelDomain: string[];
//     alpha2Code:     string;
//     alpha3Code:     string;
//     callingCodes:   string[];
//     capital:        string;
//     altSpellings:   string[];
//     subregion:      string;
//     region:         string;
//     population:     number;
//     latlng:         number[];
//     demonym:        string;
//     area:           number;
//     gini:           number;
//     timezones:      string[];
//     borders:        string[];
//     nativeName:     string;
//     numericCode:    string;
//     flags:          Flags;
//     currencies:     Currency[];
//     languages:      Language[];
//     translations:   Translations;
//     flag:           string;
//     regionalBlocs:  RegionalBloc[];
//     cioc:           string;
//     independent:    boolean;
// }

// export interface Currency {
//     code:   string;
//     name:   string;
//     symbol: string;
// }

// export interface Flags {
//     svg: string;
//     png: string;
// }

// export interface Language {
//     iso639_1:   string;
//     iso639_2:   string;
//     name:       string;
//     nativeName: string;
// }

// export interface RegionalBloc {
//     acronym:        string;
//     name:           string;
//     otherNames:     string[];
//     otherAcronyms?: string[];
// }

// export interface Translations {
//     br: string;
//     pt: string;
//     nl: string;
//     hr: string;
//     fa: string;
//     de: string;
//     es: string;
//     fr: string;
//     ja: string;
//     it: string;
//     hu: string;
// }

export interface Pais {
    name:         Name;
    tld?:         string[];
    cca2:         string;
    ccn3?:        string;
    cca3:         string;
    cioc?:        string;
    independent?: boolean;
    status:       Status;
    unMember:     boolean;
    currencies:   Currencies;
    idd:          Idd;
    capital:      string[];
    altSpellings: string[];
    region:       Region;
    subregion:    Subregion;
    languages:    Languages;
    translations: { [key: string]: Translation };
    latlng:       number[];
    landlocked:   boolean;
    borders?:     string[];
    area:         number;
    demonyms:     Demonyms;
    flag:         string;
    maps:         Maps;
    population:   number;
    gini?:        { [key: string]: number };
    car:          Car;
    timezones:    string[];
    continents:   Region[];
    flags:        CoatOfArms;
    coatOfArms:   CoatOfArms;
    startOfWeek:  StartOfWeek;
    capitalInfo:  CapitalInfo;
    postalCode?:  PostalCode;
    fifa?:        string;
}

export interface CapitalInfo {
    latlng: number[];
}

export interface Car {
    signs: string[];
    side:  Side;
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export enum Region {
    Europe = "Europe",
}

export interface Currencies {
    GBP?: All;
    NOK?: All;
    DKK?: All;
    FOK?: All;
    EUR?: All;
    IMP?: All;
    CZK?: All;
    RSD?: All;
    BGN?: All;
    BAM?: BAM;
    SEK?: All;
    CHF?: All;
    JEP?: All;
    MKD?: All;
    GGP?: All;
    ALL?: All;
    RUB?: All;
    BYN?: All;
    MDL?: All;
    GIP?: All;
    HUF?: All;
    RON?: All;
    UAH?: All;
    PLN?: All;
    ISK?: All;
}

export interface All {
    name:   string;
    symbol: string;
}

export interface BAM {
    name: string;
}

export interface Demonyms {
    eng:  Eng;
    fra?: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Idd {
    root:     string;
    suffixes: string[];
}

export interface Languages {
    eng?: string;
    nno?: string;
    nob?: string;
    smi?: string;
    dan?: string;
    fao?: string;
    ell?: string;
    glv?: string;
    ces?: string;
    slk?: string;
    fra?: string;
    nld?: string;
    ita?: string;
    cnr?: string;
    srp?: string;
    bul?: string;
    spa?: string;
    bos?: string;
    hrv?: string;
    tur?: string;
    swe?: string;
    gsw?: string;
    roh?: string;
    deu?: string;
    bar?: string;
    nrf?: string;
    gle?: string;
    lit?: string;
    lat?: string;
    mkd?: string;
    nfr?: string;
    mlt?: string;
    fin?: string;
    sqi?: string;
    rus?: string;
    slv?: string;
    bel?: string;
    cat?: string;
    ron?: string;
    por?: string;
    ltz?: string;
    lav?: string;
    hun?: string;
    ukr?: string;
    pol?: string;
    nor?: string;
    isl?: string;
    est?: string;
}

export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface Name {
    common:     string;
    official:   string;
    nativeName: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common:   string;
}

export interface PostalCode {
    format: string;
    regex:  string;
}

export enum StartOfWeek {
    Monday = "monday",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
    UserAssigned = "user-assigned",
}

export enum Subregion {
    CentralEurope = "Central Europe",
    EasternEurope = "Eastern Europe",
    NorthernEurope = "Northern Europe",
    SoutheastEurope = "Southeast Europe",
    SouthernEurope = "Southern Europe",
    WesternEurope = "Western Europe",
}
