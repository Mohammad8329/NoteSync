**Use Case Diagram — NoteSync2**

Overview
- This diagram shows the main actors and use cases for the `notesync2` application (document creation/editing, real-time collaboration, AI features, and account management).

Files
- `docs/usecase.puml` — PlantUML source for the use-case diagram.

How to render
- Option A: VS Code — install the "PlantUML" extension (jebbs.plantuml) and open `usecase.puml`. Use the PlantUML preview to export PNG/SVG.
- Option B: Command line (requires PlantUML and Java):

```powershell
# move to project dir
cd .\notesync2\docs
# render to PNG (requires plantuml.jar and java)
java -jar path\to\plantuml.jar usecase.puml
```

- Option C: Use the PlantUML web server or online editor: https://plantuml.com/ or https://www.planttext.com/

Notes & suggestions
- Actors: `Guest`, `Registered User`, `Document Owner`, and `External AI` (OpenAI / Workers AI). Owner is a special case of a User with extra rights.
- Use cases are grouped by responsibility: Document Management, Collaboration, AI Features, Account & Workspace.
- If you'd like, I can:
  - Generate a PNG or SVG here and add it to the repo (if you want me to try rendering locally), or
  - Expand the diagram with more detailed permission flows, or
  - Convert it to Mermaid if you prefer that format.
