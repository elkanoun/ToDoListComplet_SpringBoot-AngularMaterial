import { AppRole } from "./AppRole";

export interface AppUser {
    id: number;
    username: string;
    password: string;
    actived: boolean;
    roles: AppRole[];
}