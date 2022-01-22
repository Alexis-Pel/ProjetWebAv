import { Document } from 'mongoose';

export interface User extends Document {
  readonly pseudo: string;
  readonly email: string;
  readonly description: string;
  readonly img: string;
  readonly hashPassword: string;
  readonly created_at: Date;
}
