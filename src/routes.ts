import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";

const routes = Router();
const settingscontroller = new SettingsController;

routes.post('/settings', settingscontroller.create);

export { routes };