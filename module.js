

MODULES.moduleClasses["chat_ding"] = class {

    constructor(id) {
        this.namespace = "chat_ding";
        this.type = "settings";
        this.id = id;

        koi.addEventListener("chat", (event) => {
            if (this.settings.enabled) {
                let audio = new Audio("https://e3ndr.github.io/Chat-Ding/dink.mp3");

                audio.volume = this.settings.volume;
                audio.play();
            }
        });
    }

    getDataToStore() {
        return this.settings;
    }

    settingsDisplay = {
        volume: "range",
        enabled: "checkbox"
    };

    defaultSettings = {
        volume: 1,
        enabled: true
    };

};
