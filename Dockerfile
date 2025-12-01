# stage 1
FROM oven/bun AS builder

WORKDIR /app

COPY . .

RUN bun install

RUN bun run compile

# stage 2
FROM gcr.io/distroless/cc-debian11 AS runtime

WORKDIR /app

COPY --from=builder /app/dist/ /app/

ENTRYPOINT ["/app/main"]

EXPOSE 3000