export interface AuthRequest {
  username: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  username: string | null;
}

export type AuthMode = 'login' | 'register';
