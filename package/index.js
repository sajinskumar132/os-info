function osDetails(){
    const os=require('os')
    return {userName:os.userInfo().username,machineName:os.hostname()}
   }
module.exports=osDetails