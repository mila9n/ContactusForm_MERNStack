import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { FormStyle } from "./style/Form.style";
const baseUrl = "http://localhost:5000";

const Form = () => {
  const [loading, setLoading] = useState(false);

  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { name, email, subject, message } = inputValue;

  const handleChange = (e) => {
    setInputValue((prev) => {
      const { name, value } = e.target;

      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${baseUrl}/api/v1/usermessage/send`,
        {
          name,
          email,
          subject,
          message,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setLoading(false);
      setInputValue({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error(error.response.data.message);
      console.error(error);
    }
  };

  return (
    <FormStyle>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            required={true}
            id="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email Id</label>
          <input
            name="email"
            id="email"
            type="email"
            required={true}
            value={email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="subject">Subject</label>
          <input
            name="subject"
            id="subject"
            type="text"
            required={true}
            value={subject}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            value={message}
            type="text"
            required={true}
            onChange={handleChange}
          />
        </div>
        <button type="submit" disabled={loading ? true : false}>
          Submit
        </button>
      </form>
    </FormStyle>
  );
};

export default Form;
