import { MainMenuScene } from './MainMenuScene.js';
export class LoadScene extends Phaser.Scene {
    constructor() {
        super({
            key: "LOAD"
        });
    }
    init(data) {
        console.log(data);
        console.log("I got it");
    }
    preload() {
        this.load.image("title", "assets/images/title.png");
        this.load.image("single_button", "assets/images/single_button.png");
        this.load.image("multi_button", "assets/images/multi_button.png");
        this.load.image("options_button", "assets/images/options_button.png");
        this.load.audio("song", "assets/sounds/sparkwood.mp3");
        let loadingBar = this.add.graphics({
            fillStyle: {
                color: 0xffffff
            }
        });
        this.load.on("progress", (percent) => {
            loadingBar.fillRect(0, this.game.renderer.height / 2, this.game.renderer.width * percent, 50);
            console.log(percent);
        });
        this.load.on("complete", () => {
            console.log("Done loading");
        });
    }
    create() {
        this.scene.add("MENU", MainMenuScene, false);
        this.scene.start("MENU", { hi: "helo from LoadScene" });
    }
    update() { }
}
//# sourceMappingURL=LoadScene.js.map