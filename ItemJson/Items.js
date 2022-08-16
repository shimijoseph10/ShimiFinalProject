const data = [
    {
      itemId: 1,
      name: "item 1",
      price: 20,
      description: "some text description",
      manufacturer: "Apple",
      Image: "https://cdn.britannica.com/29/186029-050-DB36AE92/Variety-potatoes.jpg?w=690&h=388&c=crop"
    },
    {
      itemId: 2,
      name: "item 2",
      price: 50,
      description: "some text description",
      manufacturer: "Apple",
      Image: "https://cdn.britannica.com/32/82532-050-10271206/peas.jpg?w=690&h=388&c=crop"
    },
    {
    itemId : 3,
    name: "item 3",
    price: 30,
    description: "some text description",
    manufacturer: "Samsung",
    Image: "https://cdn.britannica.com/48/12548-004-68A15563/Cucumber.jpg?w=690&h=388&c=crop"
  },
  {
    itemId: 4,
    name: "item 4",
    price: 10,
    description: "some text description",
    manufacturer: "Google",
    Image: "https://cdn.britannica.com/62/118162-050-56CC9480/cultivar-Thai-chili-peppers-fruits.jpg?w=690&h=388&c=crop"
  },
  {
    itemId: 5,
    name: "item 5",
    price: 10.2,
    description: "some text description",
    manufacturer: "Instagram",
    Image: "https://cdn.britannica.com/18/174518-050-AF7D36EC/sampling-diversity-pepper-genus-farmers-market.jpg?w=690&h=388&c=crop"
  },
  {
    itemId: 6,
    name: "item 6",
    price: 30.2,
    description: "some text description",
    manufacturer: "Netflix",
    Image: "https://cdn.britannica.com/88/218888-050-646B14A5/fruit-chayote-plant-Sechium-edule.jpg?w=690&h=388&c=crop"
  },
  {
    itemId: 7,
    name: "item 7",
    price: 20,
    description: "some text description",
    manufacturer: "Apple",
    Image: "https://cdn.britannica.com/29/186029-050-DB36AE92/Variety-potatoes.jpg?w=690&h=388&c=crop"
  },
  {
    itemId: 8,
    name: "item 8",
    price: 50,
    description: "some text description",
    manufacturer: "Apple",
    Image: "https://cdn.britannica.com/32/82532-050-10271206/peas.jpg?w=690&h=388&c=crop"
  },
  {
    itemId: 9,
    name: "item 9",
    price: 30,
    description : "some text description",
    manufacturer: "Samsung",
    Image: "https://cdn.britannica.com/48/12548-004-68A15563/Cucumber.jpg?w=690&h=388&c=crop"
  },
  {
    itemId: 10,
    name: "item 10",
    price: 10,
    description: "some text description",
    manufacturer: "Google",
    Image: "https://cdn.britannica.com/62/118162-050-56CC9480/cultivar-Thai-chili-peppers-fruits.jpg?w=690&h=388&c=crop"
  },
        
  ];
  
  export function getDatas() {
      return data;
  }
  
  export function getData(id) {
      return data.find((data) => (data.itemId == id));
  }
  
  