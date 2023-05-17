import { useNavigate } from "react-router-dom";
import { ButtonStyle2 } from "../components/style/ContactForm.style";
import { DataStyle } from "../components/style/Data.style";
import DataCard from "../components/DataCard";
import axios from "axios";
import { useEffect, useState } from "react";
import DataCardSkeleton from "../components/DataCardSkeleton";
const baseUrl = "https://contact-us-form.onrender.com/api/v1/usermessage";

const DataPage = () => {
  const [messages, setMessages] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${baseUrl}/getdata`);
        setMessages(data.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [refresh]);

  const skeleton = [...Array(3).keys()].map((skeleton) => {
    return <DataCardSkeleton key={skeleton} />;
  });

  const messageArray =
    messages.length > 0 ? (
      messages.map((message) => {
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
    ) : (
      <h2 className="no_message">No Message Is Available</h2>
    );

  return (
    <DataStyle>
      <ButtonStyle2 onClick={handleClick}>Go Back</ButtonStyle2>
      <div className="data_card">{isLoading ? skeleton : messageArray}</div>
    </DataStyle>
  );
};

export default DataPage;
