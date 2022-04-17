/**
 * @name unlockHDScreenShare
 * @version 1.0.0
 * @description unlock the ability to share your screen in 1080p
 * @author Ralkey#0516
 *   
 */


module.exports = class unlockHDScreenShare{
     
    start() { 
        BdApi.findModuleByProps("getCurrentUser").getCurrentUser().premiumType = 2;
    }
    
    stop() {

    }
}