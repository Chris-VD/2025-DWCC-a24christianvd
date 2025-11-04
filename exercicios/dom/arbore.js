let arbore = {
  Fish: {
    trout: {},
    salmon: {},
  },
  Tree: {
    Huge: {
      sequoia: {},
      oak: {},
    },
    Flowering: {
      "apple tree": {},
      magnolia: {},
    },
  },
};

function createTree(data){
    let ul = document.createElement("ul")
    if (Object.values(data).length == 0){
        return 
    }
    console.log(data);
    for (element in data){
        let li = document.createElement("li")
        li.append(element)
        console.log(Object.values(data[element]).length)
        li.append(createTree(data[element]))
        ul.append(li)
    }
    return ul
}

document.querySelector("#erm").after(createTree(arbore))