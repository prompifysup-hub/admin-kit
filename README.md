# prompify-admin-kit

The components of Marmelab's shadcn-admin-kit (`components/admin` and `components/ui`, MIT — see
`LICENSE`), built and packaged for Prompify's Warehouse template. Keeping them in a package instead of
in the template means the AI does not have to read ~1 MB of component code on every generation.

Changes from shadcn-admin-kit: the sidebar shows the app's `<Admin title>`, and edit / delete write
immediately (no 5-second undo window, which a preview reload would lose).

## How templates install it

```json
"prompify-admin-kit": "https://cdn.jsdelivr.net/gh/prompifysup-hub/admin-kit@v1.0.0/prompify-admin-kit-1.0.0.tgz"
```

jsDelivr serves the `.tgz` in this repo with the CORS headers the in-browser preview (WebContainer)
needs. Pin a tag, never a branch.

## Releasing a new version

1. Put the new build in `dist/`, bump `version` in `package.json`.
2. `npm pack` → `prompify-admin-kit-<version>.tgz` (commit it; remove the old one).
3. Commit, tag `v<version>`, push the tag.
4. Change the URL in each template's `package.json` and run `npm install` there.

`dist/` was rebuilt on 2026-11-27 from the installed copy (the original source folder was deleted).
