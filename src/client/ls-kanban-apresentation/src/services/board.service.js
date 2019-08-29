import axios from 'axios';
import config from '../config.json'



export default class BoardService {
    createBoard= async (board)=>{

        console.log(config.settings.baseUrl);
        
        await axios.post(`${config.settings.baseUrl}/boards`, board )
    }
    createContainer= async (container, boardId) =>{
        await axios.post(`${config.settings.baseUrl}/boards/${boardId}/containers`, container )
    }
    createCard= async (card, containerId)=>{
        await axios.post(`https://tecweb-entech.azurewebsites.net/users`, card )
    }



    getBoards = () => {
        return {boards: [
            {
                id: 1,
                name: "Nome Mesa",
            },
            {
                id: 2,
                name: "Nome Mesa",
            },
            {
                id: 3,
                name: "Nome Mesa",
            },
            {
                id: 4,
                name: "Nome Mesa",
            }
        ]};
    }

    getBoard = (id) => {
        return {
            boards: {
                id: 1,
                name: "Nome Mesa",
                containers: [
                    {
                        id: 1,
                        title: "Container 01",
                        cards: [
                            { id: 1, text: "card 01 cont 01" },
                            { id: 2, text: "card 02 cont 01" },
                            { id: 3, text: "card 03 cont 01" },
                            { id: 4, text: "card 04 cont 01" }
                        ]
                    },
                    {
                        id: 2,
                        title: "Container 02",
                        cards: [
                            { id: 1, text: "card 01 cont 02" },
                            { id: 2, text: "card 02 cont 02" },
                            { id: 3, text: "card 03 cont 02" }
                        ]
                    },

                    {
                        id: 3,
                        title: "Container 02",
                        cards: [
                            { id: 1, text: "card 01 cont 03" },
                            { id: 2, text: "card 02 cont 03" },
                            { id: 3, text: "card 03 cont 03" }
                        ]
                    }
                ]
            }
        }
    }
}