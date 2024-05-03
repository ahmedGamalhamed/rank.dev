import mongoose, { Model, Schema } from 'mongoose';
import { Document } from 'mongoose';
import { Variables } from '../Variables';

mongoose.connect(Variables.MONGODB_URL);

export type User = {
  authId: string;
  email: string;
  isAdmin: boolean;
  fullName: string;
  jobTitle: string;
  imageUrl: string;
  about: string;
  problems_solved: Map<string | number, any>;
  followers: string[];
  following: string[];
  technologies: string[];
  rank: string;
  socials: {
    facebook: string;
    twitter: string;
    github: string;
    linkedin: string;
  };
  subscriptionId: string;
  paid: boolean;
  createdAt: Date;
  updatedAt: Date;
  id: string;
  favourties: string[];
};

export interface UserDocument extends User, Omit<Document, 'id'> {}

const UserSchema = new Schema<User>(
  {
    authId: { type: String, required: true },
    email: { type: String, unique: true },
    isAdmin: { type: Boolean, default: false },
    fullName: String,
    jobTitle: String,
    imageUrl: String,
    about: String,
    problems_solved: {
      type: Map,
      of: Schema.Types.Mixed,
    },
    followers: [String],
    following: [String],
    technologies: [String],
    rank: String,
    socials: {
      facebook: String,
      twitter: String,
      github: String,
      linkedin: String,
    },
    subscriptionId: String,
    paid: Boolean,
    favourties: [String],
  },
  {
    timestamps: true,
    toObject: {
      transform: function (doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
    toJSON: {
      transform: function (doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

// Use UserModelType to define UserModel
export const UserModel =
  (mongoose.models.user as Model<UserDocument>) ||
  mongoose.model<User>('user', UserSchema);
