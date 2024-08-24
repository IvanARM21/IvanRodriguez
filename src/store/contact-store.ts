import { Lang } from "@/interfaces";
import { MailSend } from "@/interfaces/mail.interface";
import { sendMail } from "@/utils/email";
import { create } from "zustand";

interface FormData {
    [key: string]: string;
}
const initialValues : FormData = {
    name: "",
    email: "",
    subject: "",
    message: ""
}
interface Alert {
    message: string;
    error: boolean;
}
const initialAlert : Alert = {
    message: "",
    error: true
}
interface FormHovered {
    name: boolean;
    email: boolean;
    subject: boolean;
    message: boolean;
}
const initialValuesHovered : FormHovered = {
    name: false,
    email: false,
    subject: false,
    message: false
}

interface ContactStore {
    // Form 
    formData: FormData
    isHovered: FormHovered
    onChange: (e : React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>) => void;
    onBlur: (e : React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>) => void;
    onSubmit: (e : React.FormEvent<HTMLFormElement>, lang : Lang, callback: (formData: MailSend) => Promise<{
        error: boolean;
        us: { message: string; };
        es: {  message: string; } }>
    ) => void;
    isSubmit: boolean;
    isLoading: boolean;

    alert: Alert
    
    // Animation
    count: number;
    type: "console" | "alert";
    isView: boolean;
    increasteCount: () => void;
    changeType: (newValue : "console" | "alert") => void;
    setIsView: (value : boolean) => void;
}

const useContactStore = create<ContactStore>((set, get) => ({
    count: 0,
    type: "console",
    isView: false,

    formData: initialValues,
    isHovered: initialValuesHovered,
    isSubmit: false,
    isLoading: false,

    alert: initialAlert,

    onChange: (e) => set((state) => ({ formData: 
        { ...state.formData, [e.currentTarget.id]: e.currentTarget.value }
    })),
    onBlur: (e) => set((state) => ({ isHovered:
        { ...state.isHovered, [e.currentTarget.id]: true}
    })),
    onSubmit: async (e, lang) => {
        e.preventDefault();
        const keys = Object.keys(get().formData);
        keys.forEach(key => {
            set(state => ({
                formData: { ...state.formData, [key]: state.formData[key].trim() }
            }));
        });  
        if(Object.values(get().formData).includes("")) {
            keys.forEach(key => set(state => ({
                isHovered: { ...state.isHovered, [key]: true }
            })));
            return;
        }
        const { name, email, subject, message } = get().formData;
        const mailData: MailSend = {
            name: name,
            email: email,
            subject: subject,
            message: message,
        };
        set({isLoading: true, isSubmit: true});
        const result = await sendMail(mailData);
        set({
            isLoading: false, 
            isSubmit: false, 
            alert: {
                message: result[lang].message, 
                error: result.error
            }});

        if(!result.error) {
            set({ formData: initialValues, isHovered: initialValuesHovered });
        }
    },

    increasteCount: () => set((state) => ({count: state.count+1})),
    changeType: (newValue) => {
        set({type: newValue});
    },
    setIsView: (value) => set({isView: value}),
}));

export { useContactStore };