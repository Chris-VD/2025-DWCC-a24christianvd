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
    if (Object.values(data).length == 0) return "";
    let ul = document.createElement("ul");
    for (element in data){
        let li = document.createElement("li");
        li.append(element);
        li.append(createTree(data[element]));
        ul.append(li);
    }
    return ul;
}

document.querySelector("#erm").after(createTree(arbore))