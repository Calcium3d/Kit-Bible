import prisma from '../prisma/prisma.js'

const Query = {
  Approved_Kits: () => {
    return prisma.kit.findMany({
      where: {
        approved: true,
      },
    })
  },
  To_Approve_Kits: () => {
    return prisma.kit.findMany({
      where: {
        approved: false,
      },
    })
  },
}

export default Query
