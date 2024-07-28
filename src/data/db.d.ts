// interface LibraryConfig {
//   one: string;
//   two: string;
//   three: string;
// }
// interface DetailConfig {
//   desc: string;
//   desc2: string;
//   desc3: string;
//   desc4: string;
//   onedesc: string;
//   onedesc2: string;
//   twodesc: string;
//   twodesc2: string;
//   threedesc: string;
//   threedesc2: string;
//   fourdesc: string;
//   fourdesc2: string;
//   fivedesc: string;
//   fivedesc2: string;
//   sixdesc: string;
//   sixdesc2: string;
// }

declare module "./db.json" {
  export interface Db {
    news?: {
      id: number;
      img: string;
      title: string;
      subdesc: string;
    }[];
  }
  const db: Db;
  export default db;
}
declare module "./newsDb.json" {
  interface Topics {
    [key: string]: string;
  }
  export interface NewsDb {
    newsPage?: {
      id: number;
      img: string;
      title: string;
      subdesc: string;
      type: string;
      date: string;
      TitleOne?: string;
      TitleTwo?: string;
      DescOne?: string;
      DescTwo?: string;
      topics?: Topics;
    }[];
  }
  const Newsdb: NewsDb;
  export default Newsdb;
}
