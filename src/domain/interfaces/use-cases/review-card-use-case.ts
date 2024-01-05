export interface ReviewCardUseCase {
	execute(cardId: string, answer: number): Promise<void>;
}
