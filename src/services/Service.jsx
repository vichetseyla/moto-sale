const motorcycles = `[
    {
        "id":1,
        "brand":"Honda",
        "model":"Dream",
        "year":2021,
        "price":2250,
        "displacement":"124.85cc",
        "fuelSystem":"Carburetor",
        "engineSystem":"4-stroke / single-cylinder / OHC / Free Air",
        "image":"https://www.ncxhonda.com/motorcycles/storage/app/uploads/Product%26Service/Dream-Black(22).png"
    },
    {
        "id":2,
        "brand":"Honda",
        "model":"Wave 110",
        "year":2022,
        "price":1889,
        "displacement":"109.17cc",
        "fuelSystem":"Carburetor",
        "engineSystem":"4-stroke / single-cylinder / OHC / Free Air",
        "image":"https://www.ncxhonda.com/motorcycles/storage/app/uploads/color%20chart/K89N/Black.jpg.png"
    },
    {
        "id":3,
        "brand":"Honda",
        "model":"Zoomer-X",
        "year":2022,
        "price":1989,
        "displacement":"108.20cc",
        "fuelSystem":"PGM-FI",
        "engineSystem":"4-stroke / single-cylinder / OHC / Fan Cool",
        "image":"https://www.ncxhonda.com/motorcycles/storage/app/uploads/page/zoomer-white.png"
    },
    {
        "id":4,
        "brand":"Honda",
        "model":"Click 150i",
        "year":2022,
        "price":3200,
        "displacement":"149.32cc",
        "fuelSystem":"Programed Fuel Injection (PGM-FI)",
        "engineSystem":"4-stroke / single-cylinder / OHC / Liquid",
        "image":"https://www.ncxhonda.com/motorcycles/storage/app/uploads/Product%26Service/Click-150white.png"
    }
]`
const Service = {
    getMotorcycles: () => {
        return JSON.parse(motorcycles)
    },
    getMotorcycleById: (id) => {
        let intId = parseInt(id)
        let data = JSON.parse(motorcycles)
        return data.find(motorcycle => motorcycle.id == intId)
    }
}
export default Service;