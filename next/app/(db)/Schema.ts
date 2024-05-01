import mongoose, {
  HydratedDocument,
  Model,
  Models,
  Mongoose,
  Schema,
  Types,
} from 'mongoose';
import { Document } from 'mongoose';
import { Variables } from '../Variables';

mongoose.connect(Variables.MONGODB_URL);

export type User = {
  authId: string;
  isAdmin: boolean;
  fullName: string;
  jobTitle: string;
  imageUrl: string;
  about: string;
  problems_solved: Map<string | number, any>;
  followers: string[];
  following: string[];
  technologies: string[];
  favorites: string[];
  rank: string;
  socials: {
    name: string;
    value: string;
  }[];
  subscriptionId: string;
  paid: boolean;
  createdAt: Date;
  updatedAt: Date;
  id: string;
};

export interface UserDocument extends User, Omit<Document, 'id'> {}

const UserSchema = new Schema<User>(
  {
    authId: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    fullName: String,
    jobTitle: String,
    favorites: { type: [String], default: [] },
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
    socials: [
      {
        name: String,
        value: String,
      },
    ],
    subscriptionId: String,
    paid: Boolean,
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
  }
);

// Use UserModelType to define UserModel
export const UserModel =
  (mongoose.models.user as Model<UserDocument>) ||
  mongoose.model<User>('user', UserSchema);
