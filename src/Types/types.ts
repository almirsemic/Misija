export interface MoviesSeries {
    page:    number;
    next:    string;
    entries: number;
    results: Result[];
}

export interface Result {
    id:             string;
    ratingsSummary: RatingsSummary;
    episodes:       null;
    primaryImage:   PrimaryImage;
    titleType:      TitleType;
    genres:         Genres;
    titleText:      TitleText;
    releaseYear:    ReleaseYear;
    releaseDate:    ReleaseDate;
    runtime:        Runtime;
    series:         null;
    meterRanking:   MeterRanking | null;
    plot:           Plot;
    position:       number;
}


export interface paramsType {
    info?: string | undefined
    list?: string  | undefined
    url?: string
    titleType?: string  | undefined
    exact?: boolean  | undefined
    sort?: string  | undefined
    genre?: string  | undefined
  }

export interface Genres {
    genres:     Genre[];
    __typename: GenresTypename;
}

export enum GenresTypename {
    Genres = "Genres",
}

export interface Genre {
    text:       string;
    id:         string;
    __typename: GenreTypename;
}

export enum GenreTypename {
    Genre = "Genre",
}

export interface MeterRanking {
    currentRank: number;
    rankChange:  RankChange;
    __typename:  string;
}

export interface RankChange {
    changeDirection: string;
    difference:      number;
    __typename:      string;
}

export interface Plot {
    plotText:   PlotText;
    language:   Language;
    __typename: PlotTypename;
}

export enum PlotTypename {
    Plot = "Plot",
}

export interface Language {
    id:         LanguageID;
    __typename: LanguageTypename;
}

export enum LanguageTypename {
    DisplayableLanguage = "DisplayableLanguage",
}

export enum LanguageID {
    EnUS = "en-US",
}

export interface PlotText {
    plainText:  string;
    __typename: PlotTextTypename;
}

export enum PlotTextTypename {
    Markdown = "Markdown",
}

export interface PrimaryImage {
    id:         string;
    width:      number;
    height:     number;
    url:        string;
    caption:    PlotText;
    __typename: PrimaryImageTypename;
}

export enum PrimaryImageTypename {
    Image = "Image",
}

export interface RatingsSummary {
    aggregateRating: number;
    voteCount:       number;
    __typename:      RatingsSummaryTypename;
}

export enum RatingsSummaryTypename {
    RatingsSummary = "RatingsSummary",
}

export interface ReleaseDate {
    day:        number;
    month:      number;
    year:       number;
    __typename: ReleaseDateTypename;
}

export enum ReleaseDateTypename {
    ReleaseDate = "ReleaseDate",
}

export interface ReleaseYear {
    year:       number;
    endYear:    null;
    __typename: ReleaseYearTypename;
}

export enum ReleaseYearTypename {
    YearRange = "YearRange",
}

export interface Runtime {
    seconds:    number;
    __typename: RuntimeTypename;
}

export enum RuntimeTypename {
    Runtime = "Runtime",
}

export interface TitleText {
    text:       string;
    __typename: TitleTextTypename;
}

export enum TitleTextTypename {
    TitleText = "TitleText",
}

export interface TitleType {
    text:       Text;
    id:         TitleTypeID;
    isSeries:   boolean;
    isEpisode:  boolean;
    __typename: TitleTypeTypename;
}

export enum TitleTypeTypename {
    TitleType = "TitleType",
}

export enum TitleTypeID {
    Movie = "movie",
}

export enum Text {
    Movie = "Movie",
}
