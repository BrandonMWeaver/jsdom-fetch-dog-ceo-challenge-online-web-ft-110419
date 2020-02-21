console.log('%c HI', 'color: firebrick');

const breeds = [];

window.addEventListener("DOMContentLoaded", function(event)
{
  window.fetch("https://dog.ceo/api/breeds/image/random/4").then(function(response)
  {
    return response.json();
  }).then(function(json)
  {
    for (let i = 0; i < json.message.length; i++)
    {
      const img = document.createElement("img");
      img.src = json.message[i];
      document.body.append(img);
    }
  });
  const fetchBreeds = window.fetch("https://dog.ceo/api/breeds/list/all").then(function(response)
  {
    return response.json();
  }).then(function(json)
  {
    for (const property in json.message)
    {
      breeds.push(property);
      const ul = document.getElementById("dog-breeds");
      const li = document.createElement("li");
      li.innerText = property;
      li.style.cursor = "pointer";
      li.addEventListener("click", function()
      {
        li.style.color = "pink";
      });
      ul.append(li);
    }
  });
  const dropdown = document.getElementById("breed-dropdown");
  dropdown.addEventListener("change", function()
  {
    const ul = document.getElementById("dog-breeds");
    const allLi = document.querySelectorAll("li");
    for (let i = 0; i < allLi.length; i++)
    {
      allLi[i].remove();
    }
    for (let i = 0; dropdown.options.length; i++)
    {
      const option = dropdown.options[i];
      const ul = document.getElementById("dog-breeds");
      if (option.selected === true)
      {
        for (const breed in breeds)
        {
          console.log(breed);
          if (breed[0] == option)
          {
            const li = document.createElement("li");
            li.innerText = property;
            li.style.cursor = "pointer";
            li.addEventListener("click", function()
            {
              li.style.color = "pink";
            });
            ul.append(li);
          }
        }
      }
    }
    ul.removeChild();
  });
});
