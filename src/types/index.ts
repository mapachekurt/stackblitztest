export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface AppConfig {
  title: string;
  description: string;
}