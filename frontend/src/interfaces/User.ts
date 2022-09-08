export interface User {
    nickname: string;
    name: string;
    email: string;
    password: string;
    img?: {file: string, fileType:string};
    experience: number;
    rank: number;
    leaguePoints: number;
}