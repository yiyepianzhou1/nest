import { Document } from 'mongoose';

export interface List extends Document {
  readonly id?: string;
  readonly title?: string;
  readonly desc?: string;
  readonly imgUrl?: string;
}
