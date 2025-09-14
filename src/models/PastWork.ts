import mongoose, { Document, Schema } from 'mongoose';

export interface IPastWork extends Document {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  location: string;
  completedAt: Date;
  createdAt: Date;
}

const PastWorkSchema: Schema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  imageUrl: {
    type: String,
    required: [true, 'Image URL is required'],
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: ['Installation', 'Repair', 'Replacement', 'Maintenance'],
  },
  location: {
    type: String,
    required: [true, 'Location is required'],
  },
  completedAt: {
    type: Date,
    required: [true, 'Completion date is required'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.PastWork || mongoose.model<IPastWork>('PastWork', PastWorkSchema);
