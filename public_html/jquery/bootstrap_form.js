$(document).ready(function(){
    console.log('herer')
     $("#button").click(function(){
        $("#nam").text("Name:"+$("#name").val());
        $("#id1").text("Email:"+$("#email").val());
        $("#password").text("Password:"+$("#pwd").val());
        $("#gender").text(("Gender:"+$("input[name='gender']:checked").val())); 
       });
});
var data=[{
 "firstcolumn":"56036", 
 "loc":"Deli", 
 "lastA":"Activity", 
 "mTime":"2011-02-01 11:59:26.243", 
 "nTime":"2011-02-01 10:57:02.0", 
 "Time":"2011-02-01 10:57:02.0", 
 "Age":"9867 Hour(s)", 
 "ction":" ", 
 "nTime":null
 },
 
 {
  "firstcolumn":"56036",
  "loc":"Deli",
  "lastA":"Activity",
  "mTime":"2011-02-01 11:59:26.243",
  "nTime":"2011-02-01 10:57:02.0",
  "Time":"2011-02-01 10:57:02.0",
  "Age":"9867 Hour(s)",
  "ction":" ", 
  "nTime":null
  },
  {
   "firstcolumn":"56036",
   "loc":"Deli", 
   "lastA":"Activity",
   "mTime":"2011-02-01 11:59:26.243",
   "nTime":"2011-02-01 10:57:02.0",
   "Time":"2011-02-01 10:57:02.0",
   "Age":"9867 Hour(s)",
   "ction":" ",
   "nTime":null
   },
   {
    "firstcolumn":"56036",
    "loc":"Deli",
    "lastA":"Activity",
    "mTime":"2011-02-01 11:59:26.243",
    "nTime":"2011-02-01 10:57:02.0",
    "Time":"2011-02-01 10:57:02.0",
    "Age":"9867 Hour(s)",
    "ction":" ",
    "nTime":null
    }];