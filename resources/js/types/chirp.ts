import { IUser } from "./user";

export interface IChirp {
    id: number;
    user: IUser;
    message: string;
    created_at: string;
    updated_at: string;
}
