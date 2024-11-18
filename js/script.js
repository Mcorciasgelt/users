const min = 18
const max = 50

const lista = document.getElementById("listaUsuarios")


fetch("https://jsonplaceholder.typicode.com/users")

    .then((response) => {
        if(!response.ok) {
            throw new Error("Ha ocurrido un error")
        }
        return response.json()
    })

    .then((data)=>{
        console.log(data);
        
        data.forEach(element => {   
            
            element.age = Math.floor(Math.random()*(max - min + 1) + min)

            const {id, name,username, age, email, phone} = element
            const nuevoUsuario = document.createElement("li")
            nuevoUsuario.innerHTML = 
            `
            
                <div class="divUsuario">
                    <div class="divInformacion">
                        <p>
                            Nombre: ${name}</br>
                            Edad:${age}</br>
                            Username: ${username}</br>   
                            Teléfono: ${phone}</br>
                            Email: ${email}</br>
                        </p>
                        <img src="./assets/img/${id}.jpeg" alt="${name}"></img>
                    </div>
                    <p>
                        Compañía: ${element.company.name}</br>
                        Dirección: ${element.address.street}, ${element.address.suite}, ${element.address.city}
                    </p>

                </div>
            
            `
            lista.appendChild(nuevoUsuario)
        });

       
    })

    .catch((err) => {
        console.log("err fetch", err)
    })


