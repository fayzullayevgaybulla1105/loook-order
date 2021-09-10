
const FOODS = `
    query{
        foods{
            foodId
            foodName
        }
    }
`

const USERS = `
    query{
        users{
            userId
            username
            contact
        }
    }
`

const ORDERS = `
    query($userId:ID){
        orders(userId: $userId){
            food{
                foodName
                foodImg
            }
            count
        }
    }
    `

const addOrders = `
mutation AddOrderMutation($foodId: Int!, $userId: Int!, $count: Int!) {
    addOrder(foodId: $foodId, userId: $userId, count: $count) {
     status
     message
     data 
    }
  }`

const ADDUSER = `
mutation Mutation($username: String!, $contact: String!) {
    addUser(username: $username, contact: $contact) {
      data
      message
      status
    }
  }`