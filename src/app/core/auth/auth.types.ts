export interface LoginResponseInterface {
  token: string;
}

export interface LoginBodyInterface {
  username: string;
  password: string;
}

export interface SignUpBodyInterface {
  username: string;
  password: string;
  confirmPassword: string;
}

export interface SignUpResponseInterface {
  id: number;
  username: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

