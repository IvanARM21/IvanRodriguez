
export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

export interface UserAuth extends Pick<User,  | "name" | "email">{ id: number | null }