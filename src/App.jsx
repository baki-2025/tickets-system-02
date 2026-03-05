import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TicketList from "./components/TicketList";
import TaskStatus from "./components/TaskStatus";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [tickets, setTickets] = useState([]);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);

  useEffect(() => {
  const fetchTickets = async () => {
     
      const res = await fetch("/tickets.json");
      
      const ticketsData = await res.json();
    
      setTickets(ticketsData); 
    };
  fetchTickets();
 }, []);


  
  const handleAddToTaskStatus = (ticket ) => {
    if (!inProgressTasks.find((t) => t.id === ticket.id)) {
      setInProgressTasks([...inProgressTasks, ticket]);
      toast.success(`${ticket.title} added to Task Status`);
    }
  };

  
  const handleComplete = (id) => {
    const task = inProgressTasks.find((t) => t.id === id);
    if (task) {
      setInProgressTasks(inProgressTasks.filter((t) => t.id !== id));
      setResolvedTasks([...resolvedTasks, task]);
      setTickets(tickets.filter((t) => t.id !== id));
      toast.success(`${task.title} completed!`);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col ">
      <ToastContainer position="top-right" autoClose={2000} />
      <Navbar />
    
      <Banner inProgress={inProgressTasks.length} resolved={resolvedTasks.length} />
      

    <main className=" bg-gray-300 flex flex-cols-2 md:flex-row gap-4 p-4 flex-1">

  
  <div className="flex flex-cols-2 md:flex-row gap-2">
    <TicketList tickets={tickets} onAdd={handleAddToTaskStatus} />
  </div>

  
  <div className="w-full md:w-1/3">
    <TaskStatus
      tasks={inProgressTasks}
      resolved={resolvedTasks}
      onComplete={handleComplete}
    />
  </div>

</main>


      <Footer/>
      </div>
    
  );
}
