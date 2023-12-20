import { NFTOwnershipWalletType } from "fireblocks-sdk";
import { Clients } from "../interfaces/Clients";

export class NFTService {
  constructor(private readonly clients: Clients) {}

  async find(walletId: string) {
    const filter = {
      ncwId: walletId,
      walletType: NFTOwnershipWalletType.END_USER_WALLET,
      blockchainDescriptor: "",
    };
    return await this.clients.admin.getOwnedNFTs(filter);
  }
}
