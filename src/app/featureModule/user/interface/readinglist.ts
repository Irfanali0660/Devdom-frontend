export interface Readinglist {
    _id: string;
    userId: string;
    postId: string;
    authId: string;
    date: string;
    __v: number;
    post?: (PostEntity)[] | null;
    auth?: (AuthEntity)[] | null;
}

  export interface PostEntity {
    _id: string;
    userId: string;
    post: string;
    image: string;
    date: string;
    tag?: (string | null)[] | null;
    likes?: (string)[] | null;
    __v: number;
  }
  export interface AuthEntity {
    _id: string;
    userName: string;
    email: string;
    password: string;
    image: string;
    phone: number;
    status: boolean;
    location: string;
    verifyemail: boolean;
    joinedDate: string;
    __v: number;
    work: string;
    address: string;
    birthday: string;
    gender: string;
    googleimage?: null;
  }
  