export default function Input({props}){
    return(
        <div className="mb-5">
          <label
            htmlFor={props.name}
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            {props.name}
          </label>
          <input
            type={props.type}
            id={props.name}
            name={props.name}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder={props.placeholder}
            required
          />
        </div>
    );
}