import Form from "./Form";
import { ContactFormStyle } from "./style/ContactForm.style";
import ThemeToggle from "./ThemeToggle";

const ContactForm = () => {
  return (
    <ContactFormStyle>
      <div>
        <h2>Contact Us</h2>
        <ThemeToggle />
      </div>
      <Form />
    </ContactFormStyle>
  );
};

export default ContactForm;
