function updateTime() {
  //London
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz(`Europe/London`);

  londonDateElement.innerHTML = moment().format("MMMM Do YYYY");
  londonTimeElement.innerHTML = londonTime.format(
    `hh:mm:ss [<small>]A[</small>]`
  );

  //Shanghai
  let shanghaiElement = document.querySelector("#shanghai");
  let shanghaiDateElement = shanghaiElement.querySelector(".date");
  let shanghaiTimeElement = shanghaiElement.querySelector(".time");
  let shanghaiTime = moment().tz(`Asia/Shanghai`);

  shanghaiDateElement.innerHTML = moment().format("MMMM Do YYYY");
  shanghaiTimeElement.innerHTML = shanghaiTime.format(
    `hh:mm:ss [<small>]A[</small>]`
  );
}

updateTime();
setInterval(updateTime, 1000);
