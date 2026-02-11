/*Currently a mess with dumb fail-through chekcing of the V9 and V10 datamodels. Would be a lot better with actual checking of the foundry versio and separated functions for each. Also, need more V9 testing.*/


export function newTurnChatMessage( character ){
    if (game.settings.get("lancer-combat-banner", "announceTurn")) {
      let chatData = {
        speaker: {
          alias: game.i18n.localize('ADA_COMBATBANNER.NextTurn')
        },
        type: CONST.CHAT_MESSAGE_TYPES.OOC,
        content: `${game.i18n.localize('ADA_COMBATBANNER.Activate')} ${character}`
      };
      if( game.users.find((u) => u.isGM && u.active).isSelf ) {
        ChatMessage.create(chatData);
      }
    }
}


export function newRoundChatMessage( roundNumber ){
  if (game.settings.get("lancer-combat-banner", "announceRound")) {
    let chatData = {
      speaker: {
        alias: game.i18n.localize('ADA_COMBATBANNER.NextRound')
      },
      type: CONST.CHAT_MESSAGE_TYPES.OOC,
      content: `${game.i18n.localize('ADA_COMBATBANNER.StartOfRound')}: ${roundNumber} `
    };
    if( game.users.find((u) => u.isGM && u.active).isSelf ) {
      ChatMessage.create(chatData);
    }
  }

}

export function getMechClass(actor) {
  
  if(actor.type == "npc" && actor.system.class?.system?.flavor && actor.system.class.system.flavor.length > 0 && actor.system.class.system.flavor.includes("[BANNER-DIALOG]")) {
    return actor.system.class.system.flavor.split("[BANNER-DIALOG]:").pop().split('</p>')[0];
  }

  if(actor.type == "mech" && actor.system.notes?.length > 0 && actor.system.notes.includes("[BANNER-DIALOG]")) { 
    console.log('Mech Notes:', actor.system.notes);

    return actor.system.notes.split("[BANNER-DIALOG]:").pop().split('</p>')[0];
  }

  if(actor.type == "pilot"  && actor.system.notes?.length > 0 && actor.system.notes.includes("[BANNER-DIALOG]")) {
    return actor.system.notes.split("[BANNER-DIALOG]:").pop().split('</p>')[0];
  }

  // Removed 7/22/2025 to patch for v12 - GarrettPT
  
  // if( game.data.release.generation != 11){
  //   console.error("This version of Lancer Combat Banner is only for V11");
  //   return "///";
  // }
  // if (actor.type == "npc") {
  //   let npcClass =  actor.items.find(e => {return e.type == "npc_class"})?.name || "npc";
  //   let npcTemplates = actor.items.filter(e => {return e.type == "npc_template"})
  //     .map(e => {return e.name})
  //     .join(" ");
  //   return npcTemplates + " " + npcClass;
  // } else if (actor.type == "mech") {
  //   return actor.name;
  // } else if (actor.type == "pilot") {
  //   return actor.name;
  // }
  return "///";
}

export function getCallsign(actor) {
  if (actor.type == "pilot") {
    if (actor.system?.callsign) {
      return actor.system.callsign;
    }
    if (actor.system.pilot.value.system.callsign) {
      return actor.system.pilot.value.system.callsign;
    }
    if (actor.name) {
      return actor.name;
    }
    if (actor.system.name) {
      return actor.system.name;
    }
  }
  if (actor.type == "mech") {
    let pilot = actor.system?.pilot?.value;
    if (pilot && pilot.system.callsign) {
      return pilot.system.callsign;
    } else if (pilot) {
      return pilot.system.name;
    } else {
      pilot = actor.system?.pilot?.value;
      if (pilot && pilot.system.callsign) {
        return pilot.system.callsign;
      } else if (pilot && pilot.name) {
        return pilot.name;
      }
    }
  }
  if (actor.name) {
    return actor.name;
  }
  if (actor.data.name) {
    return actor.system.name;
  }
  return "///";
}

export function isAddCombatantUpdate( previousCombat, combat ){
  return previousCombat && previousCombat.actorID == combat.combatant?.actorID && previousCombat.combatantCount != combat.combatants.size;
}
