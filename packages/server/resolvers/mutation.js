import prisma from '../prisma/prisma.js'

const Mutation = {
  register: (args) => {
    return prisma.kit.create({
      data: {
        kit_company: args.kit_company,
        kit: args.kit,
        car_company: args.car_company,
        car: args.car,
        image_link: args.image_link,
      },
    })
  },
}

export default Mutation
