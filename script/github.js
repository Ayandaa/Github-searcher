let headers = new Headers({
    "Content-Type":"application/json",
    "User-Agent":"Ayandaa",
    "Authorization": {'47f24e90b8efef548f3a':'f593f3dacbeedf568ebdd61c8f45f0748cbd1735'}
})
class Github {
    constructor(){
        this.client_id = '47f24e90b8efef548f3a';
        this.client_secret ='f593f3dacbeedf568ebdd61c8f45f0748cbd1735';
    }

    //asynchronous get user method
    async getUser(user){
        const profileResponse = await fetch( `https://api.github.com/users/${user}`,headers);
        //checking for HTTP status
        if(!profileResponse.ok){
            return profileResponse.status;
        }
        else{
            const profileData = await profileResponse.json();
            return {
                profile:profileData
            }
        
        }    
    }
}