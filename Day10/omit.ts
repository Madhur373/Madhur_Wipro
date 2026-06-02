interface User {
    id: string;
    name: string;
    email: string;
    password: string;
}

type UserPreview = Omit<User, "email" | "password"> //Omit -> Exclude the keys from the type and create a new type with the remaining keys

const preview: UserPreview = {
    name: "Aryan",
    id: "xyz"
}

// preview.password;