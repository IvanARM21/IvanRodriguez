import { create } from "zustand";

interface FormData {
    [key : string]: string
}
const initialValues : FormData = {
    name: "",
    email: "",
    subject: "",
    message: ""
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
    onSubmit: (e : React.FormEvent<HTMLFormElement>) => void;
    isSubmit: boolean;
    isLoading: boolean;
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

    onChange: (e) => set((state) => ({ formData: 
        { ...state.formData, [e.currentTarget.id]: e.currentTarget.value }
    })),
    onBlur: (e) => set((state) => ({ isHovered:
        { ...state.isHovered, [e.currentTarget.id]: true}
    })),
    onSubmit: (e) => {
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
        set({isLoading: true});
        setTimeout(() => {
            set({isLoading: false});

            set({ isSubmit: true, formData: initialValues, isHovered: initialValuesHovered });        

            setTimeout(() => {
                set({isSubmit: false});
            }, 3000);
        }, 5000);
        
    },

    increasteCount: () => set((state) => ({count: state.count+1})),
    changeType: (newValue) => {
        set({type: newValue});
    },
    setIsView: (value) => set({isView: value}),
}));

export { useContactStore };