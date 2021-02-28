import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import AppError from "../errors/AppError";
import SurveysUsersRepository from "../repositories/SurveysUsersRepository";

class AnswerController {
    // http://localhost:3333/answers/1?u=f8e93e2b-2b53-449a-a166-56910622391a
    async execute(request: Request, response: Response) {
        const { value } = request.params;
        const { u } = request.query;

        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

        const surveyUser = await surveysUsersRepository.findOne({ id: String(u) });

        if (!surveyUser) {
            throw new AppError('Survey user does not exist!');
        }

        surveyUser.value = Number(value);

        await surveysUsersRepository.save(surveyUser);

        return response.status(201).json(surveyUser);
    }
}

export default AnswerController;