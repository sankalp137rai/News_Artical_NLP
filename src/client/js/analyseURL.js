// importing function to validate url
import { isUrlValid } from "./validateURL";

function urlRequest(event) {
  //preventing Default action of form submit
  event.preventDefault();
  const url = document.querySelector("#url").value;

  //checking if url is not empty and vaild
  if (!url || !isUrlValid(url)) return;

  //sending post request to our server to analyse article
  fetch("/url", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text: url }),
    mode: "cors"
  })
    //converting response to JSON
    .then(res => res.json())

    //Updating UI after response is changed to JSON
    .then(data => {
      //making the output visible
      document.querySelector("#output").classList.remove('disabled');

      //adding data of response to DOM 
      document.querySelector("#article_text").innerHTML = data.text;
      document.querySelector("#subjectivity").innerHTML = data.subjectivity;
      document.querySelector("#subjectivity_confidence").innerHTML = data.subjectivity_confidence;
      document.querySelector("#polarity").innerHTML = data.polarity;
      document.querySelector("#polarity_confidence").innerHTML = data.polarity_confidence;
    });
}

export { urlRequest };
