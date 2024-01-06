interface ReviewCardUseCaseProps {
	cardId: string;
	answer: number;
}

export interface ReviewCardUseCase {
	execute(params: ReviewCardUseCaseProps): Promise<void>;
}
