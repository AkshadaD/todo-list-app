
//array in local storage for registered users
let users = JSON.parse(localStorage.getItem('users')) || [];

//backend
export function configureBackend(){
    let realFetch = window.fetch;
    window.fetch = function(url,opts){
        return new Promise((resolve,reject) => {
        setTimeout(() => {
            
            //register user
            if(url.endsWith('/register') && opts.method === 'POST'){
                let newUser = JSON.parse(opts.body);

                //check if duplicate
                let duplicateUser = users.filter(user => {return user.username === newUser.username; }).length;
                if(duplicateUser){
                    reject('Username "' +newUser.username + '" is already taken');
                    return;
                }

                //save new user
                newUser.id = users.length ? Math.max(...users.map(user => user.id)) +1 : 1;
                users.push(newUser);
                localStorage.setItem('users', JSON.stringify(users));

                //respond
                resolve({ok:true, text: () => Promise.resolve()});
                return;
            }

            realFetch(url, opts).then(response => resolve(response));
        },500);
        });
    }
}