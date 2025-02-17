import axios from "axios";

const useRequest = ({ url, method, onSuccess }) => {
  const sendRequest = async () => {
    const response = await axios[method](url);

    onSuccess(response.data);
  };
  return { sendRequest };
};

export default useRequest;
