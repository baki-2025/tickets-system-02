import TicketCard from "./TicketCard";

export default function TicketList({ tickets, onAdd }) {
  return (
    <div>
    
      <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
         Customer Tickets
      </h2>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tickets.map((ticket) => (
          <div key={ticket.id} onClick={() => onAdd(ticket)}>
            <TicketCard ticket={ticket} />
          </div>
        ))}
      </div>
    </div>
  );
}
