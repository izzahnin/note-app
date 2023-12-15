import ActiveNote from "./components/ActiveNote";
import Header from "./components/Header";
import InputNote from "./components/InputNote";
// import NoteCard from "./components/NoteCard";

function App() {
  return (
    <main className="w-screen h-screen flex flex-col">
      <Header/>
      <InputNote/>
      <ActiveNote/>
      
    </main>
  );
}

export default App;
