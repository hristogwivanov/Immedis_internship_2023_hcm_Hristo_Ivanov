const { SERVER_URL } = require("../config/constants");

class Requester {
    async request(method, path, token, payload) {

        const options = {
            method,
            headers: {
                'Content-Type': 'application/json'
            }
        }

        if (token) {
            options.headers['jwt-auth'] = token;

        }
        if (payload != undefined) {
            options['body'] = JSON.stringify(payload);
        }

        const res = await fetch(SERVER_URL + path, options);
        console.log(options);

        console.log (options['body'])

 
        if (!res.ok) {
            const error = await res.json();
            error.status = res.status;
            throw error;
        }

        
        if (res.status == 204) {
            return res;
        }
        console.log("response:")
        console.log(res);
        const data = await res.json();
        console.log("data:")
        console.log(data);
        return data;
    }

    getReq(path, token){
        return this.request('GET', path, token);
    }
    postReq(path, payload, token){
        return this.request('POST', path, token, payload);
    }
    putReq(path, payload, token){
        return this.request('PUT', path, token, payload)
    }
    deleteReq(path, token){
        return this.request('DELETE', path, token)
    }
}

module.exports = Requester;