export const userService = {
    getUser
}

const USER = {
    name: "Guest",
    balance: 100,
    transactions: [],
    imgUrl: 'https://images.unsplash.com/photo-1546491764-67a5b8d5b3ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
}

function getUser() {
    return USER
}