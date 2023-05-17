import { DataCardStyle } from "./style/DataCard.style";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
const baseUrl = "https://contact-us-form.onrender.com/api/v1/usermessage";
import toast from "react-hot-toast";

const DataCard = ({ name, email, subject, message, messageId, setRefresh }) => {
  const handleDelete = async (messageId) => {
    try {
      const { data } = await axios.delete(`${baseUrl}/${messageId}`);
      toast.success(data.message);
      setRefresh((prev) => !prev);
    } catch (error) {
      toast.error(error.message);
      console.error(error);
    }
  };

  return (
    <DataCardStyle>
      <h2>{name}</h2>
      <span>{email}</span>
      <span>{subject}</span>
      <p>{message}</p>
      <span className="delete_task" onClick={() => handleDelete(messageId)}>
        <FaTrashAlt />
      </span>
    </DataCardStyle>
  );
};

export default DataCard;
