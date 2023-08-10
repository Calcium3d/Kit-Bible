import Query from './query.js'
import Mutation from './mutation.js'

const Kit = {
  id: (parent) => parent.id,
  kit_company: (parent) => parent.kit_company,
  kit: (parent) => parent.kit,
  car_company: (parent) => parent.car_company,
  car: (parent) => parent.car,
  image_link: (parent) => parent.image_link,
  approved: (parent) => parent.approved,
}

const resolvers = {
  Kit,
  Query,
  Mutation,
}

export default resolvers
