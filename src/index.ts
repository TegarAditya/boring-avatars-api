import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { secureHeaders } from "hono/secure-headers";
import { renderToStaticMarkup } from "react-dom/server";
import { sValidator } from "@hono/standard-validator";
import { type } from "arktype";
import { nanoid } from "nanoid";
import Avatar from "boring-avatars";
import React from "react";

const PORT = Number(process.env.PORT ?? 3000);

const schema = {
  query: type({
    "name?": "string",
    "size?": "string.integer.parse",
    "variant?": "'marble' | 'beam' | 'pixel' | 'sunset' | 'ring' | 'bauhaus'",
    "colors?": type("string").pipe((val: string) =>
      val.split(",").map((s) => {
        const t = s.trim();
        return t.startsWith("#") ? t : `#${t}`;
      })
    ),
    "square?": type("'true' | 'false'").pipe((val) => val === "true"),
  }),
};

const app = new Hono();

app.use(cors());
app.use(logger());
app.use(secureHeaders({ crossOriginResourcePolicy: "cross-origin" }));

app.get("/", sValidator("query", schema.query), (c) => {
  const { name, size, variant, colors, square } = c.req.valid("query");

  const svg = renderToStaticMarkup(
    React.createElement(Avatar, {
      size,
      name: name ?? nanoid(),
      variant,
      colors,
      square,
    })
  );

  return c.body(svg, 200, {
    "Content-Type": "image/svg+xml",
  });
});

export default {
  port: PORT,
  fetch: app.fetch,
};
