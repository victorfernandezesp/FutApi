export interface Player {
    Rk:            number;
    Player:        string;
    Nation:        string;
    Pos:           number;
    Squad:         string;
    Comp:          Comp;
    Age:           number;
    Born:          number;
    MP:            number;
    Starts:        number;
    Min:           number;
    "90s":         number;
    Goals:         number;
    Shots:         number;
    SoT:           number;
    "SoT%":        number;
    "G/Sh":        number;
    "G/SoT":       number;
    ShoDist:       number;
    ShoFK:         number;
    ShoPK:         number;
    PKatt:         number;
    PasTotCmp:     number;
    PasTotAtt:     number;
    "PasTotCmp%":  number;
    PasTotDist:    number;
    PasTotPrgDist: number;
    PasShoCmp:     number;
    PasShoAtt:     number;
    "PasShoCmp%":  number;
    PasMedCmp:     number;
    PasMedAtt:     number;
    "PasMedCmp%":  number;
    PasLonCmp:     number;
    PasLonAtt:     number;
    "PasLonCmp%":  number;
    Assists:       number;
    PasAss:        number;
    Pas3rd:        number;
    PPA:           number;
    CrsPA:         number;
    PasProg:       number;
    PasAtt:        number;
    PasLive:       number;
    PasDead:       number;
    PasFK:         number;
    TB:            number;
    Sw:            number;
    PasCrs:        number;
    TI:            number;
    CK:            number;
    CkIn:          number;
    CkOut:         number;
    CkStr:         number;
    PasCmp:        number;
    PasOff:        number;
    PasBlocks:     number;
    SCA:           number;
    ScaPassLive:   number;
    ScaPassDead:   number;
    ScaDrib:       number;
    ScaSh:         number;
    ScaFld:        number;
    ScaDef:        number;
    GCA:           number;
    GcaPassLive:   number;
    GcaPassDead:   number;
    GcaDrib:       number;
    GcaSh:         number;
    GcaFld:        number;
    GcaDef:        number;
    Tkl:           number;
    TklWon:        number;
    TklDef3rd:     number;
    TklMid3rd:     number;
    TklAtt3rd:     number;
    TklDri:        number;
    TklDriAtt:     number;
    "TklDri%":     number;
    TklDriPast:    number;
    Blocks:        number;
    BlkSh:         number;
    BlkPass:       number;
    Int:           number;
    "Tkl+Int":     number;
    Clr:           number;
    Err:           number;
    Touches:       number;
    TouDefPen:     number;
    TouDef3rd:     number;
    TouMid3rd:     number;
    TouAtt3rd:     number;
    TouAttPen:     number;
    TouLive:       number;
    ToAtt:         number;
    ToSuc:         number;
    "ToSuc%":      number;
    ToTkl:         number;
    "ToTkl%":      number;
    Carries:       number;
    CarTotDist:    number;
    CarPrgDist:    number;
    CarProg:       number;
    Car3rd:        number;
    CPA:           number;
    CarMis:        number;
    CarDis:        number;
    Rec:           number;
    RecProg:       number;
    CrdY:          number;
    CrdR:          number;
    "2CrdY":       number;
    Fls:           number;
    Fld:           number;
    Off:           number;
    Crs:           number;
    TklW:          number;
    PKwon:         number;
    PKcon:         number;
    OG:            number;
    Recov:         number;
    AerWon:        number;
    AerLost:       number;
    "AerWon%":     number;
    [key: string]: any;

}

export enum Comp {
    Bundesliga = "Bundesliga",
    LaLiga = "La Liga",
    Ligue1 = "Ligue 1",
    PremierLeague = "Premier League",
    SerieA = "Serie A",
}
