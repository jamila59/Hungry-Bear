import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { convert } from './roman-numerals';


$(document).ready(function() {
  $("form#conversionForm").submit(function(event) {
    event.preventDefault();
    var conversion = convert($("input#userInput").val());
    $("#conversionResult").text(conversion);
    $("#result").show();
  });
});
