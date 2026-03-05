export default function TaskStatus({ tasks, resolved, onComplete }) {
  return (
    <aside className="bg-gray-100 p-4 rounded-lg shadow flex flex-col gap-6 max-h-[600px] overflow-y-auto">
      <div>
        <h2 className="font-bold text-2xl text-black mb-3">Task Status</h2>
        {tasks.length === 0 ? (
          <p className="text-sm text-gray-500">No tasks in progress</p>
        ) : (
          tasks.map((task) => (
            <div key={task.id} className="flex flex-col border-b py-2 gap-2">
              <span className="font-medium">{task.title}</span>
              <button
                onClick={() => onComplete(task.id)}
                className="bg-green-500 text-white px-3 py-1 rounded-full text-sm w-max"
              >
                Complete
              </button>
            </div>
          ))
        )}
      </div>

      <div>
        <h2 className="font-bold text-black text-2xl mb-3">Resolved Tasks</h2>
        {resolved.length === 0 ? (
          <p className="text-sm text-gray-700">No resolved tickets yet</p>
        ) : (
          resolved.map((ticket) => (
            <div key={ticket.id} className="flex flex-col border-b py-2 gap-2 text-green-700">
              <span>{ticket.title}</span>
            </div>
          ))
        )}
      </div>
    </aside>
  );
}