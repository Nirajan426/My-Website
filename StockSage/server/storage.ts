import { projects, skills, about } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";
import type { 
  Project, InsertProject,
  Skill, InsertSkill,
  About, InsertAbout
} from "@shared/schema";

export interface IStorage {
  // Project operations
  getProjects(): Promise<Project[]>;
  getProject(id: number): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;

  // Skill operations
  getSkills(): Promise<Skill[]>;
  getSkill(id: number): Promise<Skill | undefined>;
  createSkill(skill: InsertSkill): Promise<Skill>;

  // About operations
  getAbout(): Promise<About | undefined>;
  updateAbout(about: InsertAbout): Promise<About>;

  getUser(id: number): Promise<import("@shared/schema").User | undefined>;
  getUserByUsername(username: string): Promise<import("@shared/schema").User | undefined>;
  createUser(user: import("@shared/schema").InsertUser): Promise<import("@shared/schema").User>;
}

export class DatabaseStorage implements IStorage {
  // Project operations
  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects).orderBy(projects.createdAt);
  }

  async getProject(id: number): Promise<Project | undefined> {
    const [project] = await db.select().from(projects).where(eq(projects.id, id));
    return project;
  }

  async createProject(project: InsertProject): Promise<Project> {
    const [created] = await db.insert(projects).values(project).returning();
    return created;
  }

  // Skill operations
  async getSkills(): Promise<Skill[]> {
    return await db.select().from(skills).orderBy(skills.category);
  }

  async getSkill(id: number): Promise<Skill | undefined> {
    const [skill] = await db.select().from(skills).where(eq(skills.id, id));
    return skill;
  }

  async createSkill(skill: InsertSkill): Promise<Skill> {
    const [created] = await db.insert(skills).values(skill).returning();
    return created;
  }

  // About operations
  async getAbout(): Promise<About | undefined> {
    const [aboutInfo] = await db.select().from(about);
    return aboutInfo;
  }

  async updateAbout(aboutData: InsertAbout): Promise<About> {
    const [updated] = await db
      .insert(about)
      .values(aboutData)
      .onConflictDoUpdate({
        target: about.id,
        set: aboutData,
      })
      .returning();
    return updated;
  }
    async getUser(id: number): Promise<import("@shared/schema").User | undefined> {
        throw new Error("Method not implemented.");
    }
    async getUserByUsername(username: string): Promise<import("@shared/schema").User | undefined> {
        throw new Error("Method not implemented.");
    }
    async createUser(user: import("@shared/schema").InsertUser): Promise<import("@shared/schema").User> {
        throw new Error("Method not implemented.");
    }
}

export const storage = new DatabaseStorage();