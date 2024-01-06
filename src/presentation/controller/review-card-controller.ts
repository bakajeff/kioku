import { ReviewCardUseCase } from "../../domain/interfaces/use-cases/review-card-use-case";
import { ok } from "../helpers/http-helper";
import { Controller } from "../interfaces/controller";
import { HttpResponse } from "../interfaces/http-response";

export class ReviewCardController implements Controller {
	constructor(private readonly reviewCardUseCase: ReviewCardUseCase) {}

	async handle(): Promise<HttpResponse> {
		await this.reviewCardUseCase.execute("", 0);

		return ok({});
	}
}
