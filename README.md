# Self-Hosted Boring Avatars API

A lightweight API for generating SVG avatars using the open-source Boring Avatars React library — but without React on the client.
Powered by Hono, React DOM Server, and Bun. This project lets you generate `boring-avatars` as server-rendered SVG (alternative for [paid API service](https://boringavatars.com/api-service)).

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
GET /?name={NAME}&variant={VARIANT}&size={SIZE}&colors={COLORS}&square=true
```

### Name
Use the name parameter to generate a unique avatar design. It can be the username, email or any random string.

```html
<img src="{CUSTOM_DOMAIN}/?name=Maria%20Mitchell" crossorigin>
```
### Variant
Use the variant parameter to change the theme of the avatar. The available variants are: `marble`, `beam`, `pixel`, `sunset`, `ring` and `bauhaus`.

```html
<img src="{CUSTOM_DOMAIN}/?variant=beam" crossorigin>
```
### Size
Use the size parameter to change the size of the avatar.

```html
<img src="{CUSTOM_DOMAIN}/?size=240" crossorigin>
```
### Colors
Use the colors parameter to change the color palette of the avatar.

```html
<img src="{CUSTOM_DOMAIN}/?colors=264653,2a9d8f,e9c46a,f4a261,e76f51" crossorigin>
```
### Square
Use the square parameter to make the avatar square.

```html
<img src="{CUSTOM_DOMAIN}/?square=true crossorigin>
```
### Random
If you just want to use random avatars without providing usernames, you can use the root endpoint. You will receive an SVG image with a 40*40px size and the marble variant.

```html
<img src="{CUSTOM_DOMAIN} crossorigin>
```

Example:
```
http://localhost:3000/?name=Mary%20Edwards&size=80&colors=0a0310,49007e,ff005b,ff7d10,ffb238&variant=beam
```

## 📄 License

MIT — free for personal & commercial use.