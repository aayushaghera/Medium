
import './App.css'
// import Auth from './pages/Auth'
import Index from './pages/index'
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Write from "./pages/Write";
import About from "./pages/About";
import BlogPost from './pages/BlogPost';
import { BrowserRouter , Route, Routes} from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
              
              <Route path="/" element={<Index></Index>} />
              {/* <Route path="/" element={<Auth></Auth>}/> */}
              <Route path="/blogs" element={<Blogs />} />
               <Route path="/contact" element={<Contact />} />
               <Route path="/write" element={<Write />} />
               <Route path="/about" element={<About />} />
               <Route path="/blog/:id" element={<BlogPost />} />
              {/* <Route path="/signin" element={<Signin />}/>
              <Route path="/blog/:id" element={<Blog />}/>
              <Route path="/blogs" element={<Blogs />}/>
              <Route path="/publish" element={<Publish />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App