// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/*
❱❱❱
❱❱❱ Title ⇏ This is User Create API Endpoint
❱❱❱ Description ⇏
❱❱❱ Author ⇏ Antar Das
❱❱❱ Date ⇏ 15-APR-2022
❱❱❱
*/

export default async function handler(req, res) {
    // const data = await User.create({

    // })
    res.status(200).json({ name: 'John Doe' })
  }
  