import {
  BrowserRouter,
  Routes,
  Router,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";
import { createContext, useContext, useEffect, useState } from "react";
import { useRef } from "react";
function App() {
  const BulbContext = createContext();
  function BulbProvider({ children }) {
    const [bulbOn, setBulbOn] = useState(true);

    return (
      <BulbContext.Provider
        value={{
          bulbOn: bulbOn,
          setBulbOn: setBulbOn,
        }}
      >
        {children}
      </BulbContext.Provider>
    );
  }

  function Home() {
    return <div>Hello From Home</div>;
  }
  function Jobs() {
    return <div>Hello From Jobs</div>;
  }
  function Messages() {
    const navigate = useNavigate();
    useEffect(() => {
      const timer = setTimeout(() => {
        navigate("/home");
      }, 5000);
      return () => {
        clearTimeout(timer);
      };
    }, [navigate]);

    return <div>Hello From Messages</div>;
  }
  function Notifications() {
    return <div>Hello From Notifications</div>;
  }

  function LandingPage() {
    return (
      <div>
        <h1>Well come to React Router</h1>
      </div>
    );
  }

  function Usereff() {
    const [name, setName] = useState("");
    const prev = useRef("");
    const inputRef = useRef();
    useEffect(() => {
      prev.current = name;
    });

    return (
      <>
        <input
          ref={inputRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div>my name is {name}</div>
        <div>Old name {prev.current}</div>
        <button onClick={(e) => inputRef.current.focus()}>Focus</button>
      </>
    );
  }

  function ChatBox() {
    const [messages, setMessages] = useState([
      "Hello",
      "My name is Kaushal...",
    ]);
    const chatRef = useRef(null); // correct default ref value

    const addMessage = () => {
      setMessages((prevMsg) => [...prevMsg, "Hello my name is Amit Patel"]); // fixed
    };

    useEffect(() => {
      if (chatRef.current) {
        chatRef.current.scrollTop = chatRef.current.scrollHeight; // scroll to bottom
      }
    });

    return (
      <>
        <div>
          <div
            ref={chatRef}
            style={{
              height: "100px",
              overflow: "scroll",
              border: "1px solid cyan",
              padding: "5px",
              margin: "10px",
            }}
          >
            {messages.map((msg, index) => (
              <div key={index}>{msg}</div>
            ))}
          </div>
          <button onClick={addMessage}>Add Message</button>
        </div>
      </>
    );
  }

  function Parent() {
    return (
      <>
        <BulbState />
        <ToggleBulbState />
      </>
    );
  }
  function BulbState() {
    const { bulbOn } = useContext(BulbContext);
    return <div>{bulbOn ? "Bulb on 💡" : "Bulb Off "}</div>;
  }
  function ToggleBulbState() {
    const { setBulbOn, bulbOn } = useContext(BulbContext);

    return (
      <div>
        <button
          onClick={(e) => {
            setBulbOn((prev) => !prev);
          }}
        >
          Toggle the bulb
        </button>
      </div>
    );
  }

  function Layout() {
    return (
      <div style={{ height: "100vh", backgroundColor: "beige" }}>
        <div
          style={{
            height: "90vh",
            backgroundColor: "gray",
            border: "3px solid red",
          }}
        >
          <Outlet />
        </div>
        <h1>Footer</h1>
      </div>
    );
  }
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul style={{ content: "" }}>
            <li>
              {" "}
              <Link to={"/"}>Welcome</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/home">Home</Link>
            </li>
            <li>
              {" "}
              <Link to="/data">Data </Link>
            </li>
            <li>
              {" "}
              <Link to="/chat">Chat </Link>
            </li>
            <li>
              {" "}
              <Link to="/bulb">BUlb </Link>
            </li>
            <li>
              {" "}
              <Link to="/messages">Messages</Link>
            </li>
            <li>
              {" "}
              <Link to="/jobs">Jobs</Link>
            </li>
            <li>
              {" "}
              <Link to="/notifications">Notifications</Link>
            </li>
            <li>
              {" "}
              <Link to="/customhook">Custom-Hooks</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/data" element={<Usereff />} />
            <Route path="/chat" element={<ChatBox />} />
            <Route
              path="/bulb"
              element={
                <BulbProvider>
                  <Parent />
                </BulbProvider>
              }
            />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/notifications" element={<Notifications />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
