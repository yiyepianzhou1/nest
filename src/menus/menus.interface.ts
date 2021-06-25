import { Document } from 'mongoose';
export interface Menu extends Document {
  readonly type: string;
}
