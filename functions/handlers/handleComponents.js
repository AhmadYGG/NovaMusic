const fs = require("fs");

module.exports = (client) => {
    client.handleComponents = async () => {
        const componentFolders = fs.readdirSync("./components");
        for (const folder of componentFolders) {
            const componentFiles = fs
                .readdirSync(`./components/${folder}`)
                .filter((file) => file.endsWith(".js"));

            const { buttons, selectMenus } = client;
            
            switch (folder) {
                case "buttons":
                    for (const file of componentFiles) {
                        const button = require(`../../components/${folder}/${file}`);
                        if (button && button.data) {
                            buttons.set(button.data.name, button);
                        }
                    }
                    break;
            
                case "selectMenus":
                    for (const file of componentFiles) {
                        const selectMenu = require(`../../components/${folder}/${file}`);
                        if (selectMenu && selectMenu.data) {
                            selectMenus.set(selectMenu.data.name, selectMenu);
                        }
                    }
                    break;

                default:
                    break;
            }
        }
    };
};
