export default function TicketCard({ ticket }) {
  const statusColors = {
    Resolved: "bg-green-300",
    "In Progress": "bg-yellow-200",
    Open: "bg-red-300",
  };

  return (
    <div className="border rounded p-4 shadow  bg-[url('/img/vector2.png')] bg-cover bg-center  ">
      <div className="bg-yellow-50 grid grid-cols-1 md:grid-cols-2 gap-2">
        
        
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-black">{ticket.title}</h3>
          <p className="text-gray-700">{ticket.description}</p>
          <div className="flex gap-2 text-sm mt-2">
            <p className="text-black">
              <span className="font-semibold">#</span> {ticket.id}
            </p>
            <p className="text-red-500 font-semibold">{ticket.priority}</p>
          </div>
        </div>

        
        <div className="flex flex-col justify-between md:items-end gap-2">
          <p
            className={`text-black rounded-full px-2 py-1 ${
              statusColors[ticket.status] || "bg-blue-200"
            }`}
            role="status"
          >
            {ticket.status}
          </p>

          <div className="flex gap-2 text-sm text-black">
            <p>{ticket.customer}</p>
            <p className="text-fuchsia-700">
              {new Date(ticket.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
