import { Document } from 'mongoose';
export interface User extends Document {
    readonly pseudo: string;
    readonly email: string;
    readonly description: string;
    readonly img: string;
    readonly hashPassword: string;
    readonly friends: Array<String>;
    readonly created_at: Date;
    readonly pendingFriends: Array<String>;
}
