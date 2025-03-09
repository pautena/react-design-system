/**
 * Props for the SignIn component.
 */
export interface SignInProps {
    /**
     * The title of the sign-in form.
     */
    title: string;
    /**
     * The subtitle of the sign-in form.
     */
    subtitle: string;
    /**
     * An optional error object to display an error message.
     */
    error?: Error;
    /**
     * An optional boolean to indicate if the sign-in process is loading.
     */
    loading?: boolean;
    /**
     * Callback function to handle the sign-in form submission.
     * @param email - The email entered by the user.
     * @param password - The password entered by the user.
     */
    onSubmitSignIn: (email: string, password: string) => void;
}
/**
 * SignIn component renders a sign-in form with email and password fields.
 * It handles form submission and validation, displaying error messages if fields are empty.
 */
export declare const SignIn: ({ title, subtitle, loading, error, onSubmitSignIn }: SignInProps) => import("react/jsx-runtime").JSX.Element;
