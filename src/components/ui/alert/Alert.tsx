import { FaCircleCheck, FaCircleExclamation } from "react-icons/fa6";

interface Props {
    isError: boolean;
    message: string;
    className?: string;
}

export const Alert = ({isError, message, className = ""} : Props) => {
  return (
    <div className={`flex gap-2 items-center ${className} ${isError ? 'text-red-600' : 'text-indigo-600'}`}>
        {isError ? <FaCircleExclamation size={16}/> : <FaCircleCheck size={16}/>}
        {message}
    </div>
  )
}
