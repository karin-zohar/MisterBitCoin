export const userService = {
    getUser
}

const USER = {
    name: "Guest",
    balance: 100,
    transactions: [],
    imgUrl: 'https://res.cloudinary.com/dqhfnvtca/image/upload/v1687818313/avatar-svgrepo-com_l2yd0k.svg'
}

function getUser() {
    return USER
}