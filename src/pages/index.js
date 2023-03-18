export default function Home() {
  return (
    <div className="h-full w-full bg-slate-300 flex">
      {/* Three column layout for todo list */}

      {/* Folder List */}
      <div className="w-1/3 h-full bg-slate-200 flex flex-col max-w-[280px] min-w-[280px]">
        <div className="h-1/6 bg-slate-100 flex items-center justify-center">
          <h1 className="text-2xl font-bold">Todo List</h1>

        </div>

        <div className="h-5/6 bg-slate-100 flex flex-col">
          <div className="h-1/6 bg-slate-100 flex items-center justify-center">
            <h1 className="text-xl font-bold">Folders</h1>
          </div>
        </div>
      </div>

      {/* Todo List */}
      <div className="flex-2 w-full h-full bg-slate-100 flex flex-col">
        Todo lists input checkboxes
      </div>
          
      {/* Todo Item detail column */}
      <div className="flex-1 h-full bg-slate-200 flex flex-col max-w-[330px] min-w-[280px]">
        <div className="h-1/6 bg-slate-100 flex items-center justify-center">
          <h1 className="text-2xl font-bold">Todo List</h1>
        </div>
      </div>
    </div>
  )
}
