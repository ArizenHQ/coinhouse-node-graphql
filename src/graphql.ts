
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class User {
    __typename?: 'User';
    id: string;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone?: Nullable<string>;
    website?: Nullable<string>;
    company?: Nullable<Company>;
}

export class Address {
    __typename?: 'Address';
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo?: Nullable<Geo>;
}

export class Geo {
    __typename?: 'Geo';
    lat: string;
    lng: string;
}

export class Company {
    __typename?: 'Company';
    name: string;
    catchPhrase: string;
    bs: string;
}

type Nullable<T> = T | null;
