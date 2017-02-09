on('ready',function(){
    var parrotName = 'Polly',
        words,
           defaultWord = 'I am a leaf on the wind. Watch how I soar',
        stopWords = ['the','a','an','i','is','am','be','he','she','it','him','her','his','hers',"?",".","!"];
        
    on('chat:message',function(msg){
        if('general' === msg.type && parrotName !== msg.who && '' !== msg.who && msg.type !== "api"  ){
			speaker = msg.who;
			words = msg.content.split(/\s+/);
			echo = (_.shuffle(_.difference(words,stopWords))[0]||defaultWord);
			
			var rand = randomInteger(10)/3;
			var integ = Number.isInteger(rand);
			var RAWWWK = "";
			if(integ === true) RAWWWK = "RAWWWK!";
			
			switch(echo) {
				case 'Polly':
					sendChat('', '/em ' + parrotName + ' cocks his head sideways.');
					sendChat(parrotName,'"Beatrice... not Polly!"');
					break;
				case 'cracker!':
				case 'cracker.':
				case 'cracker?':
				case 'cracker':
					sendChat('', '/em ' + parrotName + ' hops and flaps his wings excitedly.');
					sendChat(parrotName,'"'+ echo + '? ' + RAWWWK + ' Yes please!" ');
					break;
				case 'dead?':
					sendChat('', '/em ' + parrotName + ' hops and flaps his wings excitedly.');
					sendChat(parrotName,'"'+ echo + '?"... Woe, destruction, ruin, and decay, the worst is death, and death will have his day."');
					break;
				case 'apple':
					sendChat('', '/em ' + parrotName + ' bobs his head.');
					sendChat(parrotName,'"How ya like dem apples?"');
					break;
				case 'kill':
					sendChat('', '/em ' + parrotName + ' hides his head behind a brightly plumed wing.');
					sendChat(parrotName,'"Guy killed me, Mal. He killed me with a sword. How weird is that?" RAWWWK!');
					break;
				case 'die':
					sendChat('', '/em ' + parrotName + ' extends the pin feathers of one wing toward ' + speaker + '...');
					sendChat(parrotName,'"Ive seen things you people wouldnt believe. Attack ships on fire off the shoulder of Orion. I watched C-beams glitter in the dark near the Tannhäuser Gate. All those moments will be lost in time, like tears...in...rain. Time to die."');
					sendChat('', '/em ' + parrotName + ' slowly bows his head.');
					break;
				case 'die?':
					sendChat('', '/em ' + parrotName + ' extends the pin feathers of one wing toward ' + speaker + '...');
					sendChat(parrotName,'"To die:—to sleep: No more; and, by a sleep to say we end the heart-ache and the thousand natural shocks that flesh is heir to, tis a consummation devoutly to be wished."');
					sendChat('', '/em ' + parrotName + ' slowly bows his head.');
					break;
				case 'you':
					sendChat('', '/em ' + parrotName + ' violently shakes his head at ' + speaker + '.');
					sendChat(parrotName,'"NO, YOU SHUT UP!"');
					break;
				case 'Beatrice':
					sendChat('', '/em ' + parrotName + ' opens and closes his beak in a silent laugh.');
					sendChat(parrotName,'"Not Beatrice... Polly!"');
					break;
				case 'want':
					sendChat('', '/em ' + parrotName + ' hops and flaps his wings excitedly.');
					sendChat(parrotName,'"want... WANT! WANT! WANT!"');
					break;
				case 'wanna':
					sendChat('', '/em ' + parrotName + ' hops and flaps his wings excitedly.');
					sendChat(parrotName,'"want, not wanna... YES! WANT! YES! WANT!"');
					break;
				default:
					sendChat(parrotName,'"'+ echo + '..." RAWWWK!  "'+ echo +'!"');
					break;
			}
        }
    });
});
