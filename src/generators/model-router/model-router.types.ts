export interface RequestState {
  idle?: boolean;
  loading?: boolean;
  error?: string;
  success?: boolean;
}

export const IdleRequest = {
  idle: true,
};
