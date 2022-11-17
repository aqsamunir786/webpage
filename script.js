fetch("https://jsonplaceholder.typicode.com/users").then((data)=>{
    return data.json();

}).then((objectData)=>{
    console.log(objectData[0].title);



    let tableData ="";

    objectData.map((values)=>{
        tableData+=`
     
            <tr>
              <td>${values.name}</td>
              <td>${values.email}</td>
              <td>${values.address.zipcode+values.address.suite}</td>

              
            </tr>
            
          </tbody>
        </table>
      
        
        
        `
    });
    document.getElementById("id").innerHTML=tableData;
})