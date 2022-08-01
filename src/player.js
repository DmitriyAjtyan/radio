import 'core-js/stable/symbol'
import 'core-js/stable'
import IcecastMetadataPlayer from "icecast-metadata-player";

const player = new IcecastMetadataPlayer("/rock", {
    onMetadata: (metadata) => {
        console.log('metadata: ', metadata);
    },
    metadataTypes: ["icy"]
});

// create Play button
console.log(player);
console.log(player.playbackMethod);
window.icecast = player;
const playButtonElement = document.createElement('button')
playButtonElement.innerText = 'play'
playButtonElement.onclick = () => {
    console.log('PLAY')
    player.play()
}
document.body.appendChild(playButtonElement)

// create Pause button
const pauseButtonElement = document.createElement('button')
pauseButtonElement.innerText = 'pause'
pauseButtonElement.onclick = () => {
    console.log('PAUSE')
    player.stop()
}
document.body.appendChild(pauseButtonElement)
