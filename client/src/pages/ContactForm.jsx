import Form from "../components/Form";
import {
  ContactFormStyle,
  ButtonStyle,
} from "../components/style/ContactForm.style";
import ThemeToggle from "../components/ThemeToggle";
import { useNavigate } from "react-router-dom";

const ContactFormPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/data");
  };

  return (
    <>
      <ContactFormStyle>
        <div>
          <h2>Contact Us</h2>
          <ThemeToggle />
        </div>
        <Form />
      </ContactFormStyle>
      <ButtonStyle onClick={handleClick}>Get All Messages</ButtonStyle>
    </>
  );
};

export default ContactFormPage;
