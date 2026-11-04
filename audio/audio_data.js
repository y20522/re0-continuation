// audio_data.js — for re0-continuation
// Put this file at: audio/audio_data.js  (in the repo root's audio folder)
// The game loads it with: <script src="audio/audio_data.js"></script>
// and looks up BGM / SE by name in window.AUDIO_DATA.
// BGM files are in audio/bgm/, SE / ambient files are in audio/se/.
// lv is a volume multiplier (1 = default). Adjust it per track if needed.

window.AUDIO_DATA = {
  bgm: {
    title:   { f: "title.mp3",   lv: 1 },
    forest:  { f: "forest.mp3",  lv: 1 },
    tension: { f: "tension.mp3", lv: 1 },
    sorrow:  { f: "sorrow.mp3",  lv: 1 },
    danger:  { f: "danger.mp3",  lv: 1 },
    horror:  { f: "horror.mp3",  lv: 1 },
    warm:    { f: "warm.mp3",    lv: 1 },
    shudraq: { f: "shudraq.mp3", lv: 1 },
    guaral:  { f: "guaral.mp3",  lv: 1 }
  },
  se: {
    // Ambient loops (used with @amb)
    amb_forest:    { f: "amb_forest.mp3",    lv: 1 },
    amb_night:     { f: "amb_night.mp3",     lv: 1 },
    amb_waterfall: { f: "amb_waterfall.mp3", lv: 1 },
    // One-shot sound effects (used with @se)
    arrow_hit:   { f: "arrow_hit.mp3",   lv: 1 },
    arrow_whoosh: { f: "arrow_whoosh.mp3", lv: 1 },
    bow_draw:    { f: "bow_draw.mp3",    lv: 1 },
    crawl:       { f: "crawl.mp3",       lv: 1 },
    dagger:      { f: "dagger.mp3",      lv: 1 },
    fall_thud:   { f: "fall_thud.mp3",   lv: 1 },
    footsteps:   { f: "footsteps.mp3",   lv: 1 },
    gasp_wake:   { f: "gasp_wake.mp3",   lv: 1 },
    grab:        { f: "grab.mp3",        lv: 1 },
    heartbeat:   { f: "heartbeat.mp3",   lv: 1 },
    kneel:       { f: "kneel.mp3",       lv: 1 },
    rbd:         { f: "rbd.mp3",         lv: 1 },
    rumble:      { f: "rumble.mp3",      lv: 1 },
    run:         { f: "run.mp3",         lv: 1 },
    rustle:      { f: "rustle.mp3",      lv: 1 },
    snake:       { f: "snake.mp3",       lv: 1 },
    splash:      { f: "splash.mp3",      lv: 1 },
    stagger:     { f: "stagger.mp3",     lv: 1 },
    tackle:      { f: "tackle.mp3",      lv: 1 },
    teleport:    { f: "teleport.mp3",    lv: 1 },
    torch:       { f: "torch.mp3",       lv: 1 },
    trap:        { f: "trap.mp3",        lv: 1 },
    underwater:  { f: "underwater.mp3",  lv: 1 }
  }
};
