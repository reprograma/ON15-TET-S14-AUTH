    window.addEventListener("load", () => {
        const spanText = document.querySelector('.online__users');
        const api = "http://localhost:8099/users/all";
        fetch(api)
          .then(response => response.json())
          .then((data) => {
            data.forEach(user => {
              const { _id, name, email, password } = user;
      
              const userElement = document.createElement("ul");
              
              const id_node = document.createTextNode("ID: " + _id);
              const id_element = document.createElement("li", "id");
              id_element.classList.add("id");
      
              const name_node = document.createTextNode("Name: " + name);
              const name_element = document.createElement("nav");
              name_element.classList.add("name");
      
              const email_node = document.createTextNode("E-mail: " + email);
              const email_element = document.createElement("nav", "email");
              email_element.classList.add("email");

            //   const password_node = document.createTextNode("Password:" + password);
            //   const password_element = document.createElement("p");
            //   password_element.classList.add("´password");
      
              id_element.appendChild(id_node);
              name_element.appendChild(name_node);
              email_element.appendChild(email_node);
            //   password_element.appendChild(password_node);
      
              userElement.appendChild(id_element);
              userElement.appendChild(name_element);
              userElement.appendChild(email_element);
            //   userElement.appendChild(password_element);

              spanText.appendChild(userElement);
            });
          });
      });



