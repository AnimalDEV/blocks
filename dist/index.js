import { LoadScene } from "./scenes/LoadScene.js";
const config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    scene: [
        LoadScene
    ]
};
new Phaser.Game(config);
//# sourceMappingURL=index.js.map