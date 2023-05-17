import { useNavigate } from "react-router-dom";
import { ButtonStyle2 } from "../components/style/ContactForm.style";
import { DataStyle } from "../components/style/Data.style";
import DataCard from "../components/DataCard";
import axios from "axios";
import { useEffect, useState } from "react";
const baseUrl = "https://contact-us-form.onrender.com/api/v1/usermessage";

const DataPage = () => {
  const [messages, setMessages] = useState([]);
  const [refresh, setRefresh] = useState(false);
  console.log(refresh);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${baseUrl}/getdata`);
        setMessages(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [refresh]);

  const messageArray =
    messages.length > 0
      ? messages.map((message) => {
          return (
            <DataCard
              key={message._id}
              name={message.name}
              email={message.email}
              subject={message.subject}
              message={message.message}
              setRefresh={setRefresh}
              messageId={message._id}
            />
          );
        })
      : null;

  return (
    <DataStyle>
      <ButtonStyle2 onClick={handleClick}>Go Back</ButtonStyle2>
      <div className="data_card">{messageArray}</div>
    </DataStyle>
  );
};

export default DataPage;
