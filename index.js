const  Discord  =  require ( ' Discord.js ' );
 client  const =  new  Discord.Client ();
préfixe var =  ' ! ' ;

client . on ( " prêt " , () => {

    console . log ( " Je suis prêt! " );
    client . utilisateur . setGame ( " ! help " );

});

client . login ( ' NTI3OTczNDMwOTA2MDYwODAy.DwqpsQ.fkYPqlwtxZSr5z-NcctOqmACrlM ' );

client . sur ( ' message ' , message  => {
    if ( message . content  ===  " ! twitter " )
        message . canal . sendMessage ( ' Twitter du Discord: https://twitter.com/LaFranceDeFort1 ' );
        console . log ( ' lien twitter ' )
});

client . sur ( ' message ' , message  => {
    if ( message . content  ===  " ! youtube " )
        message . canal . sendMessage ( ' YouTuBe du Discord: https://www.youtube.com/channel/UC0KPlzbTKQhZzHITyljYotw?view_as=subscriber ' )
        console . log ( ' lien youtube ' )
});

client . sur ( ' message ' , message  => {
    if ( message . content  ===  " ! twitch " )
        message . canal . sendMessage ( ' Twitch du Discord: https://www.twitch.tv/lafrancedefortnite ' )
        console . log ( ' lien twitch ' )
});

client . sur ( ' message ' , message  => {
    if ( message . content  ===  " ! bebert " )
        message . canal . sendMessage ( " Bebert est le responsable du ** Discord **, il a 14 ans et il est célibataire! " )
        console . log ( ' bebert ' )
});

client . sur ( ' message ' , message  => {
    if ( message . content  ===  " ! help " )
        var fun_embed =  new  Discord.RichEmbed ()
        . setColor ( ' # ff0000 ' )
        . setTitle ( ` : pushpin: Commande utile du Discord! ` )
        . addField ( " ! twitter " , " Twitter du Discord " )
        . addField ( " ! twitch " , " Twitch du Discord " )
        . addField ( " ! youtube " , " YouTuBe du Discord " )
        . addField ( " ! fortnitelien " , " Lien utile Fortnite " )
        message . canal . send (fun_embed);
});

client . sur ( ' message ' , message  => {
    if ( message . content  ===  " ! fortnitelien " )
        var fun_embed =  new  Discord.RichEmbed ()
        . setColor ( ' # ffcb00 ' )
        . setTitle ( ' : boom: Lien utile Fortnite ' )
        . addField ( " : point_right: Toutes les actualités fornite: " , " https://www.epicgames.com/fortnite/fr/news " )
        . addField ( " : point_right: Boutique entière (en anglais): " , " https://fnbr.co/shop " )
        . addField ( " : point_right: Twitter France fornite: " , " https://twitter.com/FortniteFR " )      
        message . canal . send (fun_embed);
});

client . sur ( ' message ' , message  => {
    if ( message . content  === préfixe +  " modo " ) {
        var mod_embed =  new  Discord.RichEmbed ()
        . setColor ( ' # 0090ff ' )
        . setTitle ( ' : tools: Voici les commandes modérations! ' )
        . addField ( " ! kick <@user> " , " Kick utilisateur mentionné " )
        . addField ( " ! ban <@user> " , " un utilisateur mentionné " )
        . addField ( " ! clear nombre " , " Supprime le nombre de messages indiqué " )
        . addField ( " ! mute <@user> " , " Mute l'utilisateur mentionné " )
        . addField ( " ! unmute <@user> " , " Unmute utilisateur précédent " )
         message . canal . send (mod_embed);
    }
});

client . sur ( ' message ' , message  => {
    if ( message . content  === préfixe +  " info " ) {
        var info_embed =  new  Discord.RichEmbed ()
        . setColor ( " # fd0071 " )
        . setTitle ( " Informations du serveur! " )
        . addField ( " Nombre de membres " , message . guilde . membres . taille )
        . addField ( " Nombre de catégories et de salons " , message . guilde . canaux . taille )
        message . canal . sendMessage (info_embed)
        console . log ( " Commande d'info " )
    }
});

client . sur ( ' guildMemberAdd ' , membre  => {
    let embed =  new  Discord.RichEmbed ()
        . setColor ( ' # 33cc33 ' )
        . setDescription ( ' Hey '  +  membre . utilisateur  +  ' , bienvenue sur ** La France De Fortnite **: tada:: étreignant:! ' )
        . setFooter ( ' Nous sommes désormais '  +  membre . guilde . membreCount )
    membre . guilde . canaux . get ( ' 519294938102366250 ' ). envoyer (intégrer)
    membre . addRole ( ' Membre ' )
 
});
 
client . sur ( ' guildMemberRemove ' , membre  => {
    let embed =  new  Discord.RichEmbed ()
        . setColor ( ' # ff0000 ' )
        . setDescription ( membre . user  +  ' viens de quitter le serveur!: léger_frown: ' )
        . setFooter ( ' Nous sommes désormais '  +  membre . guilde . membreCount )
    membre . guilde . canaux . get ( ' 519294938102366250 ' ). envoyer (intégrer)
 
});

client . sur ( ' message ' , message  => {
    if ( message . content . startsWith (préfixe +  " kick " )) {
        if ( ! message . guild . member ( message . auteur ). hasPermission ( " KICK_MEMBERS " )) renvoie le  message . canal . send ( " Vous n'avez pas la permission! " );

     if ( message . mentionne . utilisateurs . taille  ===  0 ) {
         renvoyer le  message . canal . send ( " Vous devez métrer un utilisaeur " )
     }
     var kick =  message . guilde . membre ( message . mentions . utilisateurs . first ());
      si ( ! kick) {
         renvoyer le  message . canal . send ( " Je ne sais pas si existe existe: / " )
       }

      if ( message . guild . member ( client . utilisateur ). hasPermission ( " KICK_MEMBERS " )) {
          renvoyer le  message . canal . send ( " Je n'ai pas la permission pour kick " );
      }

      coup de pied . coup de pied (). alors ( membre  => {
         message . canal . send ( ` $ { membre . utilisateur . nom_utilisateur } est kick pas $ { message . auteur . nom_utilisateur } ` );
     });
    }

    if ( message . content . startsWith (préfixe +  " ban " )) {
      if ( ! message . guild . member ( message . auteur ). hasPermission ( " BAN_MEMBERS " )) renvoie le  message . canal . envoyer ( " Vous n'avez pas la perission " );

       if ( message . mentionne . utilisateurs . taille  ===  0 ) {
            renvoyer le  message . canal . send ( " Vous devez mentionner un utilisateur " );
        }

      var ban =  message . guilde . membre ( message . mentions . utilisateurs . first ());
      si ( ! ban) {
            renvoyer le  message . canal . send ( " Je ne sais pas si l'utilisateur existe " );
     }

      if ( ! message . guild . member ( client . utilisateur ). hasPermission ( " BAN_MEMBERS " )) {
         renvoyer le  message . canal . send ( " Je n'ai pas la permission pour ban " );
      }
       interdire . ban (). alors ( membre  => {
         message . canal . send ( ` $ { membre . utilisateur . nomutilisateur } est interdit par $ { message . auteur . nomutilisateur } ! ` )
     });
    
    }

    if ( message . content . startsWith (préfixe +  " effacer " )) {
       if ( ! message . guild . member ( message . auteur ). hasPermission ( " MANAGE_MESSAGE " )) renvoie le  message . canal . send ( " Vous n'avez pas la permission! " );

      laissez args =  message . contenu . scission ( "  " ). tranche ( 1 );

      if ( ! args [ 0 ]) renvoie un  message . canal . send ( "Vous devez préciser un nombre de messages à supprimer! " )
      message . canal . bulkDelete (args [ 0 ]). then (() => {
          message . canal . send ( ` $ { args [ 0 ] } messages ont été supprimés! ` );
        });
    }

    if ( message . content . startsWith (préfixe +  " mute " )) {
        if ( ! message . guild . member ( message . auteur ). hasPermission ( " ADMINISTRATOR " )) renvoie le  message . canal . send ( " Vous n'avez pas la permission! " );

        if ( message . mentionne . utilisateurs . taille  ===  0 ) {
            renvoyer le  message . canal . send ( ' Vous devez mentionner un utilisateur! ' );
        }

        var mute =  message . guilde . membre ( message . mentions . utilisateurs . first ());
     si ( ! muet) {
            renvoyer le  message . canal . send ( " Je n'ai pas trouvé l'utilisateur ou l'existe pas! " );
        }

        if ( ! message . guild . member ( client . utilisateur ). hasPermission ( " ADMINISTRATOR " )) renvoie le  message . canal . send ( " Je n'ai pas la permission! " );
        message . canal . overwritePermissions (muet, { SEND_MESSAGES :  false }). alors ( membre  => {
            message . canal . send ( ` $ { mute . user . nom_utilisateur } est mute! ` );
        });
    }

    if ( message . content . startsWith (préfixe +  " unmute " )) {
        if ( ! message . guild . member ( message . auteur ). hasPermission ( " ADMINISTRATOR " )) renvoie le  message . canal . send ( " Vous n'avez pas la permission! " );

        if ( message . mentionne . utilisateurs . taille  ===  0 ) {
         renvoyer le  message . canal . send ( ' Vous devez mentionner un utilisateur! ' );
        }

        var mute =  message . guilde . membre ( message . mentions . utilisateurs . first ());
        si ( ! muet) {
            renvoyer le  message . canal . send ( " Je n'ai pas trouvé l'utilisateur ou l'existe pas! " );
        }

        if ( ! message . guild . member ( client . utilisateur ). hasPermission ( " ADMINISTRATOR " )) renvoie le  message . canal . send ( " Je n'ai pas la permission! " );
        message . canal . overwritePermissions (muet, { SEND_MESSAGES :  true }). alors ( membre  => {
            message . canal . send ( ` $ { mute . user . username } n'est plus mute! ` );
        });
    }
});

client . sur ( ' message ' , message  => {
    si ( ! message . guilde ) retour
    laissez args =  message . contenu . trim (). scission ( /  + / g )
 
    if (args [ 0 ]. toLocaleLowerCase () === préfixe +  ' kick ' ) {
       if ( ! message . membre . hasPermission ( ' KICK_MEMBERS ' )) renvoie le  message . canal . send ( " Vous n'avez pas la permission d'utiliser cette commande; ( " )
       let member =  message . mentions . membres . premier ()
       si ( ! membre) renvoie le  message . canal . send ( " Veuillez mentionner un utilisateur: x: " )
       si ( membre . highestRole . calculatedPosition  > = un  message . membre . highestRole . calculatedPosition  && un  message . auteur . id  ! ==  messages . guilde . propriétaire . id ) retour un  message . canal . send ( " Vous ne pouvez pas utiliser cet utilisateur: x: " )
       if ( ! member . kickable ) renvoie le  message . canal . send ( " Pas assez puissant pour cette commande: coeur: " )
       membre . coup de pied ()
       message . canal . send ( " ** " + membre . utilisateur . nomutilisateur  +  ' ** a été exclu avec succès: white_check_mark: ' )
    }
});

client . sur ( ' message ' , message  => {
    si ( ! message . guilde ) retour
    laissez args =  message . contenu . trim (). scission ( /  + / g )
 
    if (args [ 0 ]. toLocaleLowerCase () === préfixe +  ' ban ' ) {
       if ( ! message . membre . hasPermission ( ' BAN_MEMBERS ' )) renvoie le  message . canal . send ( " Vous n'avez pas la permission d'utiliser cette commande; ( " )
       let member =  message . mentions . membres . premier ()
       si ( ! membre) renvoie le  message . canal . send ( " Veuillez mentionner un utilisateur: x: " )
       si ( membre . highestRole . calculatedPosition  > = un  message . membre . highestRole . calculatedPosition  && un  message . auteur . id  ! ==  messages . guilde . propriétaire . id ) retour un  message . canal . send ( " Vous ne pouvez pas bannir cet utilisateur: x: " )
       if ( ! member . bannable ) renvoie le  message . canal . send ( " Pas assez puissant pour cette commande: coeur: " )
       message . guilde . ban (membre, {jours :  7 })
       message . canal . send ( " ** " + membre . utilisateur . nomutilisateur  +  ' ** a été banni avec succès: white_check_mark: ' )
    }
});

client . sur ( ' message ' , message  => {
    if ( message . content  ===  " ! azvox " )
        message . canal . sendMessage ( " Azvox est l'un des fondateurs du ** Discord **, il a 14 ans et il est célibataire! " )
        console . log ( ' Commande Azvox ' )
});

client . sur ( ' message ' , message  => {
    if ( message . content  ===  " ! strictix " )
        message . canal . sendMessage ( " Stricix est le plus beau des fondateurs du ** Discord **, il a 15 ans et il est célibataire! " )
        console . log ( ' Commande Stricix ' )
});
