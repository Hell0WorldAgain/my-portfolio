
import ContactForm from "@/app/components/contact-form";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Contact | Abhishek Choudhary",
};

export default function Page() {
    return (
        <main>
            <ContactForm/>
        </main>
    );
};
