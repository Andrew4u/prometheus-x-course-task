import { Routes, Route } from "react-router-dom";
import SigninRoute from "./SigninRoute";
import BookListRoute from "./Book-list-route";
import SpecificBookRoute from "./SpecificBookRoute";
import CartPageRoute from "./CartPageRoute";
import Page404Route from "./Page404Route";
import PrivateRoute from "./PrivatePoute";

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SigninRoute />} />
      <Route path="signin" element={<SigninRoute />} />
      <Route
        path="book-list"
        element={
          <PrivateRoute>
            <BookListRoute />
          </PrivateRoute>
        }
      />
      <Route
        path="/specific-book/:bookId"
        element={
          <PrivateRoute>
            <SpecificBookRoute />
          </PrivateRoute>
        }
      />
      <Route
        path="cart-page"
        element={
          <PrivateRoute>
            <CartPageRoute />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Page404Route />} />
    </Routes>
  );
}

// export default function MyRoutes() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [username, setUsername] = useState("");

//   useEffect(() => {
//     const storedUsername = localStorage.getItem("username");
//     if (storedUsername) {
//       setUsername(storedUsername);
//       setIsAuthenticated(true);
//     }
//   }, []);

//   return (
//     <Routes>
//       <Route path="/" element={<SigninRoute />} />
//       <Route path="signin" element={<SigninRoute />} />
//       <Route
//         exact
//         path="book-list"
//         element={
//           isAuthenticated ? (
//             <BookListRoute />
//           ) : (
//             <Navigate to="/signin" replace={true} />
//           )
//         }
//       />
//       <Route path="specific-book" element={<SpecificBookRoute />} />
//       <Route path="cart-page" element={<CartPageRoute />} />
//       <Route path="*" element={<Page404Route />} />
//     </Routes>
//   );
// }
