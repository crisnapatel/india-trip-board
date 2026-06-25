# India Trip Board

Static MVP for managing the Delhi/Jaipur wishlist.

## Run locally

Open `index.html` directly in a browser, or serve it:

```bash
python3 -m http.server 8080 -d site
```

Then open <http://localhost:8080>.

## Current behavior

- Browse all places from the trip context.
- Filter by city, category, status, or search text.
- Double-tap place cards to mark visited/unvisited.
- Visited places move to the bottom of the list.
- Toggle phone/desktop preview layout.

## Important limitation

This is intentionally backend-free and GitHub-Pages-friendly. Browser state is local
to each person.

Automatic live two-person sync will need a small backend later, e.g. Firebase,
Supabase, or a tiny authenticated API.
