/**
 * @name unlockHDScreenShare
 * @version 0.0.1
 * @description unlock the ability to share your screen in 1080p
 * @author Ralkey#0516
 * @source https://github.com/RalkeyOfficial/discord-1080p-video-unlocker
 *   
 */


module.exports = class unlockHDScreenShare{
     
    constructor() {
        this.userPremiumType = BdApi.findModuleByProps("getCurrentUser").getCurrentUser().premiumType;
    }
     
    start() { 
        BdApi.findModuleByProps("getCurrentUser").getCurrentUser().premiumType = 2;
    }
    
    stop() {
        BdApi.findModuleByProps("getCurrentUser").getCurrentUser().premiumType = this.userPremiumType;
    }
}
