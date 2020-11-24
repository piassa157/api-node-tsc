import { response, Router } from "express";

const router = Router()

router.post('/users', (re1, res) => {
    return res.status(201).send()
});

export {router}