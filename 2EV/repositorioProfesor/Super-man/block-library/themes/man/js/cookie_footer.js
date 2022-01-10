var COOKIE_POLICY_ACCEPT = 'YES';
var COOKIE_POLICY_DECLINE = 'NO';

if (!Date.now) {
    Date.now = function () {
        "use strict";
        return new Date().getTime();
    };
}

function supportsLocalStorage() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}

jQuery(document).ready(function($) {

	var cookiePolicy = {

        extendInfoLink : {
            "EN":   "/privacy",
            "IT":   "/cookie-policy"
        },

        shortInfo : function(){

            var lang = this.detectLanguage();

            switch (lang) {
                case "IT":
                    return  "Questo sito utilizza cookie tecnici e di profilazione di terze parti. Navigando nel sito accetti la nostra <a href=\""+
                            this.extendInfoLink["IT"]+
                            "\" class=\"extendedInfoLink\">Privacy policy</a>";
                case "EN":
                default:
                    return  "This website use technical and third-part profiling cookie. Navigating on this website You accept our <a href=\""+
                            this.extendInfoLink["EN"]+
                            "\" class=\"extendedInfoLink\">Privacy policy</a>";

            }
        },

        hasPolicyPage: true,


/*						funzioni di controllo						*/
		detectUserPreference : function() {
            if(supportsLocalStorage() === false) {
                return false;
            }

			var preference = ("cookiePolicyPreference" in localStorage) ? localStorage.cookiePolicyPreference : false;

			if(preference!=false && preference!=COOKIE_POLICY_DECLINE) {
				preference = this.detectUserPreferenceExpire();
			}



            if(preference==COOKIE_POLICY_ACCEPT) {
                return true;
            } else {
                this.deletePreference();
                return false;
            }
		},

		detectUserPreferenceExpire : function() {
			if(supportsLocalStorage()) {
				var preferenceExpire = ("cookiePolicyPreferenceExpire" in localStorage) ? localStorage.cookiePolicyPreferenceExpire : false;
				if(preferenceExpire != false) {

					if(Date.now() > parseInt(preferenceExpire)) {
						this.deletePreference();
					} else {
						return COOKIE_POLICY_ACCEPT;
					}
				}
			}

			return false;
		},

		//per i siti i18n deve essere iniettato nel prototipo
		detectLanguage : function() { return 'IT'; },

/*							funzioni di azione						*/
		deletePreference : function() {
			if(supportsLocalStorage()) {
				localStorage.removeItem("cookiePolicyPreference");
				localStorage.removeItem("cookiePolicyPreferenceExpire");
			}
		},

		acceptCookiePolicy : function() {
			if(supportsLocalStorage()) {
				localStorage.cookiePolicyPreference = COOKIE_POLICY_ACCEPT;
				localStorage.cookiePolicyPreferenceExpire = Date.now() + (1000*60*60*24*365);
			}
            this.killFixedFooter();
        },

		declineCookiePolicy : function() {
			this.deletePreference();
		},


/*                          funzioni di gestione                    */

        showFixedFooter : function() {
            $('#cookieShortInfoFooter').slideDown();
        },

        killFixedFooter : function() {
            $('#cookieShortInfoFooter').slideUp().remove();
        },

        bindUIEvents : function() {

            if($.fn.jquery > 1.7) {

                /*
                 $('body').on('click', 'a', function() {
                 this.acceptCookiePolicy();
                 });
                 */

                /*
                 $('body').on('scroll', function() {
                 this.acceptCookiePolicy();
                 });
                 */

                $('body').on('click', '#cookieShortInfoFooter a.acceptCookie', function() { cookiePolicy.acceptCookiePolicy(); });

                if(this.hasPolicyPage===false) {
                    $('body').on('click', '#cookieShortInfoFooter a.extendedInfoLink', function() {
                        cookiePolicy.generatePrivacyPolicyModal();
                        return false;
                    });
                }

            } else {
                $('#cookieShortInfoFooter a.acceptCookie').bind('click', function() { cookiePolicy.acceptCookiePolicy(); });

                if(this.hasPolicyPage===false) {
                    $('#cookieShortInfoFooter a.extendedInfoLink').bind('click', function() {
                        cookiePolicy.generatePrivacyPolicyModal();
                        return false;
                    });
                }
            }
        },

        generateFixedFooter : function() {
            var fixedFooterHTML =
                '<div class="cookie" id="cookieShortInfoFooter" style="display: none;">' +
                    '<div class="container">' +
                        '<p>' + this.shortInfo() + '</p>' +
                        '<a href="javascript:void(0);" class="btn acceptCookie">OK</a>' +
                    '</div>' +
                '</div>';

            $('body').append(fixedFooterHTML);
            this.showFixedFooter();
            this.bindUIEvents();
        },

        generatePrivacyPolicyModal : function() {
            var privacyPolicyModal =
                '<div id="privacyPolicyModal" class="customModal">' +
                    '<div class="container">' +
                        '<a class="dismiss" id="dismissPolicyModal">X</a>' +
                        '<div class="policyBody">' +
                            this.getI18nPolicy() +
                        '</div>' +
                    '</div>' +
                '</div>';

            $('body').append(privacyPolicyModal);
            $('#privacyPolicyModal').slideDown();

            if($.fn.jquery > 1.7) {
                $('body').on('click', '#dismissPolicyModal', function() {
                    cookiePolicy.killPrivacyPolicyModal();
                    return false;
                });
            } else {
                $('#dismissPolicyModal').bind('click', function() {
                    cookiePolicy.killPrivacyPolicyModal();
                    return false;
                });
            }

        },

        killPrivacyPolicyModal : function() {
            $('#privacyPolicyModal').slideUp().remove();
        },

        getI18nPolicy : function() {
            var lang = this.detectLanguage();
            var htmlPolicy = '';

            switch (lang) {
                case 'IT':
                    htmlPolicy = '<h2>Uso dei cookie</h2><p>Il nostro “Sito” utilizza i Cookie per rendere i propri servizi semplici e efficienti per l’utenza che visiona le pagine del sito stesso.<br />Gli utenti che visionano il Sito, vedranno inserite delle quantità minime di informazioni nei dispositivi in uso, che siano computer e periferiche mobili, in piccoli file di testo denominati “cookie” salvati nelle directory utilizzate dal browser web dell’Utente.<br />Vi sono vari tipi di cookie, alcuni per rendere più efficace l’uso del Sito, altri per abilitare determinate funzionalità.<br />Analizzandoli in maniera particolareggiata i nostri cookie permettono di:<br />•memorizzare le preferenze inserite<br />•evitare di reinserire le stesse informazioni più volte durante la visita quali ad esempio nome utente e password<br />•analizzare l’utilizzo dei servizi e dei contenuti forniti dal nostro sito per ottimizzarne l’esperienza di navigazione e i servizi offerti</p><h2>Tipologie di Cookie utilizzati</h2><p>A seguire i vari tipi di cookie utilizzati dal nostro sito in funzione delle finalità d’uso</p><h3>Cookie Tecnici</h3><p>Questa tipologia di cookie permette il corretto funzionamento di alcune sezioni del Sito. Sono di due categorie: persistenti e di sessione:<br />•persistenti: una volta chiuso il browser non vengono distrutti ma rimangono fino ad una data di scadenza preimpostata<br />•di sessioni: vengono distrutti ogni volta che il browser viene chiuso</p><p>Questi cookie, inviati sempre dal nostro dominio, sono necessari per visualizzare correttamente il sito ed in relazione ai servizi tecnici offerti, verranno quindi sempre utilizzati e inviati, a meno che l’utenza non modifichi le impostazioni nel proprio browser (inficiando così la visualizzazione delle pagine del sito).</p><h3>Cookie analitici</h3><p>I cookie in questa categoria vengono utilizzati per collezionare informazioni sull’uso del sito. Il nostro sito userà queste informazioni in merito ad analisi statistiche anonime al fine di migliorare l’utilizzo del Sito e per rendere i contenuti più interessanti e attinenti ai desideri dell’utenza. Questa tipologia di cookie raccoglie dati in forma anonima sull’attività dell’utenza e su come è arrivata sul Sito. I cookie analitici sono inviati dal Sito Stesso o da domini di terze parti.</p><h3>Cookie di analisi di servizi di terze parti</h3><p>Questi cookie sono utilizzati al fine di raccogliere informazioni sull’uso del Sito da parte degli utenti in forma anonima quali: pagine visitate, tempo di permanenza, origini del traffico di provenienza, provenienza geografica, età, genere e interessi ai fini di campagne di marketing. Questi cookie sono inviati da domini di terze parti esterni al Sito.</p><h3>Cookie per integrare prodotti e funzioni di software di terze parti</h3><p>Questa tipologia di cookie integra funzionalità sviluppate da terzi all’interno delle pagine del Sito come le icone e le preferenze espresse nei social network al fine di condivisione dei contenuti del sito o per l’uso di servizi software di terze parti (come i software per generare le mappe e ulteriori software che offrono servizi aggiuntivi). Questi cookie sono inviati da domini di terze parti e da siti partner che offrono le loro funzionalità tra le pagine del Sito.</p><h3>Cookie di profilazione</h3><p>Sono quei cookie necessari a creare profili utenti al fine di inviare messaggi pubblicitari in linea con le preferenze manifestate dall’utente all’interno delle pagine del Sito.</p><p>Secondo la normativa vigente, non siamo tenuto a chiedere consenso per i cookie tecnici e di analytics, in quanto necessari a fornire i servizi richiesti.</p><p style="padding-left: 30px;">Per tutte le altre tipologie di cookie il consenso può essere espresso dall’Utente con una o più di una delle seguenti modalità:</p><p style="padding-left: 30px;">•Mediante specifiche configurazioni del browser utilizzato o dei relativi programmi informatici utilizzati per navigare le pagine che compongono il Sito.<br />•Mediante modifica delle impostazioni nell’uso dei servizi di terze parti</p><p>Entrambe queste soluzioni potrebbero impedire all’utente di utilizzare o visualizzare parti del Sito.</p><h3>Siti Web e servizi di terze parti</h3><p>Il Sito potrebbe contenere collegamenti ad altri siti Web che dispongono di una propria informativa sulla privacy che può essere diverse da quella adottata dal nostro sito e che che quindi non risponde di questi siti</p><h3>Cookie utilizzati dal nostro sito</h3><p>Cookie tecnici e di analytics</p><p><strong>Cookie di terze parti:</strong></p><p style="padding-left: 30px;">• Facebook:</p><p style="padding-left: 60px;">◦ datr – persistente</p><p style="padding-left: 30px;"></p><h3>Come disabilitare i cookie mediante configurazione del browser</h3><p style="padding-left: 30px;"><strong>Chrome</strong><br />•Eseguire il Browser Chrome<br />•Fare click sul menù presente nella barra degli strumenti del browser a fianco della finestra di inserimento url per la navigazione<br />•Selezionare Impostazioni Mostra Impostazioni Avanzate<br />•Nella sezione “Privacy” fare clic su bottone “Impostazioni contenuti“<br />•Nella sezione “Cookie” è possibile modificare le seguenti impostazioni relative ai cookie:<br />•Consentire il salvataggio dei dati in locale<br />•Modificare i dati locali solo fino alla chiusura del browser<br />•Impedire ai siti di impostare i cookie<br />•Bloccare i cookie di terze parti e i dati dei siti<br />•Gestire le eccezioni per alcuni siti internet<br />•Eliminazione di uno o tutti i cookie</p><p style="padding-left: 30px;">Per maggiori informazioni visita la pagina dedicata</p><p style="padding-left: 30px;"><strong>Mozilla</strong><br />•Eseguire il Browser Mozilla Firefox<br />•Fare click sul menù presente nella barra degli strumenti del browser a fianco della finestra di inserimento url per la navigazione<br />•Selezionare Opzioni<br />•Selezionare il pannello Privacy<br />•Fare click su Mostra Impostazioni Avanzate<br />•Nella sezione “Privacy” fare clic sul bottone “impostazioni contenuti”<br />•Nella sezione “Tracciamento” è possibile modificare le seguenti impostazioni relative ai cookie<br />•Richiedi ai siti di non effettuare alcun tracciamento<br />•Comunica ai siti la disponibilità ad essere tracciato<br />•Non comunicare alcuna preferenza relativa al tracciamento dei dati personali<br />•Dalla sezione “Cronologia” è possibile:<br />•Abilitando “Utilizza impostazioni personalizzate” selezionare di accettare i cookie di terze parti (sempre, dai siti più visitato o mai) e di conservarli per un periodo determinato (fino alla loro scadenza, alla chiusura di Firefox o di chiedere ogni volta)<br />•Rimuovere i singoli cookie immagazzinati</p>                <p style="padding-left: 30px;">Per maggiori informazioni visita pagina dedicata</p><p style="padding-left: 30px;"><strong>Internet Explorer</strong><br />•Eseguire il browser Internet Explorer<br />•Fare clic sul pulsante Strumenti e scegliere “Opzioni Internet”<br />•Fare clic su scheda “Privacy” e nella sezione impostazioni modificare il dispositivo di scorrimento in funzione dell’azione desiderata per i cookie<br />•Bloccare tutti i cookie<br />•Consentire tutti i cookie<br />•Selezione dei siti da cui ottenere cookie: spostare il cursore in una posizione intermedia in modo da non bloccare o consentire tutti i cookie, premere quindi su Siti, nella casella Indirizzo Sito Web inserire un sito internet e quindi premere su Blocca o Consenti</p><p style="padding-left: 30px;">Per maggiori informazioni visita pagina dedicata</p><p style="padding-left: 30px;"><strong>Safari 6</strong><br />1.Eseguire il Browser Safari<br />2.Fare click su Safari, selezionare Preferenze e premere su Privacy<br />3.Nella sezione Blocca Cookie specificare come Safari deve accettare i cookie dai siti internet.<br />4.Per visionare quali siti hanno immagazzinato i cookie cliccare su Dettagli</p><p style="padding-left: 30px;">Per maggiori informazioni visita la pagina dedicata.</p><p style="padding-left: 30px;"><strong>Safari iOS (dispositivi mobile)</strong><br />1.Eseguire　il Browser Safari iOS<br />2.Tocca　su　Impostazioni e poi Safari<br />3.Tocca su Blocca Cookie e scegli tra le varie opzioni: “Mai”, “Di terze parti e inserzionisti” o “Sempre”<br />4.Per cancellare tutti i cookie immagazzinati da Safari, tocca su Impostazioni, poi su Safari e infine su Cancella Cookie e dati</p><p style="padding-left: 30px;">Per maggiori informazioni visita pagina dedicata</p><p style="padding-left: 30px;"><strong>Opera</strong><br />•Eseguire il Browser Opera<br />•Fare clic su “Preferenze” e su “Avanzate” e infine “Cookie”<br />•Selezionare una delle seguenti opzioni<br />•Accetta tutti i cookie<br />•Accetta i cookie solo dal sito che si visita: i cookie di terze parti e che vengono inviati da un dominio diverso da quello che si sta visitando verranno rifiutati<br />•Non accettare mai i cookie: tutti i cookie non verranno mai salvati</p><p style="padding-left: 30px;">Per maggiori informazioni visita pagina dedicata</p><h3>Come disabilitare i cookie di servizi di terzi</h3><p style="padding-left: 30px;">◦Servizi di Google<br />◦Facebook<br />◦Twitter</p>';
                break;
                case 'EN':
                default:
                    htmlPolicy = '';

            }

            return htmlPolicy;
        },

		fire : function() {
            if(this.detectUserPreference()!==true) {
                this.generateFixedFooter();
            }
        }

	};

    cookiePolicy.fire();

});