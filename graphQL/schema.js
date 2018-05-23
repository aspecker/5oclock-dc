export default `
type Bar {
  _id: String
  name: String!
  address: String!
  city: String!
  ZIP: Int!
  neighborhood: String!
  startTime: String!
  endTime: String!
  price: Int!
  cuisine: String
  image: String
  website: String
  phone: String
  menuLink: String
}
type Query {
  barSearch(
    neighborhood: String
  ): [Bar]
  allBars: [Bar]
}

type Mutation {
  createBar(
    name: String!
    address: String!
    city: String!
    ZIP: Int!
    neighborhood: String!
    startTime: String!
    endTime: String!
    price: Int!
    cuisine: String
    image: String
    website: String
    phone: String
    menuLink: String
  ): Bar!
}
`;
