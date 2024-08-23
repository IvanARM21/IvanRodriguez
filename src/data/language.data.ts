
interface Language {
    [key: string]: {
        code: string;
        label: string;
        flag: string;
    }
}

export const languages : Language = {
    es: {
        code: "es",
        label: "UY",
        flag: "/uruguay.png"
    },
    us: {
        code: "us",
        label: "US",
        flag: "/estados-unidos.png",
    }
}