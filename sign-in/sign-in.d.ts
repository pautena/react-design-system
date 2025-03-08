export interface SignInProps {
    title: string;
    subtitle: string;
    error?: Error;
    loading?: boolean;
    onSubmitSignIn: (email: string, password: string) => void;
}
export declare const SignIn: ({ title, subtitle, loading, error, onSubmitSignIn }: SignInProps) => import("react/jsx-runtime").JSX.Element;
