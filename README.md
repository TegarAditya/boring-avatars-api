# Self-Hosted Boring Avatars API

A lightweight API for generating SVG avatars using the open-source Boring Avatars React library — but without React on the client.
Powered by Hono, React DOM Server, and Bun. This project lets you generate `boring avatars` as server-rendered SVG.

## 🛠 Installation

### Using Bun
```bash
bun install

# using development server
bun dev

# using bun run
bun run ./src/index.ts
```

### Using Docker Compose
```bash
docker compose up -d
```
Server will run at http://localhost:3000

## 🚀 API Usage
```
GET /avatar/:name
```
Available query parameters:
| Param     | Type   | Default | Description                                                           |
| --------- | ------ | ------- | --------------------------------------------------------------------- |
| `variant` | string | `beam`  | Avatar style (`beam`, `pixel`, `marble`, `sunset`, `ring`, `bauhaus`) |
| `size`    | number | `120`   | Width/height of the avatar                                            |

Example:
```
http://localhost:3000/avatar/tegar?variant=pixel&size=200
```

## 📄 License

MIT — free for personal & commercial use.