export interface IWord {
    audioExample: string;
    textExample: string;
    textExampleTranslate: string;
    id: number;
    word: string;
    wordTranslate: string;
  }
  
  export interface ILevelData {
    id: string;
    name: string;
    imageSrc: string;
    cutSrc: string;
    author: string;
    year: string;
  }
  
  export interface Round {
    levelData: ILevelData;
    words: IWord[];
  }
  
 export interface IGameData {
    rounds: Round[];
    roundsCount: number;
  }