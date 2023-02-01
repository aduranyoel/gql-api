
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class UsersInput {
    page?: Nullable<number>;
    limit?: Nullable<number>;
}

export class CreateUserInput {
    email?: Nullable<string>;
    firstname?: Nullable<string>;
    lastname?: Nullable<string>;
    gender?: Nullable<string>;
    imageUrl?: Nullable<string>;
}

export class UpdateUserInput {
    id: string;
    email?: Nullable<string>;
    firstname?: Nullable<string>;
    lastname?: Nullable<string>;
    gender?: Nullable<string>;
    imageUrl?: Nullable<string>;
}

export class AddFriendInput {
    user: string;
    friend: string;
}

export class Pagination {
    page?: Nullable<number>;
    limit?: Nullable<number>;
    total?: Nullable<number>;
    nextPage?: Nullable<number>;
}

export abstract class IQuery {
    abstract users(input?: Nullable<UsersInput>): Nullable<UserPage> | Promise<Nullable<UserPage>>;

    abstract userFriend(input?: Nullable<UsersInput>): Nullable<UserPage> | Promise<Nullable<UserPage>>;

    abstract user(userId: string): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createUser(input: CreateUserInput): Nullable<User> | Promise<Nullable<User>>;

    abstract createUserFriend(input: CreateUserInput): Nullable<User> | Promise<Nullable<User>>;

    abstract updateUser(input: UpdateUserInput): Nullable<boolean> | Promise<Nullable<boolean>>;

    abstract updateUserFriend(input: UpdateUserInput): Nullable<boolean> | Promise<Nullable<boolean>>;

    abstract addFriend(input: AddFriendInput): Nullable<boolean> | Promise<Nullable<boolean>>;

    abstract removeUser(userId: string): Nullable<boolean> | Promise<Nullable<boolean>>;

    abstract removeUserFriend(userId: string): Nullable<boolean> | Promise<Nullable<boolean>>;
}

export class User {
    id?: Nullable<string>;
    email?: Nullable<string>;
    firstname?: Nullable<string>;
    lastname?: Nullable<string>;
    gender?: Nullable<string>;
    imageUrl?: Nullable<string>;
    createdAt?: Nullable<string>;
    friends?: Nullable<Nullable<User>[]>;
}

export class UserPage {
    rows?: Nullable<Nullable<User>[]>;
    pagination?: Nullable<Pagination>;
}

type Nullable<T> = T | null;
