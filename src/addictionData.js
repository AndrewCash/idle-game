import resEnum from "./resEnum.js"

const addictionData = [
    {
        id: 1,
        name: "coolmathgames",
        text: "Visit coolmathgames.com",
        cooldown: 5000,
        ids: [1],
        deltas: [5]
    },
    {
        id: 2,
        name: "facebook",
        text: "Look at Facebook memes",
        cooldown: 2000,
        ids: [1],
        deltas: [4]
    },
    {
        id: 3,
        name: "reddit",
        text: "Read Reddit threads",
        cooldown: 10000,
        ids: [1, 4],
        deltas: [20, .5]
    },
    {
        id: 4,
        name: "4chan",
        text: "Look at traps on 4chan",
        cooldown: 30000,
        ids: [1, 4],
        deltas: [100, 1]
    },
    {
        id: 5,
        name: "conspiracytheories",
        text: "Listen to Alex Jones",
        cooldown: 60000,
        ids: [1],
        deltas: [1000]
    }
]
export default addictionData
