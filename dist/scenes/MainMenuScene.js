export class MainMenuScene extends Phaser.Scene {
    constructor() {
        super({
            key: "MENU"
        });
    }
    init(data) {
        console.log(data);
        console.log("I got it MainMenuScene");
    }
    preload() { }
    create() {
        this.add.image(window.innerWidth / 10, 0, "title").setOrigin(0);
        const single = this.add.image(window.innerWidth / 2.5, (window.innerHeight / 5) * 2, "single_button").setOrigin(0);
        const multi = this.add.image(window.innerWidth / 2.5, (window.innerHeight / 5) * 3, "multi_button").setOrigin(0);
        // const options = this.add.image(window.innerWidth /2.5,(window.innerHeight / 5) * 4, "options_button").setOrigin(0);
        single.setInteractive();
        single.on("pointerdown", () => {
            this.sound.removeByKey("song");
        });
        let inter2;
        single.on("pointerover", () => {
            single.tint = Math.random() * 0xffffff;
            inter2 = setInterval(() => {
                single.tint = Math.random() * 0xffffff;
            }, 500);
        });
        single.on("pointerout", () => {
            single.clearTint();
            clearInterval(inter2);
        });
        multi.setInteractive();
        multi.on("pointerdown", () => {
            this.sound.play("song", { loop: true });
        });
        let inter;
        multi.on("pointerover", () => {
            multi.tint = Math.random() * 0xffffff;
            inter = setInterval(() => {
                multi.tint = Math.random() * 0xffffff;
            }, 500);
        });
        multi.on("pointerout", () => {
            multi.clearTint();
            clearInterval(inter);
        });
    }
    update() { }
}
//# sourceMappingURL=MainMenuScene.js.map