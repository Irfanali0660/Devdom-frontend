export interface Comments {
        _id: string;
        postId: string;
        userId: UserId;
        comment: string;
        date: string;
        replay?: (null)[] | null;
        __v: number;
      }
      export interface UserId {
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
