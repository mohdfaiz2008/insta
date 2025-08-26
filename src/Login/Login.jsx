import Button from "../Components/Button/Button";
import Input from "../Components/Input/Input";

export default function Login() {
    const inputs = [
        { name: "email", placeholder: "xyz@gmail.com", type:"email"},
        { name: "password", placeholder: "passsword",type:"password" }
    ]
    const submitForm = (FormData) => {
      const email = FormData.get("email");
      const pass = FormData.get("password");
      console.log(email,pass);
    }
  return (
    <form className="max-w-lg w-1/4 h-1/2 mx-auto shadow-lg p-5 rounded-xl bg-white" action={submitForm}>
      <div className="text-center pb-5">
        <h1 className="font-bold text-xl">Login Form</h1>
      </div>
      {
        inputs.map((value,index) => (
            <Input key={index} props={value}/>
        ))
      }
      <Button/>
    </form>
  );
}
