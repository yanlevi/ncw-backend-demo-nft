import { Router } from "express";
import { Clients } from "../interfaces/Clients";
import { NFTController } from "../controllers/nft.controller";
import { NFTService } from "../services/nft.service";

export function createNFTRoute(clients: Clients) {
  const route = Router({ mergeParams: true });
  const service = new NFTService(clients);
  const controller = new NFTController(service);

  route.get("/", controller.findAll.bind(controller));
  return route;
}
