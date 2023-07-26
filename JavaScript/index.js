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

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "hh:mm:ss"
          )}<small>${cityTime.format("A")}</small></div>
          </div>
          <small><a href="/">All countries</a></small>`;
}

let citiesSelectElement = document.querySelector("#city-dropdown");
citiesSelectElement.addEventListener("change", updateCity);
