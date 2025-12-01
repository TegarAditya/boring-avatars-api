import { Hono } from "hono";
import { renderToStaticMarkup } from "react-dom/server";
import { sValidator } from "@hono/standard-validator";
import { type } from "arktype";
import Avatar from "boring-avatars";
import React from "react";

const PORT = Number(process.env.PORT ?? 3000);

const schema = {
  params: type({
    name: "string",
  }),
  query: type({
    size: "(string.integer.parse)?",
    variant: "('marble' | 'beam' | 'pixel' | 'sunset' | 'ring' | 'bauhaus')?",
  }),
};

const app = new Hono();

app.get(
  "/avatar/:name",
  sValidator("param", schema.params),
  sValidator("query", schema.query),
  (c) => {
    const { name } = c.req.valid("param");
    const { size = 40, variant = "beam" } = c.req.valid("query");

    const svg = renderToStaticMarkup(
      React.createElement(Avatar, {
        size,
        name,
        variant,
      })
    );

    return c.body(svg, 200, {
      "Content-Type": "image/svg+xml",
    });
  }
);

export default {
  port: PORT,
  fetch: app.fetch,
};
