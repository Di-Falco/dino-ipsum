import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DinoIpsum from './dino-ipsum.js';

function clearFields(){
  $("#userInput").val("");
  $(".output").val("");
}

$(document).ready(function() {
  $("#dinoForm").submit(function(event){
    event.preventDefault();
    let number = $("#userInput").val();
    clearFields();
    let promise = DinoIpsum.getDinos(number);
    promise.then(function(response){
      const body = JSON.parse(response);
      const array = body[0];
      $(".output").text(array.join(" and "));
    }, function(error){
      $(".output").text(`There was an error processing your request ${error}`);
    });
  });
});

// Therizinosaurus