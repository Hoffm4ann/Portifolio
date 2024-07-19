import React from "react";
import { Link, useHistory } from "react-router-dom";
import * as Yup from "yup";
import LoginImg from "../../assets/login-image.svg";
import Logo from "../../assets/logo.svg";
import api from "../../services/api";
import Button from "../../components/Button";
import { useUser } from "../../hooks/UserContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import {
	Container,
	ContainerItens,
	ErrorMessage,
	Input,
	Label,
	LoginImage,
	SingInLink,
} from "./styles";

function Login() {
	const history = useHistory()
	const { putUserData } = useUser()

	const schema = Yup.object().shape({
		email: Yup.string()
			.email("Diegite um e-mail valido")
			.required("O e-mail e obrigatorio"),
		password: Yup.string()
			.required("A senha e obriatoria")
			.min(6, "A senha deve ter no minimo seis digitos"),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = async clientData => {
		const { data } = await toast.promise(
			api.post("session", {
				email: clientData.email,
				password: clientData.password,
			}),
			{
				pending: 'Verificando seus dados!',
				success: 'Seja bem vindo(a)! 👌',
				error: 'Vefifique seu e-mail e senha! 🤯'
			}
		)
		putUserData(data)
		setTimeout(() => {
			history.push("/")

		}, 1000)

	};

	return (
		<Container>
			<LoginImage src={LoginImg} alt="login-image" />
			<ContainerItens>
				<img src={Logo} alt="logocode-burger" />

				<h1>Login</h1>

				<form noValidate onSubmit={handleSubmit(onSubmit)}>
					<Label>Email</Label>
					<Input
						type="email"
						{...register("email")}
						error={errors.email?.message}
					/>
					<ErrorMessage>{errors.email?.message}</ErrorMessage>

					<Label>Senha</Label>
					<Input
						type="password"
						{...register("password")}
						error={errors.password?.message}
					/>
					<ErrorMessage>{errors.password?.message}</ErrorMessage>

					<Button type="submit" style={{ marginTop: 75, marginBottom: 25 }}>Sing In</Button>
				</form>

				<SingInLink>
					Não Possui Conta? <a>Sing Up</a>
				</SingInLink>
			</ContainerItens>
		</Container>
	);
}

export default Login;
