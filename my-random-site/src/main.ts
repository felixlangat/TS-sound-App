import './style.css';
//import sounds froms public sounds-app folder

interface SoundDescription {
  key: string;
  name: string;
  url: string;
}
const localSound = (fileName: string): string =>
  `${import.meta.env.BASE_URL}sound-app/${fileName}`;

const SOUNDS : SoundDescription[] = [
  {
    key: 'a',
    name: 'boom',
    url: 'https://actions.google.com/sounds/v1/cartoon/cartoon_boing.ogg'
  },
  {
    key: 's',
    name: 'clap',
    url: 'https://raw.githubusercontent.com/ezillinger/drum-machine/master/clap.mp3'
  },
  {
    key: 'd',
    name: 'space-ship',
    url: 'https://actions.google.com/sounds/v1/alarms/spaceship_alarm.ogg'
  },
  {
    key:'f',
    name:'phone-alert',
    url:'https://actions.google.com/sounds/v1/alarms/phone_alerts_and_rings.ogg'

  },
  
  {
    key:'q',
    name:'ahhh',
    url: localSound('ahhhhhhhh.mp3')
  },
  {
    key:'w',
    name:'bruh',
    url: localSound('bruh_meme.mp3')
  },
  {
    key:'e',
    name:'core',
    url: localSound('core_transition.mp3')
  },
  {
    key:'r',
    name:'fahh',
    url: localSound('fahhhhh.mp3')
  },
  {
    key:'t',
    name:'fart',
    url: localSound('fart.mp3')
  },
  {
    key:'u',
    name:'fbi',
    url: localSound('fbi_open_the_door.mp3')
  },
  {
    key:'i',
    name:'I-got-this',
    url: localSound('i_got_this.mp3')
  },
  {
    key:'O',
    name:'nope',
    url: localSound('nope_meme.mp3')
  },
  {
    key:'p',
    name:'hell-no',
    url: localSound('oh_hell_no_man.mp3')
  },
  {
    key:'g',
    name:'oh-my-god-wow',
    url: localSound('oh_my_god_wow.mp3')
  },
  {
    key:'h',
    name:'omaiga',
    url: localSound('omaiga_meme.mp3')
  },
  {
    key:'j',
    name:'spider',
    url: localSound('spider_2099.mp3')
  },
  {
    key:'k',
    name:'uia',
    url: localSound('uia.mp3')
  },
  {
    key:'l',
    name:'what',
    url: localSound('what.mp3')
  },
  {
    key:'z',
    name:'wow',
    url: localSound('wow.mp3')
  },
  {
    key:'c',
    name:'wonk',
    url: localSound('wonk_wonk.mp3')
  },
  {
    key:'x',
    name:'x-files',
    url: localSound('x_files.mp3')
  },
  {
    key:'c',
    name:'yeah-bwoy',
    url: localSound('yeah_boy.mp3')
  },
  
];


const board = document.getElementById('soundboard') as HTMLDivElement;
console.log("found the soundboard element:", board);

function playSound(url: string,buttonElement: HTMLButtonElement){
  const audio = new Audio(url);
  audio.currentTime = 0;
  audio.play();
  buttonElement.classList.add('active');
  setTimeout(()=> {
    buttonElement.classList.remove('active');
  },150);
  
}

SOUNDS.forEach((sound) => {
  
  const btn = document.createElement('button');
  btn.className = 'sound-btn';
  btn.innerHTML = `
    <span class="sound-name">${sound.name}</span>
    <kbd class="sound-key">${sound.key.toUpperCase()}</kbd>`

   
    btn.addEventListener('click',() => {
     playSound(sound.url,btn);
     
     
     //add event listner when a key is pressed
      window.addEventListener('keydown',(event) => {
        if (event.key.toLowerCase() === sound.key){
          playSound(sound.url,btn); 

        }
      })

    })
    board.appendChild(btn)
  


})
document.addEventListener('keydown', (event) => {
  const sound = SOUNDS.find(s => s.key === event.key);
  if (sound) {
    const audio = new Audio(sound.url);
    audio.currentTime = 0;
    audio.play();
  }
});
 