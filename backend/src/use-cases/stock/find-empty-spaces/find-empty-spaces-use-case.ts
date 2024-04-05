import { CustomError } from "./../../../utils/custom-error";
import { StockRepository } from "../../../repositories/stock-repository";

type FindEmptySpacesResponse = { row: number; column: number }[] | CustomError;

export class FindEmptySpacesUseCase {
  constructor(private stockRepository: StockRepository) {}

  async execute(): Promise<FindEmptySpacesResponse> {
    const emptySpaces = await this.stockRepository.findEmptySpaces();

    return emptySpaces;
  }
}
