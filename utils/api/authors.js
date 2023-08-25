import { BASE_URL } from './base.js'

const getAuthor = (authorKey) => {
    return fetch(`${BASE_URL}/authors/${authorKey}.json`)
    .then((response)=> {
        return response.json()
    }).then((data)=> {
        return data
    })
}

const getAuthorWorks = (authorKey) => {
    return fetch(`${BASE_URL}/authors/${authorKey}/works.json`)
    .then((response)=> {
        return response.json()
    }).then((data)=> {
       return data.entries
    })
}
const getBooks = (bookid) => {
    return fetch(`${BASE_URL}/works/${bookid}.json`)
    .then((response)=> {
        return response.json()
    }).then((data)=> {
        return data
    })
}
async function fetchImage(url) {
    const img = new Image();
    return new Promise((res, rej) => {
        img.onload = () => res(img);
        img.onerror = e => rej(e);
        img.src = url;
    });
}

export {getAuthor, getAuthorWorks, getBooks, fetchImage}
