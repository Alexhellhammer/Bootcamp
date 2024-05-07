/**
 *     @author Alexander Pena <alexhellhammer@hotmail.com>
 *     @fileOverview This script use Fetch API & JSON
 *     @licence BSD 3-Clause License
 */ 

const getAvatarUrl = () => {
    const url = 'https://api.github.com/users/mojombo/followers';
  
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('La respuesta de la red no fue exitosa.');
        }
      })
      .then(data => {
        data.forEach(user => {
          console.log(`Usuario: ${user.login}`); 
          console.log(`ID: ${user.id}`); 
          console.log(`Node ID: ${user.node_id}`); 
          console.log(`Avatar URL: ${user.avatar_url}`);
        });
      })
      .catch(error => {
        console.error('Se ha producido un problema con la operación de obtención de datos:', error);
      });
  }
  
  getAvatarUrl();
  
  
  
