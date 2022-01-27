import { Document } from 'mongoose';
export interface Messages extends Document {
    readonly messages: Array<Object>;
    readonly name: String;
    readonly attendees: Array<String>;
}
