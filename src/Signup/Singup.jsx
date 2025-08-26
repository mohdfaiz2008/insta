import Button from "../Components/Button/Button";
import Input from "../Components/Input/Input";

export default function SignUp() {
    const inputs = [
        { name: "email", placeholder: "Enter your Email Address",type: "email"},
        { name: "password", placeholder: "Enter your Password",type:"password" },
        { name: "phone-number", placeholder: "Enter your Phone Number", type: "number"}
        
    ]
    const submitForm = (formData) => {
      const email = formData.get("email");
      const pass = formData.get("password");
      const number = formData.get("phone-number");
      console.log(email,pass,number);
      
    }
  return (
    <form className="max-w-lg w-1/4 h-3/5 mx-auto shadow-lg p-5 rounded-xl bg-white" action={submitForm}>
      <div className="text-center pb-5">
        <h1 className="font-bold text-xl">Login Form</h1>
      </div>
      {
        inputs.map((value,indx) => <Input key={indx} props={value}/>)
      }
      <Button/>
    </form>
  );
}
