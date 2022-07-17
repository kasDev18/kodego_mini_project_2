// Put all code related to unsplash
import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID FteN-oXBz3O7cG3G-qDCgsOwqYhpstI4NrVgParPbIk',
  },
});
