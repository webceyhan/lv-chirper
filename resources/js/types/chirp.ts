import { IUser } from "./user";

export interface IChirp {
    id: number;
    message: string;
    created_at: string;
    user: IUser;
}
