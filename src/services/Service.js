import axios from 'axios';

const url = "https://5f8fd6a1693e730016d7b7e1.mockapi.io/api/v1/images/"

export const getData = async () => {
    try {
        const res = await axios.get(url);
        return res.data;   
    }catch(err) {
        throw new Error(`Unhandled - getData: ${err}`);
    }
};

export const addPerson = async (newPerson, image, country, phone) => {
    try {
        const addNewPerson = {
            fullname: newPerson,
            avatar: image,
            country: country,
            phone: phone
        };
        const res = await axios.post(url, addNewPerson);
        return res.data;
    }catch(err) {
        throw new Error(`Unhandled - addPerson: ${err}`);
    }
};

export const addRandomPerson = async () => {
    try {
        const addRandomP = {};
        const res = await axios.post(url, addRandomP);
        return res.data;
    }catch(err) {
        throw new Error(`Unhandled - addRandomPerson: ${err}`);
    }
}
