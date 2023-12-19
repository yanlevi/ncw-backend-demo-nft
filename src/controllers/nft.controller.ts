import { NextFunction, Response } from "express";
import { RequestEx } from "../interfaces/requestEx";
import { NFTService } from "../services/nft.service";

export class NFTController {
  constructor(private readonly service: NFTService) {}

  async findAll(req: RequestEx, res: Response, next: NextFunction) {
    // const { device, params } = req;
    // const { accountId } = params;
    const { device } = req;

    try {
      const { walletId } = device!;
      const nfts = await this.service.find(walletId);
      return res.json(nfts);
    } catch (err) {
      return next(err);
    }
  }
}
