import { getBooks } from "../data/data";
import { NavLink, Outlet , useSearchParams, useLocation } from "react-router-dom";

const Books = () => {
    const books = getBooks();
    const [searchParams , setSearchParams] = useSearchParams();
    const location = useLocation();

    return (
        <div style={{ display: "flex" }} className="ml-5">
            <nav style={{  marginLeft: "10rem", paddingLeft: "5rem", borderLeft:".2rem solid"}} className="ml-5">

            

                <input type="text" placeholder="جستجوی کتاب"
                value={searchParams.get("filter") || ""}
                onChange={event =>{
                    let filter = event.target.value ;
                    if (filter){
                        setSearchParams({filter});
                    }else {setSearchParams({});}
                }} />
                {books.filter((book) =>{
                    let filter = searchParams.get("filter");
                    if(!filter) return true;
                    let name = book.name.toLowerCase();
                    return name.startsWith(filter.toLowerCase());
                })
                .map((book) => (
                    <NavLink
                        style={({ isActive }) => {
                            return {
                                display: "block",
                                margin: "2rem 0",
                                
                                color: isActive ? "red" : ""
                            };
                        }} to={`/books/${book.number} ${location.search}`} key={book.number}>{book.name}
                    </NavLink>
                ))}
            </nav>
            
            <Outlet />
            <img src={require("../../src/assets/girl.avif")} style={{width:"30rem", marginLeft:"0"}} className="img-fluid" />
           
           
        </div>
        
    );
};

export default Books;