console.log('%c HI', 'color: firebrick');

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
  window.fetch("https://dog.ceo/api/breeds/list/all").then(function(response)
  {
    return response.json();
  }).then(function(json)
  {
    console.log(json);
    const ul = document.getElementById("dog-breeds");
    for (let i = 0; i < json.message.length; i++)
    {
      for (let j = 0; j < json.message[i].length; j++)
      {
        const li = document.createElement("li");
        li.append(json.message[i][j]);
        ul.append(li);
      }
    }
  });
});
