import { Document } from 'mongoose';
export interface Users extends Document {
    readonly pseudo: string;
    readonly email: string;
    readonly hashPassword: string;
    readonly description: string;
    readonly created_at: Date;
}
