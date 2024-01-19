export interface Roles {
    client: boolean;
    menager: boolean;
    admin: boolean;
    banned: boolean;
}
  
export interface User {
    email: string;
    roles: Roles;
    uid: string;
}

  