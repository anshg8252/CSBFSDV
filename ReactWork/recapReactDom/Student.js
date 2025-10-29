const parent = document.getElementById('parent');
console.log(parent);
const root = ReactDOM.createRoot(parent);
const h2 = React.createElement('h2', {style: {color: 'blue'}}, 'This is created using React');

//JSX
const Myname = <h1>Rahul Kumar</h1>;
const branch = <h2>Computer Science</h2>;
const pic = <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000" alt="" width={200}/>;
const container = (
    <div style={{display:"grid", placeItems:"center", border:"2px solid black", margin:"20px"}}>
        {Myname}
        {branch}
        {pic}
    </div>
);

root.render(container);