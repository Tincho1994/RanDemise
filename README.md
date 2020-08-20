# RanDemise
A tabletop RPG toolbox focused on encounter management for DMs and Players alike.

Functionality:

MVP: Improved intiative but with a map, token control, custom map upload and grid creation

TODO
- [ ] improved iniative tracker - Martín
- [ ] backend json data storage for map/ tokens - Martín
- [ ] saving and loading objects froma  database - Brendan
- [ ] AWS hosting - Brendan
- [ ] websockets revamp
    - [ ] Serverside event handling
    - [ ] Client side event handling
- [x] map uploader w grid generation - Martin
    - [x] incorporate zoom on upload tool https://github.com/d3/d3-zoom - Martin
- [x] Token uploader and removal tool - Martin
    - [x] make elements draggable
    - [x] uploader for custom elements
    - [x] removal of tokens
- [ ] Token visuals - Martín
    - [ ] Sub API for tokens - adding colored borders, grayscale ETC.
    - [ ] Selection shadow/ border
- [x] Restructure the dangass map/ main svg to actually have an architecture and not just be a bunch of floating objects - Martin
- [ ] Unique instance on each load to allow for link sharing of sessions, like in improved intiative - Brendan
- [ ] Initiative tracking sidebar/ topbar -TBD

Encounter Map Overlay
- Upload of SVG files for custom maps and grid creation
- Upload of custom images for token creation
- Fog of war DM side control
- DM and player ping ability
- Initiative tracker
-  Status overlay

Player Token Interaction
- Spell AOE preview
- Movement preview

DM Encounter Management
- Autoroll attacks, saves, and specials for selected mobs
-  Pre-plan and upload monsters with stats and health for individual encounters
-  Spell/ ability preview

DM Profile - Brendan
-  Saved maps
-  Saved encounters
- Saved monsters
-  Saved party members
- Saved campaigns from DND Beyond for unique character IDs

Player Profile
- Join as available character from DM's saved playes
- Character favorited spells
- Spell list quick reference and drag/ drop reference on map
