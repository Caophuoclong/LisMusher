import axios from "axios";
const axiosClient = async (data, uri) => {
  const url = "localhost:5000/" + uri;
  const response = await axios.post(url, data);
  return response;
};
const uri = "http://localhost:5000";
export { uri };
export default axiosClient;
