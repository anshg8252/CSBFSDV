const parent = document.getElementById('parent');
const root = ReactDOM.createRoot(parent);
// const h2=React.createElement("h2",{style:{color:'Brown',backgroundColor:'aqua'}},"Welcome to React App");

// const li1=React.createElement("li",{},"Java");
// const li2=React.createElement("li",{},"Python");
// const li3=React.createElement("li",{},"React");
// const ul=React.createElement("ul",{style:{color:'Brown',backgroundColor:'aqua'}},li1,li2,li3)
// // root.render(h2);
// // root.render(ul);

// const pic=React.createElement("img",{src:"https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg", style:{width:"200px", borderRadius:"20px"}});
// const myname=React.createElement('h3',{},"Ansh Gupta");
// const intro=React.createElement('div',{style:{display:"flex", gap:"50px"}},pic,myname);

// const wrapper=React.createElement('div',{},h2,intro,ul);

const h2 = <h2>Hello using JS</h2>;
const li1 = <li>React</li>;
const li2 = <li>Java</li>;
const ul = <ul>{li1}{li2}</ul>;
const container = (
    <div>
        {h2}
        {ul}
    </div>
);

root.render(container);