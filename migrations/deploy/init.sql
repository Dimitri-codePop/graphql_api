-- Deploy rando:init to pg

BEGIN;

CREATE TABLE "user" (
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "firstname" text NOT NULL,
    "lastname" text NOT NULL,
    "country_id" int NOT NULL REFERENCES
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz,
    "deleted_at"timestamptz
);

CREATE TABLE "country" (
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "label" text NOT NULL UNIQUE,
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz,
    "deleted_at"timestamptz
);

COMMIT;
