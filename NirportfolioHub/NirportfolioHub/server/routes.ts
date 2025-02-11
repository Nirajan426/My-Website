import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import express from "express";

export function registerRoutes(app: Express): Server {
  // put application routes here
  // prefix all routes with /api
  app.use(express.static(path.join(process.cwd(), "public")));

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}