
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface Comment {
    id: string;
    postId: string;
    name: string;
    email: string;
    body: string;
}

export interface IQuery {
    comments(limit?: Nullable<number>): Nullable<Nullable<Comment>[]> | Promise<Nullable<Nullable<Comment>[]>>;
    comment(id: string): Nullable<Comment> | Promise<Nullable<Comment>>;
    posts(limit?: Nullable<number>): Nullable<Nullable<Post>[]> | Promise<Nullable<Nullable<Post>[]>>;
    post(id: string): Nullable<Post> | Promise<Nullable<Post>>;
    users(limit?: Nullable<number>): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
    user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export interface Post {
    id: string;
    userId: string;
    title: string;
    body: string;
    comments: Nullable<Comment>[];
    author: User;
}

export interface User {
    id: string;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone?: Nullable<string>;
    website?: Nullable<string>;
    company?: Nullable<Company>;
    posts?: Nullable<Nullable<Post>[]>;
}

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo?: Nullable<Geo>;
}

export interface Geo {
    lat: string;
    lng: string;
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

type Nullable<T> = T | null;
