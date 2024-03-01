    CREATE TABLE "Atraccion" (
    "id" int PRIMARY KEY,
    "tickets" INT,
    "cost" FLOAT,
    "name" VARCHAR(255),
    "time" INT,
    "attraction_type_id" INT,
    "is_deleted" BOOLEAN
    );

    CREATE TABLE "TipoDeAtraccion" (
    "id" int PRIMARY KEY,
    "name" VARCHAR(255)
    );

    CREATE TABLE "Promocion" (
    "id" INT PRIMARY KEY,
    "promotion_type" VARCHAR(255),
    "pricing_strategy" VARCHAR(255),
    "cost_or_discount" FLOAT,
    "is_deleted" BOOLEAN
    );

    CREATE TABLE "Atraccion_Promocion" (
    "atraccion_id" int,
    "promocion_id" int,
    PRIMARY KEY ("atraccion_id", "promocion_id")
    );

    CREATE TABLE "Usuario" (
    "id" int PRIMARY KEY,
    "username" VARCHAR(255),
    "password" VARCHAR(255),
    "gold" float,
    "available_time" int,
    "preferred_attraction_type_id" int,
    "is_admin" BOOLEAN
    );

    CREATE TABLE "Itinerario" (
    "id" int PRIMARY KEY,
    "usuario_id" INT,
    "atraccion_id" INT
    );

    ALTER TABLE "Atraccion" ADD FOREIGN KEY ("attraction_type_id", "id") REFERENCES "Atraccion_Promocion" ("atraccion_id", "promocion_id");

    ALTER TABLE "Promocion" ADD FOREIGN KEY ("id") REFERENCES "Atraccion_Promocion" ("promocion_id");

    ALTER TABLE "Usuario" ADD FOREIGN KEY ("id") REFERENCES "Itinerario" ("id");

    ALTER TABLE "Atraccion" ADD FOREIGN KEY ("id") REFERENCES "Itinerario" ("id");
