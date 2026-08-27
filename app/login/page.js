import LoginForm from "@/components/LoginForm";

const Login = () => {
    return (
        <main className="flex min-h-[calc(100vh-112px)] flex-col items-center px-6 py-15 text-center">
            <h1 className="mb-12 text-4xl font-bold text-white">
                Login to Get Started
            </h1>

            <LoginForm />
        </main>
    );
};

export default Login;
