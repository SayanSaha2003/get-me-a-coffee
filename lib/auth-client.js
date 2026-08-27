import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient();

// Login functions
export const loginWithGoogle = async () => {
    await authClient.signIn.social({
        provider: "google",
        callbackURL: "/dashboard",
    });
};

export const loginWithGithub = async () => {
    await authClient.signIn.social({
        provider: "github",
        callbackURL: "/dashboard",
    });
};
