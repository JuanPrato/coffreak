import { Button, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import type { NextPage } from "next";

interface TLoginForm {
    email: string;
    password: string;
}

const LogIn: NextPage = () => {

    const { onSubmit, getInputProps } = useForm<TLoginForm>({
        initialValues: {
            email: "",
            password: ""
        },
        validate: {
            email(value) {
                return !value.length ? 'Debe ingresar ese campo' : null;
            },
            password(value) {
                return !value.length ? 'Debe ingresar ese campo' : null;
            }
        }
    });

    return (
        <div className="grid place-items-center h-full w-full">
            <div className="flex flex-col p-3 rounded w-[80%] max-w-[350px] min-h-[350px] text-center">
                <h2 className="font-semibold text-2xl">Iniciar sesión</h2>
                <form className="flex flex-col gap-3 mt-4 text-start" onSubmit={onSubmit(v => console.log(v))}>
                    <TextInput label="Email" name="email" type="email" size="lg" placeholder="email@email.com" {...getInputProps('email')}/>
                    <PasswordInput label="Contraseña" name="password" size="lg" {...getInputProps('password')}/>
                    <Button variant="filled" type="submit">CONTINUAR</Button>
                </form>
            </div>
        </div>
    );
        
}

export default LogIn;