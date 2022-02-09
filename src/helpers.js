let choice = (items) => {
    let randomIdx = Math.floor(Math.random() * items.length)
    return items[randomIdx];
}

let remove = (items,item) => {
  if(items.indexOf(item) !== -1){
      items.splice(items.indexOf(item),1);
      return items;
  }
}


export default {choice,remove};