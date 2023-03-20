
// const API =
//   "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json"

// const form = document.querySelector("#searchForm")
// const list = document.querySelector(".siteList")
// const keyword = document.querySelector("#searchKeyword")

// function match(station, keyword) {
//   const {sna , ar} = station
//   return sna.includes(keyword) || ar.includes(keyword)
// }

// function createStationHTML({ sna, tot, ar }) {
//   sna = sna.replace("YouBike2.0_", "")
//   return `<li class="list-group-item fs-5">
//             <i class="fas fa-bicycle"></i>
//             ${sna} (${tot})<br />
//             <small class="text-muted">${ar}</small>
//           </li>`
// }

// form.addEventListener("submit", (e) => {
//   e.preventDefault()
//   const searchKeyword = keyword.value.trim()

//   if (searchKeyword != "") {
//     fetch(API)
//       .then((resp) => {
//         return resp.json()
//       })
//       .then((stations) => {
//         list.innerHTML = stations
//           .filter((st) => match(st, searchKeyword))
//           .map(createStationHTML)
//           .join("")
//       })
//   }
// })





const API =
  "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json"

const form = document.querySelector("#searchForm")
const list = document.querySelector(".siteList")
const keyword = document.querySelector("#searchKeyword")

function resetList() {
  list.textContent = ""
}

function addStation(name, amount, address) {
  const listItem = `<li class="list-group-item fs-5">
    <i class="fas fa-bicycle"></i>
    ${name} (${amount})<br />
    <small class="text-muted">${address}</small>
  </li>`
  list.insertAdjacentHTML("afterbegin", listItem)
}

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const searchKeyword = keyword.value.trim()

  if (searchKeyword != "") {
    resetList()

    fetch(API)
      .then((resp) => {
        return resp.json()
      })
      .then((stations) => {
        stations
          .filter(({ sna, ar }) => {
            return sna.includes(searchKeyword) || ar.includes(searchKeyword)
          })
          .forEach(({ sna, tot, ar }) => {
            addStation(sna.replace("YouBike2.0_", ""), tot, ar)
          })
      })
  }
})

// even loop