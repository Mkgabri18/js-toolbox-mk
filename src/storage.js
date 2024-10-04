const local = {
    add: function(key, value) {
        if (typeof key !== 'string' || key.trim() === "") {
            console.error("Key not valid. Must be s string not void.");
            return;
        }
        if (value === undefined || value === null) {
            console.error("Value not valid. undefined and null are not valid.");
            return;
        }

        try {
            const valueStringify = typeof value === 'object' ? JSON.stringify(value) : value.toString();
            localStorage.setItem(key, valueStringify);
        } catch (e) {
            console.error("Error on convertion of value: ", error)
        }
    },

    remove: function(key) {
        if (typeof key !== 'string' || key.trim() === "") {
            console.error("Key not valid. Must be s string not void.");
            return;
        }
        if (localStorage.getItem(key) === null) {
            console.warn(`Key "${key}" not found in localStorage.`);
            return;
        }
        localStorage.removeItem(key);
    },

    get: function(key) {
        if (typeof key !== 'string' || key.trim() === "") {
            console.error("Key not valid. Must be s string not void.");
            return;
        }

        const storedValue = localStorage.getItem(key);
        if (storedValue === null) {
            console.warn(`Key "${key}" not found in localStorage.`);
            return null;
        }

        try {
            // Prova a convertire il valore in oggetto se è in formato JSON 
            const parsedValue = JSON.parse(storedValue);
            return parsedValue;
        } catch (error) {
            console.warn(`Il valore per la chiave "${key}" non è un JSON. Ritorno il valore come stringa.`);
            return storedValue;
        }
    }

}

const session = {
    add: function(key, value) {
        if (typeof key !== 'string' || key.trim() === "") {
            console.error("Key not valid. Must be s string not void.");
            return;
        }
        if (value === undefined || value === null) {
            console.error("Value not valid. undefined and null are not valid.");
            return;
        }

        try {
            const valueStringify = typeof value === 'object' ? JSON.stringify(value) : value.toString();
            sessionStorage.setItem(key, valueStringify);
        } catch (e) {
            console.error("Error on convertion of value: ", error)
        }
    },

    remove: function(key) {
        if (typeof key !== 'string' || key.trim() === "") {
            console.error("Key not valid. Must be s string not void.");
            return;
        }
        if (sessionStorage.getItem(key) === null) {
            console.warn(`Key "${key}" not found in sessionStorage.`);
            return;
        }
        sessionStorage.removeItem(key);
    },

    get: function(key) {
        if (typeof key !== 'string' || key.trim() === "") {
            console.error("Key not valid. Must be s string not void.");
            return;
        }

        const storedValue = sessionStorage.getItem(key);
        if (storedValue === null) {
            console.warn(`Key "${key}" not found in sessionStorage.`);
            return null;
        }

        try {
            // Prova a convertire il valore in oggetto se è in formato JSON 
            const parsedValue = JSON.parse(storedValue);
            return parsedValue;
        } catch (error) {
            console.warn(`Il valore per la chiave "${key}" non è un JSON. Ritorno il valore come stringa.`);
            return storedValue;
        }
    }

}

const cookie = {
    add: function(key, value, options={}) {
        if (typeof key!== 'string' || key.trim() === "") {
            console.error("Key not valid. Must be a string not void.");
            return;
        }
        if (value === undefined || value === null) {
            console.error("Value not valid. undefined and null are not valid.");
            return;
        }

        let cookieStr = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;

        if(options.expires) {
            cookieStr += `; expires=${new Date(options.expires).toUTCString()}`;
        }

        if(options.domain) {
            cookieStr += `; domain=${options.domain}`;
        }

        if(options.path) {
            cookieStr += `; path=${options.path}`;
        }

        if(options.secure) {
            cookieStr += `; secure`;
        }

        if (options.sameSite) {
            cookieStr += `; samesite=${options.sameSite}`;
        }

        document.cookie = cookieStr;
    },

    remove: function(key, options={}) {
        if (typeof key!== 'string' || key.trim() === "") {
            console.error("Key not valid. Must be a string not void.");
            return;
        }

        let cookieStr = `${encodeURIComponent(key)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
        if (options.path) {
            cookieStr += `; path=${options.path}`;
        }
        if (options.domain) {
            cookieStr += `; domain=${options.domain}`;
        }
        document.cookie = cookieStr;
    },

    get: function(key) {
        if (typeof key !== 'string' || key.trim() === "") {
            console.error("Key not valid. Must be a string not void.");
            return null;
        }

        const cookieArr = document.cookie.split(';');
        for (const cookie of cookieArr) {
            const [cookieKey, cookieValue] = cookie.trim().split('=');
            if (decodeURIComponent(cookieKey) === key) {
                return decodeURIComponent(cookieValue);
            }
        }

        console.warn(`Cookie "${key}" not found.`);
        return null;
    },

    clearAll: function() {
        const cookies = document.cookie.split(';');
        for (const cookie of cookies) {
            const [cookieKey] = cookie.split('=');
            this.remove(cookieKey.trim());
        }
        console.log("All cookies have been removed.");
    }
}

export { local, session, cookie }