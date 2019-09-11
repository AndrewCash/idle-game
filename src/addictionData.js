import id from "./resEnum.js"

const addictionData =
{
    // *** Start of Internet Tab *** //

    internet: {
        coolmathgames: {
            id: "coolmathgames",
            purchaseText: "",
            text: [
                "Visit coolmathgames.com"
            ],
            cooldown: 5*1000,
            resIds: [id.HAP],
            deltas: [5],
            isUnlocked: true,
            unlockIds: [id.HAP],
            unlockCost: [0]
        },
        facebook: {
            id: "facebook",
            purchaseText: "Make a Facebook account",
            text: [
                "Look at Facebook memes"
            ],
            cooldown: 2*1000,
            resIds: [id.HAP],
            deltas: [4],
            isUnlocked: false,
            unlockIds: [id.HAP],
            unlockCost: [50]
        },
        reddit: {
            id: "reddit",
            purchaseText: "",
            text: [
                "Read Reddit threads"
            ],
            cooldown: 10*1000,
            resIds: [id.HAP, id.TECH],
            deltas: [20, .5],
            isUnlocked: false,
            unlockIds: [id.HAP],
            unlockCost: [1000]
        },
        chan: {
            id: "chan",
            purchaseText: "",
            text: [
                "Look at traps on 4chan"
            ],
            cooldown: 30*1000,
            resIds: [id.HAP, id.TECH],
            deltas: [100, 1],
            isUnlocked: false,
            unlockIds: [id.HAP, id.FAT, id.TECH],
            unlockCost: [10000, 100, 50]
        },
        conspiracyTheories: {
            id: "conspiracyTheories",
            purchaseText: "",
            text: [
                "Listen to Alex Jones"
            ],
            cooldown: 60*1000,
            resIds: [id.HAP],
            deltas: [1000],
            isUnlocked: false,
            unlockIds: [id.HAP, id.TECH],
            unlockCost: [200000, 100]
        }
    },

    // *** Start of Food Tab *** //

    food: {
        cookie: {
            id: "cookie",
            purchaseText: "",
            text: [
                "Put your hand in the cookie jar"
            ],
            cooldown: 10*1000,
            resIds: [id.HAP, id.FAT],
            deltas: [5, 10],
            isUnlocked: false,
            unlockIds: [id.HAP, id.FAT],
            unlockCost: [200]
        },
        icecream: {
            id: "icecream",
            purchaseText: "",
            text: [
                "Eat some icecream"
            ],
            cooldown: 20*1000,
            resIds: [id.HAP, id.FAT],
            deltas: [10, 40],
            isUnlocked: false,
            unlockIds: [id.HAP, id.FAT],
            unlockCost: [1000, 200]
        },
        mcRonaldsEat: {
            id: "mcRonaldsEat",
            purchaseText: "",
            text: [
                "Eat at McRonalds"
            ],
            cooldown:2*60*1000,
            resIds: [id.HAP, id.FAT],
            deltas: [500, 1000],
            isUnlocked: false,
            unlockIds: [id.HAP, id.FAT],
            unlockCost: [20000, 1000]
        }
    },

    // *** Start of Money Tab *** //

    money: {
        mcRonaldsWork: {
            id: "mcRonaldsEat",
            purchaseText: "",
            text: [
                "Flip burgers"
            ],
            cooldown: 8*1000,
            resIds: [id.MONEY],
            deltas: [10],
            isUnlocked: false,
            unlockIds: [id.HAP],
            unlockCost: [20000]
        },
        pizzaDelivery: {
            id: "pizzaDelivery",
            purchaseText: "",
            text: [
                "Deliver some pizza"
            ],
            cooldown: 30*1000,
            resIds: [id.MONEY],
            deltas: [80],
            isUnlocked: false,
            unlockIds: [id.HAP],
            unlockCost: [400000]
        }
    }
}
export default addictionData
