import {AddNew} from "../actions/NewsActions";

const array = {
    text: 'novosti',
    img1: 'https://i.imgur.com/AJPqvkq.jpg',
    img2: 'https://i.imgur.com/AJPqvkq.jpg',
    img3: 'https://i.imgur.com/AJPqvkq.jpg',
    img4: 'https://i.imgur.com/AJPqvkq.jpg'
};

const initialState = {
    newsUnits: [array]
}

export default function newsReducer (news = initialState, action) {
    switch (action.type) {
        case AddNew:
            return {...news,
            };
        default:
            return news;
    }
}