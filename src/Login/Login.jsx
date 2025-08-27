import Button from "../Components/Button/Button";
import Input from "../Components/Input/Input";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const inputs = [
    { name: "email", placeholder: "xyz@gmail.com", type: "email" },
    { name: "password", placeholder: "password", type: "password" }
  ];

  const submitForm = (formData) => {
    const email = formData.get("email");
    const pass = formData.get("password");
    console.log(email, pass);

    navigate("/dashboard");
  };

  return (
    <form
      className="max-w-lg w-1/4 h-1/2 mx-auto shadow-lg p-5 rounded-xl bg-white"
      action={submitForm}
    >
      <div className="text-center pb-5">
        <h1 className="font-bold text-xl">Login Form</h1>
      </div>

      {inputs.map((value, index) => (
        <Input key={index} props={value} />
      ))}

      <Button />
    </form>
  );
}
