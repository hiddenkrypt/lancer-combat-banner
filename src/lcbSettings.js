
export function buildSettings(){
  game.settings.register("lancer-combat-banner", "announceTurn", {
    name: "ADA_COMBATBANNER.Settings.announceTurn.Name",
    hint: "ADA_COMBATBANNER.Settings.announceTurn.Hint",
    scope: "world",
    config: true,
    type: Boolean,
    default: true
  });
  game.settings.register("lancer-combat-banner", "announceRound", {
    name: "ADA_COMBATBANNER.Settings.announceRound.Name",
    hint: "ADA_COMBATBANNER.Settings.announceRound.Hint",
    scope: "world",
    config: true,
    type: Boolean,
    default: true
  });
  game.settings.register("lancer-combat-banner", "toggleTokenImage", {
    name: "ADA_COMBATBANNER.Settings.toggleTokenImage.Name",
    hint: "ADA_COMBATBANNER.Settings.toggleTokenImage.Hint",
    scope: "world",
    config: true,
    type: Boolean,
    default: false
  });
  game.settings.register("lancer-combat-banner", "colorMode", {
    name: "ADA_COMBATBANNER.Settings.colorRules.Name",
    hint: "ADA_COMBATBANNER.Settings.colorRules.Hint",
    scope: "world",
    config: true,
    type: String,
    choices: {
        "user": "ADA_COMBATBANNER.Settings.colorRules.user",
        "default": "ADA_COMBATBANNER.Settings.colorRules.default",
        "side": "ADA_COMBATBANNER.Settings.colorRules.side"
    },
    default: "user"
  });
  ColorPicker.register("lancer-combat-banner", "defaultColor", {
    name: "ADA_COMBATBANNER.Settings.colors.default.Name",
    hint: "ADA_COMBATBANNER.Settings.colors.default.Hint",
    scope: 'world',
    config: true,
    default: "#008141"
  },{
    format: 'hexa',
    alphaChannel: true
  });    
  ColorPicker.register("lancer-combat-banner", "friendlyColor", {
    name: "ADA_COMBATBANNER.Settings.colors.friendly.Name",
    hint: "ADA_COMBATBANNER.Settings.colors.friendly.Hint",
    scope: 'world',
    config: true,
    default: "#008282"
  },{
    format: 'hexa',
    alphaChannel: true
  });    
  ColorPicker.register("lancer-combat-banner", "neutralColor", {
    name: "ADA_COMBATBANNER.Settings.colors.neutral.Name",
    hint: "ADA_COMBATBANNER.Settings.colors.neutral.Hint",
    scope: 'world',
    config: true,
    default: "#626262"
  },{
    format: 'hexa',
    alphaChannel: true
  });    
  ColorPicker.register("lancer-combat-banner", "hostileColor", {
    name: "ADA_COMBATBANNER.Settings.colors.hostile.Name",
    hint: "ADA_COMBATBANNER.Settings.colors.hostile.Hint",
    scope: 'world',
    config: true,
    default: "#a10000"
  },{
    format: 'hexa',
    alphaChannel: true
  });    
}