myFunction()
{

Email.send({
    Host : "smtp.gmail.com",
    Username : "j",
    Password : "Happyduboz-14",
    To : 'jduboz@aplus-sa.com',
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);

}