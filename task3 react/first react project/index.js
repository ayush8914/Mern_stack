// ReactDOM.render(<h1>Hello, world!</h1> ,document.getElementById("root"));
//allows us to write html code in js file for particular element
//allows us to render something on screen

// ReactDOM.render is no longer supported in React 18. Use createRoot instead.
//  Until you switch to the new API, your app will behave as if it’s running React 17.
//   Learn more: https://reactjs.org/link/switch-to-createroot


// ReactDOM.render(
// <ul>
//  <li>milk</li>
// <li>tea</li>
// </ul>
// ,document.querySelector("#d1")
// )

// function NavBar(){
//     return(
// <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <a className="navbar-brand" href="#">Navbar</a>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>
//   <div className="collapse navbar-collapse" id="navbarNavDropdown">
//     <ul className="navbar-nav">
//       <li className="nav-item active">
//         <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">Features</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">Pricing</a>
//       </li>
//       <li className="nav-item dropdown">
//         <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//           Dropdown link
//         </a>
//         <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//           <a className="dropdown-item" href="#">Action</a>
//           <a className="dropdown-item" href="#">Another action</a>
//           <a className="dropdown-item" href="#">Something else here</a>
//         </div>
//       </li>
//     </ul>
//   </div>
// </nav>
//     )
// }

// ReactDOM.render(
//     <div>
//         < NavBar />
//     </div>
//     ,document.getElementById("d1")
// );


//challenge 1 :
// const h1 = document.createElement("h1");
// h1.textContent ="This is an imperative way to program" 
// h1.className = "header"
// document.getElementById("root").appendChild(h1);



//JSX

// const element = <h1 className = "header">This is JSX</h1>
// console.log(element)

// ReactDOM.render(element,document.getElementById("root"))


// const page = (
// <div>
//     <h1>This is JSX</h1>
//     <p>This is paragraph</p>
// </div>
// )


// ReactDOM.render(page,document.getElementById("root"))

// const Navbar = (
//     <nav>
//         <h1>Ayush's Bistro</h1>
//         <ul>
//             <li>Menu</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>

//     </nav>
// ) 

// ReactDOM.render(Navbar,document.getElementById  ("root"))


//Challenge 3: 

// const page = (
//   <div>
//    <div>
//     <img src="React-logo.png" alt = "loading" width="100px"/>
//    </div>
//    <br/>
//    <h1>
//     <b><big>Fun Facts about React</big> </b>
//    </h1><div>
//     <b><ol>
//         <li>Was originally released in 2013</li>
//         <li>Was originally Created by Jordon walke</li>
//         <li>Has Well Over 100K Stars on Github</li>
//         <li>Is maintained By Facebook</li>
//         <li>Powers thousands of enterprise apps, including mobile apps</li>
//     </ol></b>
//    </div></div>
// )
// ReactDOM.render(page,document.getElementById("root"))

